// Copyright 2020 Paingha Joe Alagoa. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package sermons

import (
	"context"
	"log"

	"bitbucket.com/church/plugins"
	"bitbucket.com/church/protos/sermon"
)

//GetAllSermons - Client gRPC function to list all sermons
func GetAllSermons(c sermon.SermonClient) {
	log.Printf("Server context %v", c)
	data := sermon.GetAllSermonsRequest{
		PageNumber:    0,
		ResultPerPage: 10,
	}
	response, err := c.GetAllSermons(context.Background(), &data)
	if err != nil {
		plugins.LogFatal("gRPC Client", "Error when calling GetAllSermons", err)
	}
	log.Printf("Response from server: %v", response)
}

//CreateSermon - Client gRPC function to create a new sermon
func CreateSermon(c sermon.SermonClient) {
	log.Printf("Server context %v", c)
	data := sermon.CreateSermonRequest{
		Title:         "The Love of God",
		Content:       "The love of God is so big that is encomposes everyone of us",
		Preacher:      "Joe Alagoa",
		Category:      1,
		FeaturedImage: "https://blogs.blueletterbible.org/blb/wp-content/uploads/sites/2/2015/08/20150821_love.jpg",
	}
	response, err := c.CreateSermon(context.Background(), &data)
	if err != nil {
		plugins.LogFatal("gRPC Client", "Error when calling CreateSermon", err)
	}
	log.Printf("Response from server: %v", response)
}

//GetSermon - Client gRPC function to a sermon by id
func GetSermon(c sermon.SermonClient) {
	log.Printf("Server context %v", c)
	data := sermon.GetSermonRequest{
		ID: 1,
	}
	response, err := c.GetSermon(context.Background(), &data)
	if err != nil {
		plugins.LogFatal("gRPC Client", "Error when calling GetSermon", err)
	}
	log.Printf("Response from server: %v", response)
}
