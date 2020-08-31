import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class RandomColorService {

  constructor( private http:HttpClient) { }

  getData(): Observable<any>{
    const url= "https://reqres.in/api/colors"
    return this.http.get<any>(url)
  }
}
