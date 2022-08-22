# typepipe
## General
A pipe function with typescript typing.
## Usage Example
```ts
const add2 = (x: number): number => x + 2;
const nrToStr = (x: number): string => x.toString();
const strToObj = (x: string): {t: string} => ({t: x});

const add2ToStrToObj = pipe(
    add2,
    nrToStr,
    strToObj,
);

console.log(add2ToStrToObj(10));
// -> {t: '12'}
```

## Development
### First steps
Run `npm install`

### Build and Run
`npm run build` compiles the app to js.  
`npm run start` executes the compiled code.  
`npm run serve` serves the app with nodemon and ts-node (auto recompile on changes).  

## #Test
Test should be placed in `./spec` and every test file needs to end with `.spec.ts`.  
`npm run test` will run the tests.  
`npm run lint` runs eslint.
