// Copyright 2020 Paingha Joe Alagoa. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package main

import (
	"bitbucket.com/church/client/sermons"
	"bitbucket.com/church/plugins"
	"bitbucket.com/church/protos/sermon"
	"google.golang.org/grpc"
)

func main() {
	conn, err := grpc.Dial(":9000", grpc.WithInsecure())
	if err != nil {
		plugins.LogFatal("gRPC Client", "did not connect", err)
	}
	defer conn.Close()

	c := sermon.NewSermonClient(conn)
	//sermons.GetAllSermons(c)
	//sermons.CreateSermon(c)
	sermons.GetSermon(c)
}
