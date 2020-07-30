import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddMatchComponent } from './components/add-match/add-match.component';
import { MainpageComponent } from './components/mainpage/mainpage.component';


const routes: Routes = [
  { path: 'add-match', component: AddMatchComponent},
  { path: '', component: MainpageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
