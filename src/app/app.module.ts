import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { DemoComponent } from './demo/demo.component';
import { Routes, RouterModule } from '@angular/router';
import { MyNewGuardGuard } from './my-new-guard.guard';
import { Childhome1ComponentComponent } from './childhome1-component/childhome1-component.component';
import { Childhome2ComponentComponent } from './childhome2-component/childhome2-component.component';
import { Childhome1Component } from './home/childhome1/childhome1.component';
import { Childhome2Component } from './home/childhome2/childhome2.component';
import { HnResolver } from './HnResolver';

const routes: Routes = [
{ path: '',  redirectTo: 'childhome1',pathMatch:"full"},

 { path: 'childhome1', component: Childhome1ComponentComponent },
{
   path: 'home',
   component: HomeComponent,

   children: [
    { path: 'subPage1', component: Childhome1Component}
  ,
    { path: 'subPage2', component: Childhome2Component}
  ] },    
  { path: 'new', loadChildren: () => import(`./new/new.module`).then(m => m.NewModule),outlet:'sectionB' },

  { path: 'Sample', loadChildren: () => import(`./sample/sample.module`).then(m => m.SampleModule),outlet: 'sectionA'  },


  { path: 'test', loadChildren: () => import(`./Test/Test.module`).then(m => m.TestModule) },



  {
    path: 'demo',
    component: DemoComponent,
    canActivate:[MyNewGuardGuard]
 
 
   }
 ];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DemoComponent,
    Childhome1ComponentComponent,
    Childhome2ComponentComponent,
    Childhome2Component,
    Childhome1Component,
    
    

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
 RouterModule.forRoot(routes, { enableTracing: true }),
// RouterModule.forChild(routes)

  ],
  providers: [MyNewGuardGuard,HnResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
