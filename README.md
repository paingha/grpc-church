<h1 align="center"> gRPC Project </h1> <br>

## Table of Contents

- [Introduction](#introduction)
- [Install and Run](#install-run)
- [TODO](#todo)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Introduction

A personal process to learn gRPC and its differences from Rest APIs. I have decided to re-implement a church website API with gRPC.

## Install and Run

In order to setup project and run it successfully you will need docker installed on your machine.

<ul>
    <li>cd webapp && yarn install</li>
    <li>yarn start && cd ..</li>
    <li>Run docker compose up -d</li>
    <li>React App wil be running at localhost:3000</li>
    <li>Envoy Proxy will be running at localhost:8080 (Proxying any grpc connections from 9000 to 8080 and vice versa</li>
    <li>Golang gRPC server will be runnig at localhost:9000</li>
    <li>pgAdmin4 web ui will be running at localhost:5050</li>
</ul>

(View console of web browser for getSermon response)

A personal project to learn gRPC and its differences from Rest APIs. I have decided to re-implement a church website API with gRPC.

## TODO

Below are the few tasks and the roadmap of this personal project. It lists out what I still have to learn and implement.

<ul>
    <li>Setup React App with gRPC Web - Done</li>
    <li>Setup Envoy Proxy - Done</li>
    <li>Dockerize React App</li>
    <li>Add Tests</li>
    <li>Implement Client-side streaming in gRPC</li>
    <li>Implement Server-side streaming in gRPC</li>
    <li>Implement Bi-directional streaming in gRPC</li>
    <li>Imlemet Auth and Authorization interceptors</li>
</ul>

## Author

Hi! I am Paingha Joe Alagoa Jnr. I am a recent college graduate with 4 years experience using Golang and Javascript to build scalable and user friendly applications.
<br />
[Linked In](https://www.linkedin.com/in/paingha-alagoa-joe/)
<br />
[Twitter](https://twitter.com/painghajnr)

## Acknowledgments

