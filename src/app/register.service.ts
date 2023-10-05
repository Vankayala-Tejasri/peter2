import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {Register,UniqueConstraintError,InsertedSuccess ,Read} from './register';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:3000/';

  Insert(
    Details:Register
  ):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'register/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(email:string):Observable<InsertedSuccess>{
    console.log(`${this.url}register/Read${email}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}register/Read${email}`

    );
  }
  
  Delete(email:string):Observable<InsertedSuccess>{
    console.log(`${this.url}register/Delete${email}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}register/Delete${email}`
    );
  }
  Update(
    email:string,Details:Register) {
    return this.http.put(`${this.url }register/Update${email}`,Details,{headers:this.headers}
    );
  
}


}

