import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [{
    provide: APP_BASE_HREF,
    // @ts-ignore __MICRO_APP_BASE_ROUTE__ 为micro-app传入的基础路由
    useValue: window.__MICRO_APP_BASE_ROUTE__ || '/page1'
  }]
})
export class AppRoutingModule { }
