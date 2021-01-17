#!/usr/bin/env sh

CUR=$(pwd)

YARN_PROJECTS="\
  dockerode-example\
  next-examples/cognito-s3-example\
  next-examples/cognito-s3-example/infra\
  next-examples/next-auth0-example\
  next-examples/next-ts-examples\
  next-examples/cognito-aws-console-example/app\
  next-examples/cognito-aws-console-example/infra\
  nuxt-example/hello-world\
  nuxt-example/nuxt-ts-spa-example\
  nuxt-example/nuxt-typescript-example\
  nuxt-example/nuxt-vuetify-example
"

which jq >> /dev/null
if [ $? -ne 0 ]
then
  echo "not found jq command"
  exit 1
fi

# parse package.json
dev_modules=$(echo -n $(cat package.json | jq -r ".devDependencies | to_entries | .[].key"))
echo ${dev_modules}

modules=$(echo -n $(cat package.json | jq -r ".dependencies | to_entries | .[].key"))
echo ${modules}

for target in ${YARN_PROJECTS}
do
  cd ${CUR}/${target}
  yarn install
  yarn add --dev ${dev_modules}
  yarn add ${modules}
  yarn upgrade
done


NPM_PROJECTS="elm-electron hello-electron"

for target in ${NPM_PROJECTS}
do
  cd ${CUR}/${target}
  npm install --only=dev ${dev_modules}
  npm install ${modules}
  npm update
  npm upgrade
done

# To solve the problem of not being able to delete the node_modules directory
rm -rf node_modules

cd ${CUR}
