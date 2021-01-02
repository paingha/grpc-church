// Copyright 2020 Paingha Joe Alagoa. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package main

import (
	"net"

	"bitbucket.com/church/plugins"
	"bitbucket.com/church/protos/sermon"
	"bitbucket.com/church/protos/user"
	"bitbucket.com/church/server/config"
	"bitbucket.com/church/server/models"
	sermonServer "bitbucket.com/church/server/sermon"
	userServer "bitbucket.com/church/server/user"
	"github.com/jinzhu/gorm"
	"google.golang.org/grpc"
)

func main() {
	var errs error
	config.LoadEnvFile()
	systemCfg := &config.SystemConfig{}
	if err := config.InitConfig(systemCfg); err != nil {
		plugins.LogFatal("gRPC Server", "Environment Variables error", err)
	}
	// Connect to Database
	config.DB, errs = gorm.Open("postgres", config.GetConnectionContext())
	if errs != nil {
		plugins.LogFatal("gRPC Server", "Database connection error", errs)
	}
	defer config.DB.Close()
	config.DB.LogMode(true)

	//Run Database Migration here
	config.DB.AutoMigrate(&models.User{})
	config.DB.AutoMigrate(&models.Sermon{})
	app, err := net.Listen("tcp", ":9000")
	if err != nil {
		plugins.LogFatal("gRPC Server", "An error occured ", err)
	}
	plugins.LogInfo("gRPC Server", "Running gRPC Server...")
	grpcServer := grpc.NewServer()
	sermon.RegisterSermonServer(grpcServer, &sermonServer.Server{})
	user.RegisterUserServer(grpcServer, &userServer.Server{})
	if err := grpcServer.Serve(app); err != nil {
		plugins.LogFatal("gRPC Server", "failed to serve: ", err)
	}
}
