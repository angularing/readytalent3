import { Component } from '@angular/core';
import { Job } from '../models/job-model';
import { JobService } from '../job.service';

const DisplayTypes = {
  Grid: "Grid",
  List: "List"
} as const;

type DisplayType = typeof DisplayTypes[keyof typeof DisplayTypes];

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent {
  searchQuery: string = '';
  selectedEmploymentType: string = '';
  selectedProgramme: string = '';

  // Mock data for dropdown lists
  EmploymentTypes: string[] = ['Full Time', 'Part Time', 'Contract', 'IWSP'];
  Programmes: string[] = ['BSc RTIS', 'BSc IMGD', 'BSc UXGD', 'BFA'];

  searchResults: any[] = []; // Placeholder for search results

  data: Job[] = [];
  displayType: DisplayType = DisplayTypes.Grid;

  //Dependency Injection for Job service
  constructor(private jobService: JobService){

  }

  ngOnInit() { //see https://angular.io/guide/lifecycle-hooks#oninit
    this.jobService.getJobsObservable().subscribe((data : any) => {
      this.data = data._embedded.jobs;
      this.searchResults = this.getJobs();
    });
  }

  toggleView(){
    this.displayType = this.displayType == DisplayTypes.Grid ? this.displayType = DisplayTypes.List : this.displayType = DisplayTypes.Grid;
  }

  getJobs() {
    return this.data;
  }

  searchJobs() {
    this.searchResults = this.getJobs();

    //filter type
    if (this.selectedEmploymentType.length > 0){
      const type = this.selectedEmploymentType.toLowerCase();
      this.searchResults = this.searchResults.filter(job => {
        return job.type.toLowerCase() == type;
      });
    }

    //NOTE: NOT WORKING
    //TODO: EXTEND MODEL TO INCLUDE COURSES/PROGRAM.
    //filter program/course
    // if (this.selectedProgramme.length > 0){
    //   const program = this.selectedProgramme.toLowerCase();
    //   this.searchResults = this.searchResults.filter(job => {
    //     return job.course.toLowerCase() == program;
    //   });
    // }
    
    //filter search
    if (this.searchQuery.length > 0){
      const query = this.searchQuery.toLowerCase();
      this.searchResults = this.searchResults.filter(job => {
        return (job.title.toLowerCase() == query
          || job.type.toLowerCase() == query
          || job.company.toLowerCase() == query)
      });
    }

    // Implement your search logic here based on the searchQuery, selectedCategory, and selectedType
    // For example, you can call an API service to fetch the relevant job data
    console.log('Search query:', this.searchQuery);
    console.log('Selected Employent type:', this.selectedEmploymentType);
    console.log('Selected programme:', this.selectedProgramme);
    console.log(this.searchResults);
  }
}
