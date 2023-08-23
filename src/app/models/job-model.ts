export class Job{
    title: string;
    company: string;
    type: string; //TODO: could replace with enum instead
    salary: number;
    closingDate: Date;
    vacancies: number;

    constructor(title?: string, company?: string, type?: string, salary?: number, closingDate?: Date, vacancies?: number){
        this.title = title ? title : "";
        this.company = company ? company : "";
        this.type = type ? type : "";
        this.salary = salary ? salary : 0;
        this.closingDate = closingDate ? closingDate : new Date();
        this.vacancies = vacancies ? vacancies : 0;
    }

}