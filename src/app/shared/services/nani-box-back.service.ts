import { HttpClient, HttpHeaders } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NaniBoxBackService {

  naniNani = inject(HttpClient);
  
  url = "localhost8080";

  constructor() { }

  listAll(){
    let headers = new HttpHeaders();
    return this.naniNani.get(`$}{this.url}/suggestion/get`, {headers: headers});
  }
  
}
