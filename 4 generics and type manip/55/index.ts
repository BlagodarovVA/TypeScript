
interface ICompany {
    name: string;
    debts: number;
    departments: Department;
    management: {
        owner: string;
    }
}

interface Department {
    [key: string]: string;
}


const debts = 'debts';
type CompanyDebtsType = ICompany[typeof debts];

// type CompanyDebtsType = ICompany['debts'];                  // получение типа свойства интерфейса
type CompanyOwnerType = ICompany['management']['owner'];
type CompanyDeptsType = ICompany['departments'];
type CompanyDeptsTypes = ICompany['departments'][number];   // number - число для доступа к элементу массива
type Test = ICompany[keyof ICompany];                       // юнион тип всех свойств объекта


type CompanyKeys = keyof ICompany;  // содержит ключи объекта
const keys: CompanyKeys = 'name';

function printDebts<T, K extends keyof T, S extends keyof T>(
    company: T, 
    name: K, 
    debts: S
) {
    console.log(`Company ${company[name]}, debts: ${company[debts]}`);
}

const google: ICompany = {
    name: 'HH',
    debts: 50000,
    departments: {
        sales: 'sales',
        developer: 'dev'
    },
    management: {
        owner: 'JohanPohan',
    }
}

printDebts(google, 'name', 'debts');


type GoogleKeys = keyof typeof google;
const keys2: GoogleKeys = 'name';