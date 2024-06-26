import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JobsApiServiceService {

  

  constructor(
    private readonly _http:HttpClient
  ) { }

  userGetJobById(job_id:string): Observable<any> {
    return this._http.get(environment.baseURL + `jobs/job?job_id=${job_id}`)
  }

  userFetchALLJobs(pageNo:number, sort?:string, filterQuery?:any):Observable<any> {    
    return this._http.get(environment.baseURL+`jobs/jobs?page=${pageNo}&sort=${sort}&${filterQuery}`)
  }

  userApplyJob(formData:FormData):Observable<any> {
    return this._http.post(environment.baseURL + 'job-applicants/apply-job', formData)
  }

  userVerifyApplication(job_id:string):Observable<any> {
    return this._http.post(environment.baseURL + 'job-applicants/verify-application', { job_id:job_id })
  }

  userLoadAppliedJobs():Observable<any> {
    return this._http.get(environment.baseURL + 'job-applicants/applied-jobs')
  }

  userSaveJob(job_id:string):Observable<any> {
    return this._http.post(environment.baseURL + 'jobs/save-job', { job_id:job_id })
  }

  userIsJobSaved(job_id:string):Observable<any> {
    return this._http.post(environment.baseURL + 'jobs/is-saved', { job_id:job_id })
  }

  userUnSaveJob(job_id:string):Observable<any> {
    return this._http.post(environment.baseURL + 'jobs/unsave-job', { job_id:job_id })
  }

  userLoadSavedJobs():Observable<any> {
    return this._http.get(environment.baseURL + 'jobs/saved-jobs')
  }



  companyFetchJobs(page:number, sort?:string , filterQuery?:any, title?:string):Observable<any> {    
    return this._http.get(environment.baseURL + `jobs/employer-jobs?page=${page}&sort=${sort}&${filterQuery}`);
  }

  companyGetJobById(job_id:string): Observable<any> {
    return this._http.get(environment.baseURL + `jobs/employer-job?job_id=${job_id}`)
  }

  companyFetchJobsById(employer_id:string, pageNo:number):Observable<any> {
    return this._http.get(environment.baseURL + `jobs/user-employer-jobs?employer_id=${employer_id}&page=${pageNo}`)
  }

  companyAddJobPost(jobData:FormData):Observable<any> {
    return this._http.post(environment.baseURL + 'jobs/employer-jobs', jobData)
  }

  companyEditJobPost(jobId:string, jobData:FormData):Observable<any> {
    return this._http.put(environment.baseURL + 'jobs/employer-jobs', { jobId:jobId, newJobData:jobData })
  }

  companyDeleteJob(jobId:string):Observable<any> {
    return this._http.delete(environment.baseURL + `jobs/employer-delete-job/${jobId}`)
  }

  companyLoadJobApplicants(job_id:string):Observable<any> {
    return this._http.post(environment.baseURL + 'job-applicants/applicants', {job_id:job_id})
  }

  updateCandidateStatus(job_id:string,user_id:string,newStatus:string):Observable<any> {
    return this._http.patch(environment.baseURL + 'job-applicants/applicants/', { job_id:job_id, user_id:user_id, newStatus:newStatus })
  }

  rejectCandidateApplication(job_id:string, user_id:string): Observable<any> {
    return this._http.patch(environment.baseURL + 'job-applicants/reject-application', { job_id:job_id, user_id:user_id })
  }

  closeHiring(job_id:string): Observable<any> {
    return this._http.patch(environment.baseURL + 'jobs/close-hiring', { job_id:job_id })
  }

}
