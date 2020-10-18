import { Component, OnInit } from '@angular/core';
import { Header } from '../header';
import { Router} from '@angular/router';

@Component({
  selector: 'app-Header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  /*
  hero = 'Windstorm';
  */
  header: Header = {
    id: 1,
    name: 'Windstorm'
  };

  constructor(private router: Router) { }

  ngOnInit() {
  }

  contactPageClicked(){

  }

  formPageClicked(){
    
  }

  goToPage(pageName:String){
    this.router.navigate(['/'+pageName]);
  }
}