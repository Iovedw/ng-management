import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandChildComponent } from './brand-child/brand-child.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    BrandChildComponent
  ],
  entryComponents:[
    BrandChildComponent
  ]
})
export class ChildrenModule { }
