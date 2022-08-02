#!/bin/bash

docker build ./fixtures/docker/local -t clarityhub-docs

if [[ $* == *-n* ]]; then
    docker run \
        --rm \
        --publish 7000:8000 \
        --network=clarityhub-network \
        --mount src="$(pwd)",target=/docs,type=bind \
        --network-alias clarityhub-docs \
        --name clarityhub-docs \
        clarityhub-docs
else
    docker run \
        -it \
        --rm \
        --publish 7000:8000 \
        --network=clarityhub-network \
        --mount src="$(pwd)",target=/docs,type=bind \
        --network-alias clarityhub-docs \
        --name clarityhub-docs \
        clarityhub-docs
fi


