import { Component,OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.less']
})
export class LoadingComponent implements OnInit {
  @Input() data: any;  // 接收父组件的数据
  @Output('acceptData') checkedCallBack = new EventEmitter<any>();
  fatherData:any = {}; // 返回给父组件的数据
  loader:string = '';  // 默认不使用loading动画
  
  constructor() { }

  ngOnInit() {
  }
  // 接受父组件传来的值
  ngOnChanges() {
    console.log('接受父组件传来的值:' );
    console.info(this.data);
    if(this.data.status == '1' && this.data.loader){
      this.loader = this.data.loader;
    }else if(this.data.status == '0' && this.data.loader == ''){
      this.loader = '';
    }
  }

  // 数据返回给父组件
  checkedCallback() {
    this.checkedCallBack.emit(this.fatherData);
  }

  public greeting(name: string) {
    console.log('hello ' + name);
  }

}
