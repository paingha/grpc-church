.PHONY: proto-sermon
proto-sermon:
	protoc -I protos/ protos/sermon.proto --go_out=protos/sermon --go-grpc_out=protos/sermon

.PHONY: proto-user
proto-user:
	protoc -I protos/ protos/user.proto --go_out=protos/user --go-grpc_out=protos/user

.PHONY: proto-email
proto-user:
	protoc -I protos/ protos/email.proto --go_out=protos/email --go-grpc_out=protos/email


.PHONY: grpc-web
grpc-web:
	protoc -I protos/ protos/sermon.proto --js_out=import_style=commonjs:webapp/src/protos/sermon --grpc-web_out=import_style=commonjs,mode=grpcwebtext:webapp/src/protos/sermon

.PHONY: build-envoy
build-envoy:
	docker build -t grpc-envoy:1.0 .

.PHONY: run-envoy
run-envoy:
	docker run --network=host grpc-envoy:1.0

