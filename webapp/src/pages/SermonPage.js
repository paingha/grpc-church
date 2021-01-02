// Copyright 2020 Paingha Joe Alagoa. All rights reserved.
// Use of this source code is governed by a BSD-style
// license that can be found in the LICENSE file.

import logo from '../logo.svg';
import React, { useEffect, useState } from "react"
import { connect } from "react-redux"
import {
  getSermonsCall,
  getSermonCall,
  createSermonCall
} from "../calls/sermon"
import '../App.css';
import { useToast } from "@chakra-ui/react"

const SermonPage=(props)=> {
  const [pageNumber, setPageNumber] = useState(0);
  const [resultsPerPage, setResultsPerPage] = useState(10);
  const toast = useToast()
  useEffect(() => {
    //props.getSermons("hello", pageNumber, resultsPerPage, showToast)
    props.getSermon(2, showToast)
    /*props.createSermon({
      title: "The Love of God",
      content: "The Love of God is always there for you and for me",
      preacher:  "Joe Alagoa",
      category:  1,
      featuredImage: "https://blogs.blueletterbible.org/blb/wp-content/uploads/sites/2/2015/08/20150821_love.jpg",
    }, showToast)*/
  }, [/*pageNumber, resultsPerPage*/])
  const showToast = (status, title, description) => {
    toast({
      position: "top",
      title,
      description,
      status,
      duration: 5000,
      isClosable: true
    })
  }
  return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
  );
}

function mapper(state) {
  return {
    isFetching: state.sermon.isFetching,
    error: state.sermon.error,
    count: state.sermon.sermons.count,
    sermons: state.sermon.sermons.rows,
    sermon: state.sermon.sermon,
    getting: state.sermon.getting
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    getSermons: (category, page, results, toast) => {
      dispatch(getSermonsCall(category, page, results, toast))
    },
    getSermon: (id, toast) => {
      dispatch(getSermonCall(id, toast))
    },
    createSermon: (body, toast) => {
      dispatch(createSermonCall(body, toast))
    },
  }
}
export default connect(
  mapper,
  mapDispatchToProps
)(SermonPage)