import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreatorComponent } from './creator/creator.component';

const routes: Routes = [
  {
    path: '',
    component: CreatorComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
