import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HolderRoutingModule } from './holder-routing.module';
import { ListComponent } from './list/list.component';
import { ApplicationComponent } from './application/application.component';

@NgModule({
  imports: [
    CommonModule,
    HolderRoutingModule
  ],
  declarations: [ListComponent, ApplicationComponent]
})
export class HolderModule { }
