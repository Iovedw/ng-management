import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgZorroAntdModule } from 'ng-zorro-antd';
import { LoadingComponent } from './loading/loading.component';

const COMPONENTS = [
  LoadingComponent
];
const SHAREDS = [
  CommonModule,
  ReactiveFormsModule,
  FormsModule,
  RouterModule,
  NgZorroAntdModule
];
@NgModule({
  imports: [
    ...SHAREDS
  ],
  declarations: [
    ...COMPONENTS,
  ],
  exports: [
    ...SHAREDS,
    ...COMPONENTS
  ]
})
export class SharedModule { }
