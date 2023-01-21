import { Observable, retry } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {
  private readonly serverUrl = 'https://reqres.in/api/register';
  constructor(private httpClient : HttpClient) { }
 register(body) : Observable <any>
 {
  return this.httpClient.post(this.serverUrl + "/login",body);
 } 
}
