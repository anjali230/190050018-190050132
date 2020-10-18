
import { Component, OnInit } from '@angular/core';
import { Header } from '../header';
import { HeroService } from '../hero.service';
import { HttpClient } from '@angular/common/http';
/*import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';*/

@Component({
  selector: 'app-Form',
  templateUrl: './Form.component.html',
  styleUrls: ['./Form.component.css']
})
export class FormComponent implements OnInit {
  public email:any;
  public name:any;

  public great:any;
  public okay:any;
  public notGood:any;
  public comment:any;
  
  public response: any;
  constructor(private heroService: HeroService) { }
    /*this.getData().subscribe(data => {
      this.name=data.name;
      this.email=data.email;
      this.comment=data.comment;
    });*/
  
   
  ngOnInit() {
    this.getData();
  }

  getData(): void{
    this.heroService.getHeroes().subscribe(data => {
      this.response = data;
    });
  }


  submitClicked(){
      this.heroService.createUser(this.buildUserObj()).subscribe(data => {
        if(data!=null)
        alert('Submitted successfully');
        });
  }

  private buildUserObj() {
    return this.response;
  }

  radioClicked(input: any){
    this.response.feedback = input;
  }
}