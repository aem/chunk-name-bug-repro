# webpack chunk name bug demo

## steps to repro

1. `npm install`
2. `npm run build`

## expected chunks

- main.js
- chunk-a.js (containing route a and route b)
- chunk-b.js
- chunk-c.js

## actual chunks

- main.js
- chunk-a.js (containing route a and route b)
- chunk-a-js.js (containing route a)
- chunk-b.js
- chunk-c.js
