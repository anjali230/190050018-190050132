import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Observable, of } from 'rxjs';


import { Hero } from './contact';



@Injectable({ providedIn: 'root' })
export class HeroService {

  private heroesUrl = 'https://cs251-outlab-6.herokuapp.com/initial_values/';  // URL to web api
  private postUrl = 'https://cs251-outlab-6.herokuapp.com/add_new_feedback/'; 

 // httpOptions = {
 //   headers: new HttpHeaders({ 'Content-Type': 'application/json' })
 // };

  constructor(private http: HttpClient){}
    
  getHeroes(): Observable<Response> {
    return this.http.get<Response>(this.heroesUrl);
  }

  public createUser(user: any) {
    return this.http.post(this.postUrl, user);
  }



}