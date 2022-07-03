// 1. Учитывая данные, определите интерфейс «Пользователь» и используйте его соответствующим образом.
interface IUser1 {
    name: string,
    age: number,
    occupation: string,
    car?: string,
    children?: number
}

const user1: IUser1 = {
    name: "Max Mustermann",
    age: 25,
    occupation: "Chimney sweep",
    car: "VW"
};

const user2: IUser1 = {
    name: "Kate Müller",
    age: 23,
    occupation: "Astronaut",
    children: 2
};

const users: IUser1[] = [user1, user2];
console.log(users);

// 2. Создайте интерфейсы для ролей User и Admin, после этого создайте интерйфей Person,
// который будет соответствовать массиву
interface IUser2 {
    name: string,
    age: number,
    occupation?: string,
    // readonly role?: string
}

interface IAdmin {
    name: string,
    age: number,
    readonly role: string
}

interface Person {
    [index: number]: IAdmin | IUser2
}

const persons: Person = [
    {
        name: "Max Mustermann",
        age: 25,
        occupation: "Chimney sweep"
    },
    {
        name: "Jane Doe",
        age: 32,
        role: "Administrator"
    },
    {
        name: "Kate Müller",
        age: 23,
        occupation: "Astronaut"
    },
    {
        name: "Bruce Willis",
        age: 64,
        role: "World saver"
    }
];

console.log(persons);

