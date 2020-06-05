import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SampleComponent } from './sample/sample.component';
import { Sample1Component } from './sample1/sample1.component';

const routes: Routes = [
  { path: '', component:SampleComponent},
  { path: 'Sample',component:Sample1Component }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],

  ]
})
export class SampleModule { }
