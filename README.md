# template_node_ts
A nodeJs / typescript template which provides all dev tools required for testing and developing, made to avoid spending time on setting up your environment. It includes configuration for nodejs, typescript, ts-node, nodemon, eslint, mocha and chai. 

## First steps
Go to the package.json and change the parameters, `name`, `repository->url`,
`bugs->url` and `homepage` according to your new project name and your new
repository.  
After that delete the tsconfig and run `npm install` this will correct the name in the
package-lock.json and install all packages necessary. Do not forget to add the 
package-lock.json back to git!

## Build and Run
`npm run build` compiles the app to js.  
`npm run start` executes the compiled code.  
`npm run serve` serves the app with nodemon and ts-node (auto recompile on changes).  

## Test
Test should be placed in `./spec` and every test file needs to end with `.spec.ts`.  
`npm run test` will run the tests.  
`npm run lint` runs eslint.
