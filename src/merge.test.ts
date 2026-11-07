import { describe, it, expect } from 'vitest';
import { merge } from './merge';

describe("merge function", () => {
    it("should handle empty arrays", () => {
        expect(merge([], [], [])).toEqual([]);
    });

    it("should merge non-overlapping sorted arrays", () => {
        expect(
            merge(
                [1, 2, 3],
                [6, 5, 4],
                [7, 8, 9]
            )
        ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("should merge interleaved sorted arrays", () => {
        expect(
            merge(
                [1, 4, 7],
                [9, 5, 2],
                [3, 6, 8]
            )
        ).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });

    it("should handle negative numbers", () => {
        expect(
            merge(
                [-4, -1, 2],
                [4, 0, -2],
                [-3, 1, 3]
            )
        ).toEqual([-4, -3, -2, -1, 0, 1, 2, 3, 4]);
    });

    it("should preserve duplicate values", () => {
        expect(
            merge(
                [1, 2, 4],
                [5, 4, 1],
                [2, 3, 5]
            )
        ).toEqual([1, 1, 2, 2, 3, 4, 4, 5, 5]);
    });

    it("should handle collection_1 as the only non-empty array", () => {
        expect(merge([0, 1, 3], [], [])).toEqual([0, 1, 3]);
    });

    it("should handle collection_2 as the only non-empty array", () => {
        expect(merge([], [3, 2, 0], [])).toEqual([0, 2, 3]);
    });

    it("should handle collection_3 as the only non-empty array", () => {
        expect(merge([], [], [0, 2, 4])).toEqual([0, 2, 4]);
    });

    it("should handle unequal lengths and exhausted collections", () => {
        expect(
            merge(
                [0],
                [8, 6, 4, 2],
                [1, 3]
            )
        ).toEqual([0, 1, 2, 3, 4, 6, 8]);
    });

    it("should preserve all zero values", () => {
        expect(
            merge(
                [0, 0],
                [0],
                [0, 0, 0]
            )
        ).toEqual([0, 0, 0, 0, 0, 0]);
    });

    it("should leave the input arrays unchanged", () => {
        const collection_1 = [1, 4, 7];
        const collection_2 = [9, 5, 2];
        const collection_3 = [3, 6, 8];

        const result = merge(collection_1, collection_2, collection_3);

        expect(result).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
        expect(collection_1).toEqual([1, 4, 7]);
        expect(collection_2).toEqual([9, 5, 2]);
        expect(collection_3).toEqual([3, 6, 8]);
    });
});
