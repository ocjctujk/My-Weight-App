export class Profile{
    constructor(
        public name: string,
        public startWeight: number,
        public currentWeight: number,
        public targetWeight: number,
        public height: number,
        public startDate: Date,
        public targetDate: Date
    ){}
}