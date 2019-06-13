import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SharedModule } from '../../shared/shared.module';
import { CoreModule } from '../../core/core.module';
import { HomePageComponent } from './home/home-page/home-page.component';
import { BrandListComponent } from './brand/list/list.component';
import { ApplicationComponent } from './holder/application/application.component';
import { HolderListComponent } from './holder/list/list.component';
import { ChildrenModule } from './children/children.module';

const routes: Routes = [
  {
    path: 'home',
    component: HomePageComponent,
    data: {
      parentcrumb: 'home',
      breadcrumb: '主页'
    }
  },
  {
    path: 'brandList',
    component: BrandListComponent,
    data: {
      parentcrumb: '品牌管理',
      breadcrumb: '品牌列表'
    }
  },
  {
    path: 'application',
    component: ApplicationComponent,
    data: {
      parentcrumb: '房主管理',
      breadcrumb: '品牌列表'
    }
  },
  {
    path: 'holderList',
    component: HolderListComponent,
    data: {
      parentcrumb: '房主管理',
      breadcrumb: '房主列表'
    }
  }
];
@NgModule({
  imports: [
    SharedModule,
    CoreModule,
    ChildrenModule,
    RouterModule.forChild(routes),
  ],
  declarations: [
    HomePageComponent,
    BrandListComponent,
    ApplicationComponent,
    HolderListComponent
  ],
  entryComponents: [

  ]
})
export class MainMenuModule { }
