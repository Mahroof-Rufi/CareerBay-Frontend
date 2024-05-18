import { createAction, props } from "@ngrx/store";
import { AppliedJobs, EditUser, User, education, experience } from "./user.model";
import { Job } from "../employer-store/employer.model";

export const loadUser = createAction("loadUser");
export const loadUserSuccess = createAction("loadUserSuccess", props<{ user:User }>())

export const loadUserJobs = createAction("loadJobs");
export const loadUserJobsSuccess = createAction("loadJobsSuccess", props<{ jobs:Job[] }>());

export const updateUserAbout = createAction("updateUserAbout", props<{ newData:EditUser | FormData, userId:string }>());
export const updateUserAboutSuccess = createAction("updateUserAbout", props<{ newData:User }>());

export const addUserExperience = createAction("addUserExperience", props<{ experience:experience, userId:string, exp_id?:string }>());

export const editUserEducation = createAction("addUserEducation", props<{ education:education, userId:string, edcn_id?:string }>());

export const updateUserSkills = createAction("updateUserSkills", props<{ skills:string[], user_id:string }>());

export const applyJob = createAction("applyJob", props<{ user_id:string, job_id:string }>());
export const applyJobSucces = createAction("applyJobSucces", props<{ updatedUser:User, updatedJob:Job }>());

export const isApplied = createAction("isApplied", props<{ userId:string, jobId:string }>());
export const isAppliedSucces = createAction("isAppliedSucces", props<{ isVerified:boolean }>());

export const loadAppliedJobs = createAction("loadAppliedJobs", props<{ user_id:string }>());
export const loadAppliedJobsSuccess = createAction("loadAppliedJobsSuccess", props<{ appliedJobs:AppliedJobs[] }>())