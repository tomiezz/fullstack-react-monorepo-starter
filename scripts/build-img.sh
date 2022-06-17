set -e

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

CURRENT_TAG="$CI_COMMIT_SHA"
CURRENT_ENV=development

if [ "$CI_COMMIT_REF_NAME" = "dev" ]; then
    CURRENT_ENV=development
elif [ "$CI_COMMIT_REF_NAME" = "stag" ]; then
    CURRENT_ENV=staging
else
    CURRENT_ENV=production
    CURRENT_TAG="$CI_COMMIT_TAG"
fi

CURRENT_IMG_NAME="$IMG_NAME/$CURRENT_ENV"

build_image $CURRENT_IMG_NAME $CURRENT_TAG
