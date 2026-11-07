# Primo Merge Sorted Arrays Test

Merge three arrays into one ascending array without using a sort function.
`collection_1` and `collection_3` are ascending, while `collection_2` is descending.

## Setup

```sh
git clone https://github.com/Akushu2357/primo-merge-sorted-arrays.git
cd primo-merge-sorted-arrays
npm ci
```

## Run

```sh
npm run build
npm start
```

The example in `src/example.ts` calls:

```ts
merge([1, 4, 7], [9, 5, 2], [3, 6, 8]);
```

Output:

```text
[1,2,3,4,5,6,7,8,9]
```

## Test

```sh
npm test
```

Tests use Vitest. To rerun tests automatically when editing, use `npm run test:watch`.
