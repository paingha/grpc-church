# select image
FROM golang:1.14.1-alpine
WORKDIR /app
COPY ./go.mod ./go.sum ./

RUN go mod download
ADD . .
WORKDIR /app/server
COPY example.env .
RUN go mod vendor
RUN go build
# Command to run the executable
CMD ["./server"]
