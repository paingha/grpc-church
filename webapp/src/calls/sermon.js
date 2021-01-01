import { GetAllSermonsRequest, GetAllSermonsResponse, GetSermonRequest, GetSermonResponse, CreateSermonRequest, CreateSermonResponse } from "../protos/sermon/sermon_pb";
import { SermonClient } from "../protos/sermon/sermon_grpc_web_pb";
import {
    requestSermon,
    errorSermon,
    receiveSermon,
    requestSingleSermon,
    receiveSingleSermon,
    errorSingleSermon
  } from "../actions/sermon"
let auth = localStorage.TOKEN
var client = new SermonClient('http://localhost:8080')

export function getSermonsCall(category, page, results, toast) {
    return (dispatch) => {
        dispatch(requestSermon())
        const getAllSermonsRequest = new GetAllSermonsRequest();
        getAllSermonsRequest.setPagenumber(page || 0);
        getAllSermonsRequest.setResultperpage(results || 10);  
        const metadata = {
            //token: auth
        }   
        client.getAllSermons(getAllSermonsRequest, metadata, (err, resp)=>{
            if(err){
                console.log(err.code);
                console.log(err.message);
                toast(
                    "error",
                    "Error Loading Sermons!",
                    "An error occurred, Reload the Page to Try Again."
                )
                dispatch(errorSermon(err))
            }else{
                console.log(resp.toObject())
                dispatch(receiveSermon(resp))
            }
        })
    }
}

export function getSermonCall(id, toast) {
    return (dispatch) => {
        dispatch(requestSingleSermon())
        const getSermonRequest = new GetSermonRequest();
        getSermonRequest.setId(id || 1); 
        const metadata = {
            //token: auth
        }   
        client.getSermon(getSermonRequest, metadata, (err, resp)=>{
            if(err){
                console.log(err.code);
                console.log(err.message);
                toast(
                    "error",
                    "Error Getting Sermon!",
                    "An error occurred, Reload the Page to Try Again."
                )
                dispatch(errorSingleSermon(err))
            }else{
                console.log(resp.toObject())
                dispatch(receiveSingleSermon(resp.toObject()))
            }
        })
    }
}

export function createSermonCall(requestBody, toast) {
    return (dispatch) => {
        dispatch(requestSingleSermon())
        const createSermonRequest = new CreateSermonRequest();
        createSermonRequest.setTitle(requestBody.title || "");
        createSermonRequest.setContent(requestBody.content || "");
        createSermonRequest.setPreacher(requestBody.preacher || "");
        createSermonRequest.setCategory(requestBody.category || 1);
        createSermonRequest.setFeaturedimage(requestBody.featuredImage || "");
        const metadata = {
            //token: auth
        }   
        client.createSermon(createSermonRequest, metadata, (err, resp)=>{
            if(err){
                console.log(err.code);
                console.log(err.message);
                toast(
                    "error",
                    "Error Creating Sermon!",
                    "An error occurred, Reload the Page to Try Again."
                )
                dispatch(errorSingleSermon(err))
            }else{
                console.log(resp.toObject())
                dispatch(receiveSingleSermon(resp.toObject()))
            }
        })
    }
}