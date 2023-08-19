import { Component } from '@angular/core';
import { Job } from '../models/job-model';

@Component({
  selector: 'app-job-search',
  templateUrl: './job-search.component.html',
  styleUrls: ['./job-search.component.css']
})
export class JobSearchComponent {
  searchQuery: string = '';
  selectedEmploymentType: string = 'IWSP';
  selectedProgramme: string = 'BSc RTIS';

  // Mock data for dropdown lists
  EmploymentTypes: string[] = ['Full Time', 'Part Time', 'Contract', 'IWSP'];
  Programmes: string[] = ['BSc RTIS', 'BSc IMGD', 'BSc UXGD', 'BFA'];

  searchResults: any[] = []; // Placeholder for search results

  //TODO: replace with service
  data: Job[] =
    [
      { title: 'Software Developer', company: 'TechCo', type: 'Full Time' },
      { title: 'Graphic Designer', company: 'Design Inc', type: 'Part Time' },
      { title: 'Project Manager', company: 'Projects Ltd', type: 'Contract' }
      // You can add more mock data or replace this with actual API calls
    ];

  ngOnInit() { //see https://angular.io/guide/lifecycle-hooks#oninit
    this.searchResults = this.getJobs();
  }

  getJobs() {
    return this.data;
  }

  searchJobs() {
    const query = this.searchQuery.toLowerCase();
    this.searchResults = this.getJobs().filter(job => {
      return (job.title.toLowerCase() == query
        || job.type.toLowerCase() == query
        || job.company.toLowerCase() == query)
    });

    // Implement your search logic here based on the searchQuery, selectedCategory, and selectedType
    // For example, you can call an API service to fetch the relevant job data
    console.log('Search query:', this.searchQuery);
    console.log('Selected Employent type:', this.selectedEmploymentType);
    console.log('Selected programme:', this.selectedProgramme);
    console.log(this.searchResults);
  }
}
