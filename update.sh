#!/usr/bin/env sh

CUR=$(pwd)

YARN_PROJECTS="\
  amplify-js-app\
  dockerode-example\
  next-examples/blog/next-amplify-example\
  next-examples/next-amplify-example\
  next-examples/next-auth0-example\
  next-examples/next-ts-examples\
  nuxt-example/hello-world\
  nuxt-example/nuxt-ts-spa-example\
  nuxt-example/nuxt-typescript-example\
  nuxt-example/nuxt-vuetify-example\
  react-example/auth0-example
"

for target in ${YARN_PROJECTS}
do
  cd ${CUR}/${target}
  yarn upgrade
  yarn install
done


NPM_PROJECTS="elm-electron hello-electron"

for target in ${NPM_PROJECTS}
do
  cd ${CUR}/${target}
  npm update
  npm upgrade
done

cd ${CUR}
