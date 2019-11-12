export class User {
    constructor(
        public id: number,
        public name: string,
        public username: string,
        public role:string,
        public email: string,
        public password: string,
        public content: string,
        public image: string

    ){}
}