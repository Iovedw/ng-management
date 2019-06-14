import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandChildComponent } from './brand-child/brand-child.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';
@NgModule({
  imports: [
    CommonModule,
    NgZorroAntdModule
  ],
  declarations: [
    BrandChildComponent
  ],
  entryComponents:[
    BrandChildComponent
  ]
})
export class ChildrenModule { }
