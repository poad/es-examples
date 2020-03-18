# Setup

## create project

```$sh
yarn create nuxt-app <project name>

cp -pR <project name>/.git/hooks/* .git/hooks/
cd <project name>
rm -rf .git
```

## add the modules

```$sh
yarn add --dev @nuxt/typescript-build
yarn add --dev nuxt-property-decorator
yarn add @nuxt/typescript-runtime
yarn add --dev @nuxtjs/eslint-config-typescript
```

## move the sources to src dir

```$sh
mkdir src
mv assets src/
mv components src/
mv layouts src/
mv middleware src/
mv pages src/
mv plugins src/
mv static src/
mv store src/
```

### modify the source psth

- jsconfig.json
- package.json

### add the typescript config

```tsconfig.json
{
  "compilerOptions": {
    "target": "es2019",
    "module": "esnext",
    "moduleResolution": "node",
    "lib": [
      "esnext",
      "esnext.asynciterable",
      "dom"
    ],
    "esModuleInterop": true,
    "allowJs": true,
    "sourceMap": true,
    "strict": true,
    "noEmit": true,
    "noLib" : false,
    "experimentalDecorators": true,
    "newLine": "LF",
    "baseUrl": "src",  
    "paths": {
      "~/*": [
        "./*"
      ],
      "@/*": [
        "./*"
      ]
    },
    "types": [
      "@types/node",
      "@nuxt/types"
    ]
  },
  "exclude": [
    "node_modules"
  ]
}
```

### add the vue-shim.d.ts

```src/vue-shim.d.ts
declare module '*.vue' {
  import Vue from 'vue'
  export default Vue
}
```

### modify the config files

- nuxt.config.js
- package.json
- .eslintrc.js

## modify sorces

rewrite by TypeScript to contents of each script tag.

- src/layouts/default.vue
- src/layouts/error.vue
- src/pages/index.vue
