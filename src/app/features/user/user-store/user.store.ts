import { userStateModel } from "./user.model";


export const initialState: userStateModel = {
  user: {
    _id: '',
    firstName: '',
    lastName: '',
    profile_url: '',
    resume_url: '',
    email: '',
    jobTitle: '',
    industry: '',
    DOB: undefined,
    remort: false,
    gender: '',
    about: '',
    city: '',
    state: '',
    gitHub_url: '',
    portfolio_url: '',
    experiences: [],
    educations: [],
    skills: [],
  },
  jobs: [],
  savedJobs: [],
  AppliedJobs: [],
  posts: [],
  users: [],
  companies: [],
  isApplied: false,
  isSaved: false,
}

