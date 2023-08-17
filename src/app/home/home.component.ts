import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  searchQuery: string = '';
  selectedEmploymentType: string = 'IWSP';
  selectedProgramme: string = 'BSc RTIS';

  // Mock data for dropdown lists
  EmploymentTypes: string[] = ['Full Time', 'Part Time', 'Contract', 'IWSP'];
  Programmes: string[] = ['BSc RTIS', 'BSc IMGD', 'BSc UXGD', 'BFA'];

  searchResults: any[] = []; // Placeholder for search results

  searchJobs() {

    // Mock search logic
    this.searchResults = [
      { title: 'Software Developer', company: 'TechCo', type: 'Full Time' },
      { title: 'Graphic Designer', company: 'Design Inc', type: 'Part Time' },
      { title: 'Project Manager', company: 'Projects Ltd', type: 'Contract' }
      // You can add more mock data or replace this with actual API calls
    ];

    this.searchResults = this.searchResults.filter(job => {
      if (this.selectedEmploymentType === 'title') {
        return job.title.toLowerCase().includes(this.searchQuery.toLowerCase());
      } else if (this.selectedEmploymentType === 'company') {
        return job.company.toLowerCase().includes(this.searchQuery.toLowerCase());
      } else if (this.selectedEmploymentType === 'type') {
        return job.type.toLowerCase().includes(this.searchQuery.toLowerCase());
      }
    });

    // Implement your search logic here based on the searchQuery, selectedCategory, and selectedType
    // For example, you can call an API service to fetch the relevant job data
    console.log('Search query:', this.searchQuery);
    console.log('Selected Employent type:', this.selectedEmploymentType);
    console.log('Selected programme:', this.selectedProgramme);
  }
}
