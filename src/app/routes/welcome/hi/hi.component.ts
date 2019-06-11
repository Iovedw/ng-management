import { Component, OnInit } from '@angular/core';
import { NzIconService } from 'ng-zorro-antd';
declare var BMap: any;
declare var require: any;
@Component({
  selector: 'app-hi',
  templateUrl: './hi.component.html',
  styleUrls: ['./hi.component.less']
})
/*
  自定义icon: 
    1. import { Component, OnInit } from '@angular/core';
       import { NzIconService } from 'ng-zorro-antd';
    2. 
      constructor(private _iconService: NzIconService) {
        this._iconService.fetchFromIconfont({
          scriptUrl: 'https://at.alicdn.com/t/font_579782_amgggiy31pr.js' // 下载的阿里矢量图icon，存在iconfont.js文件引入，图标即可使用
        });
      }
      
*/
export class HiComponent implements OnInit {
  echarts: any;
  constructor(private _iconService: NzIconService) {
    this._iconService.fetchFromIconfont({
      scriptUrl: 'https://at.alicdn.com/t/font_579782_amgggiy31pr.js'
    });
  }

  ngOnInit() {
    this.echarts = require('echarts');
  }
}
