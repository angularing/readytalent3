export class Job{
    title: string;
    company: string;
    type: string;

    constructor(title: string, company: string, type: string){
        this.company = company;
        this.title = title;
        this.type = type;
    }
}