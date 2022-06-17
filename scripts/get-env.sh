CURRENT_ENV=development

if [ "$CI_COMMIT_REF_NAME" = "dev" ]; then
    CURRENT_ENV=development
elif [ "$CI_COMMIT_REF_NAME" = "stag" ]; then
    CURRENT_ENV=staging
else
    CURRENT_ENV=production
fi

export CURRENT_ENV=$CURRENT_ENV
