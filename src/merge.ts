export function merge(
    collection_1: number[],
    collection_2: number[],
    collection_3: number[]
): number[] {
    const result: number[] = [];
    let pointer_1 = 0;
    let pointer_2 = collection_2.length - 1;
    let pointer_3 = 0;

    while (
        pointer_1 < collection_1.length ||
        pointer_2 >= 0 ||
        pointer_3 < collection_3.length
    ) {
        const value_1 = pointer_1 < collection_1.length ?
        collection_1[pointer_1] : Infinity;

        const value_2 = pointer_2 >= 0 ?
        collection_2[pointer_2] : Infinity;

        const value_3 = pointer_3 < collection_3.length ?
        collection_3[pointer_3] : Infinity;

        if (value_1 <= value_2 && value_1 <= value_3) {
            result.push(value_1);
            pointer_1++;
        } else if (value_2 <= value_1 && value_2 <= value_3) {
            result.push(value_2);
            pointer_2--;
        } else {
            result.push(value_3);
            pointer_3++;
        }
    }
    return result;
}