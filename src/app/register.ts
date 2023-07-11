export interface Register {
username:string;
mobilenumber:number;
aadharnumber:number;
age:number;
email:string;
password:string;
gender:string
}
export interface UniqueConstraintError {
    errorNum: Number;
    offset: Number;
  }
  export interface InsertedSuccess {
    Result: any;
    lastRowid: String;
    rowsAffected: Number;
  }
  export interface Read {
      Result: [];
  }