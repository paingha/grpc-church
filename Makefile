.PHONY: protos
protos:
	protoc -I protos/ protos/sermon.proto --go_out=protos/sermon --go-grpc_out=protos/sermon