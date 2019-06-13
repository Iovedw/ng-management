import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { RouteRoutingModule } from './routes-routing.module';
import { LoginComponent } from './passport/login/login.component';
@NgModule({
  imports: [
    SharedModule,
    RouteRoutingModule
  ],
  declarations: [
    LoginComponent    
  ],
  providers:[
    
  ]
})
export class RoutesModule { }
