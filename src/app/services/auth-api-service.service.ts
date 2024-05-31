import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { TuiAlertService } from '@taiga-ui/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService{

  $userTokenRefreshed = new Subject<boolean>
  $employerTokenRefreshed = new Subject<boolean>
  $adminTokenRefreshed = new Subject<boolean>

  constructor(
    private readonly _http:HttpClient,
    private readonly _alert:TuiAlertService,
    private readonly _router:Router
  ) { }

  adminLogin(loginData:FormGroup):Observable<any> {
    return this._http.post(environment.baseURL + 'auth/admin/login', loginData)
  }

  adminRefreshToken(refreshToken:string | null): void {
    this._http.post(environment.baseURL + 'auth/admin/refresh-token', { refreshToken:refreshToken }).subscribe({
      
      next: (response:any) => {            
        localStorage.setItem('adminAccessToken',response.accessToken)
        localStorage.setItem('adminRefreshToken',response.refreshToken)
        this.$adminTokenRefreshed.next(true)
      },
      
      error: err => {        
        this._alert.open('', {
          label: err.error.message,
          status: 'error',
          autoClose: true,
          hasCloseButton: true
        }).subscribe()   
        localStorage.removeItem('adminAccessToken')
        localStorage.removeItem('adminRefreshToken')
        this._router.navigateByUrl('/admin/login')
      }
    })
  }


  
  userRequestOTP(email:string) {
    return this._http.post(environment.baseURL+'auth/user/send-otp',{ email:email })
  }

  userRegistration(formData:FormGroup):Observable<any> {
    return this._http.post(environment.baseURL+'auth/user/register', formData)
  }

  userLogin(loginData: FormGroup):Observable<any> {
    return this._http.post(environment.baseURL+'auth/user/login', loginData)
  }

  userRefreshToken(refreshToken:string | null): void {
    this._http.post(environment.baseURL + 'auth/user/refresh-token', { refreshToken:refreshToken }).subscribe({
      
      next: (response:any) => {  
        console.log('started')            
        localStorage.setItem('userAccessToken',response.accessToken)
        localStorage.setItem('userRefreshToken',response.refreshToken)
        this.$userTokenRefreshed.next(true)
      },
      
      error: err => {        
        this._alert.open('', {
          label: err.error.message,
          status: 'error',
          autoClose: true,
          hasCloseButton: true
        }).subscribe()   
        localStorage.removeItem('userAccessToken')
        localStorage.removeItem('userRefreshToken')
        this._router.navigateByUrl('/home')
      }
    })
  }

  userGoogleRegistration(userData: any):Observable<any> {
    return this._http.post(environment.baseURL+'auth/user/g-auth', userData)
  }

  userForgotPasswordRequestOTP(email:string) {
    return this._http.post(environment.baseURL+'auth/user/forgot-password', { email:email })
  }

  userResetPassword(data:FormGroup):Observable<any> {
    return this._http.patch(environment.baseURL+'auth/user/forgot-password', data)
  }




  employerRequestOTP(email:string):Observable<any> {
    return this._http.post(environment.baseURL + 'auth/employer/send-otp', { email:email })
  }

  employerRegistration(companyData:FormGroup):Observable<any> {
    return this._http.post(environment.baseURL + 'auth/employer/register', companyData)
  }

  EmployerLogin(loginData:FormGroup):Observable<any> {
    return this._http.post(environment.baseURL + 'auth/employer/login', loginData)
  }

  companyForgotPasswordRequestOTP(email:string) {
    return this._http.post(environment.baseURL + 'auth/employer/forgot-password', {email:email})
  }

  companyResetPassword(data:FormGroup):Observable<any> {
    return this._http.patch(environment.baseURL + 'auth/employer/forgot-password', data)
  }

  employerRefreshToken(refreshToken:string | null): void {
    this._http.post(environment.baseURL + 'auth/employer/refresh-token', { refreshToken:refreshToken }).subscribe({
      
      next: (response:any) => {  
        console.log('started')            
        localStorage.setItem('employerAccessToken',response.accessToken)
        localStorage.setItem('employerRefreshToken',response.refreshToken)
        this.$employerTokenRefreshed.next(true)
      },
      
      error: err => {        
        this._alert.open('', {
          label: err.error.message,
          status: 'error',
          autoClose: true,
          hasCloseButton: true
        }).subscribe()   
        localStorage.removeItem('employerAccessToken')
        localStorage.removeItem('employerRefreshToken')
        this._router.navigateByUrl('/home')
      }
    })
  }

}