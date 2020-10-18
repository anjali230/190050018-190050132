import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeaderComponent } from './header/header.component';
import { FormComponent } from './Form/Form.component';
import { ContactpageComponent } from './contactpage/contactpage.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'Form', component: FormComponent },
  { path: 'Contact', component: ContactpageComponent },
  { path: '**', component: ContactpageComponent }
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
