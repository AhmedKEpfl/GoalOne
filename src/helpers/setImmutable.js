/**
Sets a value in the array in a immutable way
@arg array: Array
@arg index: Number
@arg newElem: Object
*/
function setImmutable(array, index, newElem) {
    return array.map((elem, i) => index === i ? { ...elem, ...newElem } : elem);
}

export default setImmutable;
