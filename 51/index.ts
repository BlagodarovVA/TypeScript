const arr: Array<number> = [1, 2, 3];
const arr1: number[] = [1, 2, 3];

const roarr: ReadonlyArray<string> = ['dfsgds'];
// roarr[0] = 'dsfsdf';

interface IState {
    readonly data: {
        name: string;
    },
    tag?: string
}

const state: Partial<IState> = {        // свойства объекта не обязательны
    data: {
        name: 'Johan'
    }
}

const strictState: Required<IState> = {     // все свойства обязательны
    data: {
        name: 'dfgdsg'
    },
    tag: 'cvbnvc'
}

strictState.data = 'll;j;lkj';

function action(state: Readonly<IState>) {      // не запрещает изменение вложенного уровня
    //state.data = 'abc';
    state.data.name = 'abc';
}
