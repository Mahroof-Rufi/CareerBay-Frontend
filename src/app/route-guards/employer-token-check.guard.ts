import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';

export const employerTokenCheckGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router)

  const token = localStorage.getItem('userToken')
  if (!token) {
    console.log('if');
    
    return true;
  } else {
    console.log('else');
    
    router.navigateByUrl('user/dashboard')
    return false
  }

};
