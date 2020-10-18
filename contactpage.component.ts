import { Component, OnInit } from '@angular/core';
import { Hero } from '../contact';

@Component({
  selector: 'app-contactpage',
  templateUrl: './contactpage.component.html',
  styleUrls: ['./contactpage.component.css']
})
export class ContactpageComponent implements OnInit {
  contact: Hero = {
    roll_no: 190050018,
    name: 'anjali',
    email: '190050018@iitb.ac.in'
  }
  constructor() { }

  ngOnInit(): void {
  }

}
