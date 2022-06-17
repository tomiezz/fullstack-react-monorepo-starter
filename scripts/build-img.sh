set -e

CURRENT_TAG="$CI_COMMIT_SHA"
IMG_NAME_BY_ENV="$IMG_NAME/${CURRENT_ENV}"
if [ ! -z "$CI_COMMIT_TAG" ]; then
    CURRENT_TAG="$CI_COMMIT_TAG"
fi

build_image() {
    IMG_NAME=$1
    CUSTOM_TAG=$2
    shift
    shift
    COMMENTS=$@

    docker pull $IMG_NAME:latest || true
    docker build -f $DOCKER_FILE_PATH --cache-from $IMG_NAME:latest --tag $IMG_NAME:$CUSTOM_TAG --tag $IMG_NAME:latest .
    docker push $IMG_NAME:$CUSTOM_TAG
    docker push $IMG_NAME:latest
}

build_image $IMG_NAME_BY_ENV $CURRENT_TAG
