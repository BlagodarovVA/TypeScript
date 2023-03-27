function processingData<T, S>(data: T[], options: S): string {
    data.length;
    switch (typeof data) {
        case 'string':
            return `${data}, speed: ${options}`;
            break;
        case 'number':
            return `${data}, speed: ${options}`;
            break;
        default:
            return 'Not valid';
    }

}

let res1 = processingData([1], 'fast');
let res2 = processingData(['1'], 'slow');
const res3 = processingData<number, string>([10], 'fast');

// функция шаблон
function processing<T>(data: T): T {
    return data;
}

interface ProcessingFn {
    <T>(data: T): T;
}

let newFunc: ProcessingFn = processing;


interface DataSaver {
    // <идентификатор>(обозначение аргументов) => возвращаемое значение
    // processing: <T>(data: T) => T;

    processing: ProcessingFn;
}

const saver: DataSaver = {
    // 1
    // processing(data) {
    //     console.log(data);
    //     return data;
    // }

    // 2
    // processing: <T>(data: T) => {       // T - можно удалить
    //     return data;
    // }

    // 3
    processing: processing
}