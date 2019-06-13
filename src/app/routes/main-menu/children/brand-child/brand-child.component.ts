import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-brand-child',
  templateUrl: './brand-child.component.html',
  styleUrls: ['./brand-child.component.less']
})
export class BrandChildComponent implements OnInit {

  @Input()
  // 默认标题
  public title:string="brand子组件的默认的标题";
  public Events: string=""
  
  @Output()
  btnClick:EventEmitter<string>=new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  public click1():void{
    this.btnClick.emit("第1个子组件的点击事件...");
  }
  public click2():void{
    this.btnClick.emit("第2个子组件的点击事件...");
  }
}
