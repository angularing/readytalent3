import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import { Job } from './models/job-model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

  static readonly IS_DEV: boolean = false; //temp
  static readonly JOB_API_URL: string = "https://readytalent3.azurewebsites.net/jobs";
  static readonly JOB_API_URL_DEV: string = "http://localhost:8080/jobs";

  constructor(private http: HttpClient) { }

  getJobsObservable() {
    const url = JobService.IS_DEV ? JobService.JOB_API_URL_DEV : JobService.JOB_API_URL;
    return this.http.get(url);
  }
}
