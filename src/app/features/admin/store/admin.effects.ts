import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { companyAction, companyActionSuccess, loadCompanies, loadCompaniesSuccess, loadUserSuccess, loadUsers, userAction, userActionSuccess } from "./admin.actions";
import { AuthService } from "../../../services/auth.service";
import { EMPTY, catchError, exhaustMap, map } from "rxjs";

@Injectable()
export class adminEffects {

    constructor(
        private actions:Actions,
        private apiService:AuthService
    ) { }

    loadUsers = createEffect(() => this.actions.pipe(        
        ofType(loadUsers),
        exhaustMap(() => {
            return this.apiService.adminLoadUsers().pipe(
                map((data) => {
                    return loadUserSuccess({ users:data.data })
                }),
                catchError((error) => {
                    console.error('HTTP Error on admin loaduser effect:',error);
                    return EMPTY
                })
            )
        })
    ))

    userAction = createEffect(() => this.actions.pipe(
        ofType(userAction),
        exhaustMap((action) => {
            return this.apiService.adminUserAction(action.user_id).pipe(
                map((data) => {                 
                    return userActionSuccess({ user:data.updatedUser })
                }),
                catchError((error) => {
                    console.error('HTTP Error on admin useraction effect:',error);
                    return EMPTY
                })
            )
        })
    ))

    loadCompanies = createEffect(() => this.actions.pipe(
        ofType(loadCompanies),
        exhaustMap((action) => {
            return this.apiService.adminLoadCompanies().pipe(
                map((data) => {
                    return loadCompaniesSuccess({ companies:data.data })
                }),
                catchError((error) => {
                    console.error('HTTP Error on admin load companies effect:',error);
                    return EMPTY
                })
            )
        })
    ))

    companyActionSuccess = createEffect(() => this.actions.pipe(
        ofType(companyAction),
        exhaustMap((action) => {
            return this.apiService.adminEmployerAction(action.emplyr_id).pipe(
                map((data) => {
                    console.log(data);
                    
                    return companyActionSuccess({ employer:data.updatedEmployer })
                }),
                catchError((error) => {
                    console.error('HTTP Error on admin company action effect:',error);
                    return EMPTY
                })
            )
        })
    ))

}