#!/bin/bash

docker buildx build --platform linux/amd64 -f backend/production.Dockerfile -t registry.heroku.com/mydinnertime/backend backend/ && docker push registry.heroku.com/mydinnertime/backend &

docker buildx build --platform linux/amd64 -f frontend/Dockerfile -t registry.heroku.com/mydinnertime/frontend frontend/ && docker push registry.heroku.com/mydinnertime/frontend &

wait
