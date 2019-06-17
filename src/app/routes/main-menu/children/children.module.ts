import { NgModule } from '@angular/core';
import { SharedModule } from '../../../shared/shared.module'
import { CommonModule } from '@angular/common';
import { BrandChildComponent } from './brand-child/brand-child.component';
import { NgZorroAntdModule } from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
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
