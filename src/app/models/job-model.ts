export class Job{
    title: string;
    company: string;
    type: string; //TODO: could replace with enum instead

    constructor(title: string, company: string, type: string){
        this.company = company;
        this.title = title;
        this.type = type;
    }
}