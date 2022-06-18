CURRENT_ENV=development

if [ "$CI_COMMIT_REF_NAME" = "dev" ]; then
    CURRENT_ENV=development
elif [ "$CI_COMMIT_REF_NAME" = "stag" ]; then
    CURRENT_ENV=staging
else
    CURRENT_ENV=production
fi

CURRENT_IMG_NAME="$IMG_NAME/$CURRENT_ENV"

ssh $SSH_USER@$SSH_SERVER_IP
"docker login -u ${CI_REGISTRY_USER} -p ${CI_REGISTRY_PASSWORD} ${CI_REGISTRY};
cd ${PROJECT_PATH};
docker-compose down;
docker-compose pull ${CURRENT_IMG_NAME}:latest;
docker-compose up -d;
docker image prune -f;"
