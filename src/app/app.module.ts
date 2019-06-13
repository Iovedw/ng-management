import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { registerLocaleData, LocationStrategy, HashLocationStrategy } from '@angular/common';
import en from '@angular/common/locales/en';
import { SharedModule } from './shared/shared.module';
import { RoutesModule } from './routes/routes.module';
import { LayoutModule } from './layout/layout.module';
import { CoreModule } from './core/core.module';
import { ApiService, API_URL } from './core/api/api.service';
import { environment } from 'src/environments/environment';
import { DelonAuthModule, SimpleInterceptor } from '@delon/auth';
import { DelonACLModule } from '@delon/acl';
import { FormsModule } from '@angular/forms';
import { NgZorroAntdModule, NZ_I18N, zh_CN, NZ_NOTIFICATION_CONFIG } from 'ng-zorro-antd';
import zh from '@angular/common/locales/zh';
registerLocaleData(zh);

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    SharedModule,
    RoutesModule,
    LayoutModule,
    CoreModule,
    DelonAuthModule.forRoot(),
    DelonACLModule.forRoot(),
    FormsModule,
    NgZorroAntdModule
  ],
  providers: [
    ApiService,
    { provide: LocationStrategy, useClass: HashLocationStrategy },
    { provide: API_URL, useValue: environment.urlPrefix },
    { provide: HTTP_INTERCEPTORS, useClass: SimpleInterceptor, multi: true},
    { provide: NZ_NOTIFICATION_CONFIG, useValue: { nzMaxStack: 1 } },
    { provide: NZ_I18N, useValue: zh_CN }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
