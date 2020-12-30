package main

import (
	"net"

	"bitbucket.com/church/plugins"
	"bitbucket.com/church/protos/sermon"
	"bitbucket.com/church/server/config"
	"bitbucket.com/church/server/models"
	sermonServer "bitbucket.com/church/server/sermon"
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
	config.DB.AutoMigrate(&models.Sermon{})
	app, err := net.Listen("tcp", ":9000")
	if err != nil {
		plugins.LogFatal("gRPC Server", "An error occured ", err)
	}
	plugins.LogInfo("gRPC Server", "Running gRPC Server...")
	grpcServer := grpc.NewServer()
	sermon.RegisterSermonServer(grpcServer, &sermonServer.Server{})
	if err := grpcServer.Serve(app); err != nil {
		plugins.LogFatal("gRPC Server", "failed to serve: ", err)
	}
}
