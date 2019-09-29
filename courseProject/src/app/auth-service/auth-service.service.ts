import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { AuthModel } from '../shared/authmodel.model';
import { catchError, tap } from 'rxjs/operators';
import { throwError, BehaviorSubject } from 'rxjs';
import { User } from './user.model';


export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  signUp(authData: AuthModel) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyAilt8nT8eXoHmP8lEYobqk8PNnK-4fg-0', authData).pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  signIn(authData: AuthModel) {
    // tslint:disable-next-line: max-line-length
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyAilt8nT8eXoHmP8lEYobqk8PNnK-4fg-0', authData).pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
    }));
  }

  private handleError(errRes: HttpErrorResponse) {
    let errorMessage = 'Unknown Error Occured';
    if (!errRes.error || !errRes.error.error) {
      return throwError(errorMessage);
    }
    switch (errRes.error.error.message) {
      case 'EMAIL_NOT_FOUND':
        errorMessage = 'There is no user record corresponding to this identifier. The user may have been deleted.';
        break;
      case 'INVALID_PASSWORD':
        errorMessage = 'The password is invalid ';
        break;
      case 'USER_DISABLED':
        errorMessage = 'The user account has been disabled by an administrator.';
        break;
      case 'EMAIL_EXISTS':
        errorMessage = 'The email address is already in use by another account';
        break;
    }
    return throwError(errorMessage);
  }

  private handleAuthentication(email: string, userId: string, token: string, expiresIn: number) {
    const exiration = new Date(new Date().getTime() + (expiresIn * 1000));
    const user = new User(email, userId, token, exiration);
    this.user.next(user);
  }
}
