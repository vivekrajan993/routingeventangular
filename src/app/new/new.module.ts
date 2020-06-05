import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { TestComponent } from './test/test.component';
import { Test1Component } from './test1/test1.component';
const routes: Routes = [
  { path: '', component:TestComponent  },
  { path: 'test',component:Test1Component}
];



@NgModule({
  declarations: [TestComponent],
  imports: [
    CommonModule,
   [RouterModule.forChild(routes)],

  ]
})
export class NewModule { }
