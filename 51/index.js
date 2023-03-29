"use strict";
const arr = [1, 2, 3];
const arr1 = [1, 2, 3];
const roarr = ['dfsgds'];
const state = {
    data: {
        name: 'Johan'
    }
};
const strictState = {
    data: {
        name: 'dfgdsg'
    },
    tag: 'cvbnvc'
};
function action(state) {
    //state.data = 'abc';
    state.data.name = 'abc';
}
