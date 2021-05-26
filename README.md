# trendtech-test-task

## Build npm package:
```npm run build```


## Test:
```npm test```


## Usage:
```typescript 
run(ar: Array<number>): Promise<string>
```
```typescript
// Don't forget to resolve promise before using actual value!
await run([1, 2, 3, 4, 5, 6, 7, 8]) //'1-8'
await run([1, 3, 4, 5, 6, 7, 8, 10, 11, 12]) //'1,3-8,10-12'
```
