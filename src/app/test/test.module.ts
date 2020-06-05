import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TestingComponent } from './testing/testing.component';
import { TestComponent } from '../new/test/test.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component:TestComponent  },
  { path: 'test',component:TestComponent }
];

@NgModule({
  declarations: [TestingComponent],
  imports: [
    CommonModule,
    [RouterModule.forChild(routes)],

  ]
})
export class TestModule { }
