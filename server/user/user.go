// Copyright 2020 Paingha Joe Alagoa. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package user

import (
	"context"
	"log"

	"bitbucket.com/church/protos/user"
	"bitbucket.com/church/server/models"
	"github.com/jinzhu/copier"
)

//Server - Struct holding Users
type Server struct {
	user.UserServer
}

//RegisterUser - Create new User Account
func (*Server) RegisterUser(ctx context.Context, r *user.RegisterUserRequest) (*user.RegisterUserResponse, error) {
	log.Printf("Receive message body from client: %s", r.Email)
	var newUser models.User
	copier.Copy(&newUser, r)
	createdUser, err := models.CreateUser(&newUser)
	if err != nil {
		log.Printf("An error occured: %v", err)
		return &user.RegisterUserResponse{}, err
	}
	var test user.RegisterUserResponse
	copier.Copy(&test, createdUser)
	return &test, nil
}

//LoginUser - log user into account
func (*Server) LoginUser(ctx context.Context, r *user.LoginUserRequest) (*user.LoginUserResponse, error) {
	log.Printf("Receive message body from client: %s", r.Email)
	var newUser models.User
	copier.Copy(&newUser, r)
	userData, token, err := models.LoginUser(&newUser)
	if err != nil {
		log.Printf("An error occured: %v", err)
		return &user.LoginUserResponse{}, err
	}
	return &user.LoginUserResponse{
		Token:     token,
		ID:        userData.ID,
		FirstName: userData.FirstName,
		LastName:  userData.LastName,
		Email:     userData.Email,
	}, nil
}

//GetAllUsers - Lists all the users
//Todo: Handle errors
func (*Server) GetAllUsers(ctx context.Context, r *user.GetAllUsersRequest) (*user.GetAllUsersResponse, error) {
	log.Printf("Receive message body from client: %v", r.GetPageNumber())

	users, count, err := models.GetAllUsers(r.GetPageNumber(), r.GetResultPerPage())
	if err != nil {
		log.Printf("An error occured: %v", err)
		return &user.GetAllUsersResponse{}, err
	}
	var test user.GetUserResponse
	var data []*user.GetUserResponse
	//FIX: throwing slice error
	copier.Copy(&test, users)
	data = append(data, &test)

	return &user.GetAllUsersResponse{
		PageNumber:    r.GetPageNumber(),
		ResultPerPage: r.GetResultPerPage(),
		TotalCount:    count,
		Users:         data,
	}, nil
}

//GetUser - Get User by ID
func (*Server) GetUser(ctx context.Context, r *user.GetUserRequest) (*user.GetUserResponse, error) {
	log.Printf("Receive message body from client: %v", r.ID)
	singleUser, err := models.GetUser(r.ID)
	if err != nil {
		log.Printf("An error occured: %v", err)
		return &user.GetUserResponse{}, err
	}
	var test user.GetUserResponse
	copier.Copy(&test, singleUser)
	return &test, nil
}

//UpdateUser - Update User by ID
func (*Server) UpdateUser(ctx context.Context, r *user.UpdateUserRequest) (*user.UpdateUserResponse, error) {
	log.Printf("Receive message body from client: %s", r.Email)
	var test models.User
	copier.Copy(&test, r)
	err := models.UpdateUser(&test, r.ID)
	if err != nil {
		log.Printf("An error occured: %v", err)
		return &user.UpdateUserResponse{
			Message: "An error occured",
		}, err
	}
	return &user.UpdateUserResponse{
		Message: "User successfully updated",
	}, nil
}

//DeleteUser - Delete User by ID
func (*Server) DeleteUser(ctx context.Context, r *user.DeleteUserRequest) (*user.EmptyUserResponse, error) {
	log.Printf("Receive message body from client: %v", r.ID)
	err := models.DeleteUser(r.ID)
	if err != nil {
		log.Printf("An error occured: %v", err)
		return &user.EmptyUserResponse{}, err
	}
	return &user.EmptyUserResponse{}, nil
}
