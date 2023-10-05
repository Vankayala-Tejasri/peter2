import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {Comps,UniqueConstraintError,InsertedSuccess ,Read} from './comps';

import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComponentService {
  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:3000/';

  Insert(
    Details:Comps
  ):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'comp/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(comp_name:string):Observable<InsertedSuccess>{
    console.log(`${this.url}comp/Read${comp_name}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}comp/Read${comp_name}`
    );
  }
  
  Delete(comp_name:string):Observable<InsertedSuccess>{
    console.log(`${this.url}login/Delete${comp_name}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}login/Delete${comp_name}`
    );
  }
  Update(
    comp_name:string,Details:Comps) {
    return this.http.put(`${this.url }login/Update${comp_name}`,Details,{headers:this.headers}
    );
}
}





