import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from'@angular/common/http';
import {Symptom,UniqueConstraintError,InsertedSuccess ,Read} from './symptom';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SymptomService {

  constructor(private http:HttpClient) { }
  headers = new HttpHeaders({
    'content-type':'application/json',
    Authentication:'Bearer' + localStorage.getItem('token'),
  });
  private url ='http://localhost:3000/';

  Insert(
    Details:Symptom
  ):Observable<InsertedSuccess | UniqueConstraintError> {
    return this.http.post<InsertedSuccess | UniqueConstraintError>(
      this.url + 'symp/Insert',
      Details,
      {headers:this.headers}
    );

  } 
  Read(disease:string):Observable<InsertedSuccess>{
    console.log(`${this.url}symp/Read${disease}`);
    return this.http.get<InsertedSuccess>(
      `${this.url}symp/Read${disease}`
    );
  }
  
  Delete(disease:string):Observable<InsertedSuccess>{
    console.log(`${this.url}symp/Delete${disease}`);
    return this.http.delete<InsertedSuccess>(
      `${this.url}symp/Delete${disease}`
    );
  }
  Update(
    disease:string,Details:Symptom) {
    return this.http.put(`${this.url }symp/Update${disease}`,Details,{headers:this.headers}
    );
}
}


