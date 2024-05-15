import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadUserJobs, loadUser } from '../../../store/user-store/user.actions';
import { User } from '../../../store/user-store/user.model';

export const userLoadJobsDataGuard: CanActivateFn = (route, state) => {

  const UserStore = inject(Store<{ user:User }>)

  UserStore.dispatch(loadUserJobs())
  return true;
};