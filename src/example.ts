import { merge } from './merge';

const collection_1 = [1, 4, 7];
const collection_2 = [9, 5, 2];
const collection_3 = [3, 6, 8];

console.log(JSON.stringify(merge(collection_1, collection_2, collection_3)));
