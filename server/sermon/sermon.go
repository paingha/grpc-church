package sermon

import (
	"context"
	"log"

	"bitbucket.com/church/protos/sermon"
	"bitbucket.com/church/server/models"
	"github.com/jinzhu/copier"
)

//Server - Struct holding Sermons
type Server struct {
	sermon.SermonServer
}

//GetAllSermons - Lists all the sermons
//Todo: Handle errors
//sudo service postgresql start
//export PATH="$PATH:$(go env GOPATH)/bin"
func (*Server) GetAllSermons(ctx context.Context, r *sermon.GetAllSermonsRequest) (*sermon.GetAllSermonsResponse, error) {
	log.Printf("Receive message body from client: %v", r.GetPageNumber())

	sermons, count, err := models.GetAllSermons(r.GetPageNumber(), r.GetResultPerPage())
	if err != nil {
		log.Printf("An error occured: %v", err)
		return &sermon.GetAllSermonsResponse{}, err
	}
	var test sermon.GetSermonResponse
	var data []*sermon.GetSermonResponse
	//FIX: throwing slice error
	copier.Copy(&test, sermons)
	data = append(data, &test)

	return &sermon.GetAllSermonsResponse{
		PageNumber:    r.GetPageNumber(),
		ResultPerPage: r.GetResultPerPage(),
		TotalCount:    count,
		Sermons:       data,
	}, nil
}

//CreateSermon - Create new Sermon
func (*Server) CreateSermon(ctx context.Context, r *sermon.CreateSermonRequest) (*sermon.CreateSermonResponse, error) {
	log.Printf("Receive message body from client: %s", r.Title)
	var newSermon models.Sermon
	copier.Copy(&newSermon, r)
	createdSermon, err := models.CreateSermon(&newSermon)
	if err != nil {
		log.Printf("An error occured: %v", err)
		return &sermon.CreateSermonResponse{}, err
	}
	var test sermon.CreateSermonResponse
	copier.Copy(&test, createdSermon)
	return &test, nil
}

//GetSermon - Get Sermon by ID
func (*Server) GetSermon(ctx context.Context, r *sermon.GetSermonRequest) (*sermon.GetSermonResponse, error) {
	log.Printf("Receive message body from client: %v", r.ID)
	singleSermon, err := models.GetSermon(r.ID)
	if err != nil {
		log.Printf("An error occured: %v", err)
		return &sermon.GetSermonResponse{}, err
	}
	var test sermon.GetSermonResponse
	copier.Copy(&test, singleSermon)
	return &test, nil
}

//UpdateSermon - Update Sermon by ID
func (*Server) UpdateSermon(ctx context.Context, r *sermon.UpdateSermonRequest) (*sermon.UpdateSermonResponse, error) {
	log.Printf("Receive message body from client: %s", r.Title)
	updatedSermon, err := models.UpdateSermon(r.ID)
	if err != nil {
		log.Printf("An error occured: %v", err)
		return &sermon.UpdateSermonResponse{}, err
	}
	var test sermon.UpdateSermonResponse
	copier.Copy(&test, updatedSermon)
	return &test, nil
}

//DeleteSermon - Delete Sermon by ID
func (*Server) DeleteSermon(ctx context.Context, r *sermon.DeleteSermonRequest) (*sermon.Empty, error) {
	log.Printf("Receive message body from client: %v", r.ID)
	err := models.DeleteSermon(r.ID)
	if err != nil {
		log.Printf("An error occured: %v", err)
		return &sermon.Empty{}, err
	}
	return &sermon.Empty{}, nil
}
