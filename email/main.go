// Copyright 2020 Paingha Joe Alagoa. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package main

import (
	"context"
	"log"
	"net"

	"bitbucket.com/church/email/config"
	"bitbucket.com/church/email/models"
	"bitbucket.com/church/plugins"
	"bitbucket.com/church/protos/email"
	"github.com/jinzhu/copier"
	"google.golang.org/grpc"
)

//SystemCfg - System configuration with environment variables
var SystemCfg = &config.SystemConfig{}

//Server - Struct holding Sermons
type Server struct {
	email.EmailServer
}

//SendEmail - Create new Sermon
func (*Server) SendEmail(ctx context.Context, r *email.SendEmailRequest) (*email.SendEmailResponse, error) {
	log.Printf("Receive message body from client: %s", r.To)
	var newEmail models.EmailParam
	copier.Copy(&newEmail, r)
	if err := SendEmail(newEmail, SystemCfg); err != nil {
		plugins.LogError("MailService", "an error occured", err)
		return &email.SendEmailResponse{
			Message: "An error occured while sending Email",
		}, err
	}
	return &email.SendEmailResponse{
		Message: "Email sent successfully",
	}, nil
}

//TODO: Implement SendManyEmails - gRPC stream to send emails to numerous emails

func main() {
	files := map[string]string{
		"TemplateVerifyEmail": "./templates/verify.html",
		"TemplateResetEmail":  "./templates/password-reset.html",
	}
	getFilesContents(files)
	config.LoadEnvFile()
	SystemCfg = &config.SystemConfig{}
	if err := config.InitConfig(SystemCfg); err != nil {
		plugins.LogFatal("gRPC Email Service", "Email Service Environment Variables error", err)
	}
	app, err := net.Listen("tcp", ":9001")
	if err != nil {
		plugins.LogFatal("gRPC Email Service", "An error occured ", err)
	}
	plugins.LogInfo("gRPC Email Service", "Running gRPC Email Service...")
	grpcServer := grpc.NewServer()
	email.RegisterEmailServer(grpcServer, &Server{})
	if err := grpcServer.Serve(app); err != nil {
		plugins.LogFatal("gRPC Email Service", "Email Service failed to serve: ", err)
	}

}
