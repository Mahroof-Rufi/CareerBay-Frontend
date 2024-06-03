import { createAction, props } from "@ngrx/store";
import { Employer, User } from "./admin.model";


export const LOAD_USERS = '[users] load users';
export const LOAD_USERS_SUCCESS = '[users] load users success';

export const USER_ACTION = '[users] user action';
export const USER_ACTION_SUCCESS = '[users] user action success';

export const LOAD_EMPLOYERS = '[employers] load employers';
export const LOAD_EMPLOYERS_SUCCESS = '[employers] load employers success';

export const EMPLOYER_ACTION = '[employer] employer action';
export const EMPLOYER_ACTION_SUCCESS = '[employer] employer action success'



export const loadUsers = createAction(LOAD_USERS, props<{ pageNo:number,queries?:any }>())
export const loadUserSuccess = createAction(LOAD_USERS_SUCCESS, props<{ users:User[], totalUsersCount:number }>())

export const userAction = createAction(USER_ACTION, props<{ user_id:string }>())
export const userActionSuccess = createAction(USER_ACTION_SUCCESS, props<{ user:User }>())

export const loadEmployers = createAction(LOAD_EMPLOYERS, props<{ pageNo:number, queries?:any }>())
export const loadEmployersSuccess = createAction(LOAD_EMPLOYERS_SUCCESS, props<{ employers:Employer[], totalEmployersCount:number }>())

export const employerAction = createAction(EMPLOYER_ACTION, props<{ employer_id:string }>())
export const employerActionSuccess = createAction(EMPLOYER_ACTION_SUCCESS, props<{ employer:Employer }>())