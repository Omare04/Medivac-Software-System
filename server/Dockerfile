# Production Dockerfile
FROM golang:alpine as builder

WORKDIR /server
COPY go.mod go.sum ./
RUN go mod download && go mod verify

COPY . .
RUN go build -v -o /usr/local/bin/server ./cmd/server

# Final production image
FROM alpine
WORKDIR /server
COPY --from=builder /usr/local/bin/server .

CMD ["./server"]
