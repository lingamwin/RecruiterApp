import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LoginComponent} from "./login/login.component";
import { QualifiedComponent } from './dashboard/qualified/qualified.component';
import { NewComponent } from './dashboard/new/new.component';
import { NotContacted } from './dashboard/notContacted/notContacted.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FollowedComponent } from './dashboard/followed/followed.component';

const routes: Routes = [
   {path : '', component : LoginComponent},
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: DashboardComponent,children:[
    { path: '', redirectTo: 'qualified', pathMatch: 'full' },
    {path: 'qualified', component: QualifiedComponent},
    {path: 'new', component: NewComponent},
    {path: 'new/:id', component: NewComponent},
    {path: 'notContacted', component: NotContacted},
    {path: 'followed', component: FollowedComponent} 
  ] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: []
})
export class AppRoutingModule {
}
