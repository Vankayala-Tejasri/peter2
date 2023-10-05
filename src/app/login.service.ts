import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Login, UniqueConstraintError, InsertedSuccess, Read } from './login';
import { Observable } from 'rxjs';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }
  headers = new HttpHeaders({
    'content-type': 'application/json',
    Authentication: 'Bearer' + localStorage.getItem('token'),
  });
  private url = 'http://localhost:3000/';

  Insert(
    Details: Login
  ): Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'login/Insert',
      Details,
      { headers: this.headers }
    );

  }
  Read(email: string): Observable<InsertedSuccess> {
    console.log(`${this.url}login/Read${email}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}login/Read${email}`
    );
  }

  Delete(email: string): Observable<InsertedSuccess> {
    console.log(`${this.url}login/Delete${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}login/Delete${email}`
    );
  }
  Update(
    email: string, Details: Login) {
    return this.http.put(`${this.url}login/Update${email}`, Details, { headers: this.headers }
    );
  }
  private usernameSubject = new BehaviorSubject<string>('');
  public username$ = this.usernameSubject.asObservable();

  setUsername(username: string) {
    this.usernameSubject.next(username);
  }
}



