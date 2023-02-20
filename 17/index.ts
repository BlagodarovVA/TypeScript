const userData = {
    isBirthdayData: true,
    userNameData: "Vasya",
    ageData: 31,
    messages: {
        error: 'Error'
    }
}

const userDataTuple: [boolean, number, string] = [true, 40, 'John'];
const userDataTuple1: [boolean, number, ...string[]] = [true, 40, 'John', 'Vasya'];

const res = userDataTuple.map((t) => `${t} - data`);

const [bthd, age, userName] = userDataTuple;


