// Copyright 2020 Paingha Joe Alagoa. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

package models

import (
	"fmt"
	"time"

	"bitbucket.com/church/server/config"

	//for db struct
	_ "github.com/jinzhu/gorm/dialects/postgres"
)

//Sermon - sermon database table structure
type Sermon struct {
	ID            int32      `json:"id,omitempty" sql:"primary_key"`
	Title         string     `gorm:"not null" json:"title"`
	FeaturedImage string     `gorm:"not null" json:"featuredImage"`
	Content       string     `gorm:"not null" json:"content"`
	Category      int32      `gorm:"not null" json:"category"`
	Preacher      string     `gorm:"not null" json:"preacher"`
	CreatedAt     time.Time  `json:"created_at"`
	UpdatedAt     time.Time  `json:"updated_at"`
	DeletedAt     *time.Time `json:"deleted_at"`
}

//TableName - table name in database
func (s *Sermon) TableName() string {
	return "sermons"
}

//GetAllSermons - fetch all sermons at once
func GetAllSermons(offset int32, limit int32) ([]Sermon, int32, error) {
	var count int32
	var SermonResponse []Sermon
	if err := config.DB.Model(&Sermon{}).Count(&count).Order("created_at desc").Offset(offset).Limit(limit).Find(&SermonResponse).Error; err != nil {
		return SermonResponse, count, err
	}
	fmt.Println(SermonResponse)
	return SermonResponse, count, nil
}

//GetSermon - fetch one sermon
func GetSermon(id int32) (Sermon, error) {
	var SingleSermon Sermon
	if err := config.DB.Where("id = ?", id).First(&SingleSermon).Error; err != nil {
		return Sermon{}, err
	}
	return SingleSermon, nil
}

//CreateSermon - create a sermon
func CreateSermon(newSermon *Sermon) (Sermon, error) {
	var sermon Sermon
	if err := config.DB.Create(newSermon).First(&sermon).Error; err != nil {
		return sermon, err
	}
	return sermon, nil
}

//UpdateSermon - update a sermon
func UpdateSermon(id int32) (Sermon, error) {
	var sermon Sermon
	if err := config.DB.Model(&Sermon{}).Where("id = ?", id).Updates(sermon).Error; err != nil {
		return sermon, err
	}
	return sermon, nil
}

//DeleteSermon - delete a sermon
func DeleteSermon(id int32) error {
	if err := config.DB.Where("id = ?", id).Unscoped().Delete(Sermon{}).Error; err != nil {
		return err
	}
	return nil
}
