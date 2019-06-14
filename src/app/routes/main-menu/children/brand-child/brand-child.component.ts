import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService } from 'ng-zorro-antd';

@Component({
  selector: 'app-brand-child',
  templateUrl: './brand-child.component.html',
  styleUrls: ['./brand-child.component.less']
})
export class BrandChildComponent implements OnInit {
  validateForm: FormGroup;
  isVisible = false;
  @Input()
  // 接受父组件传给子组件的数据
  brandData:any={};
  operation:string; // 父组件对子组件的操作类型
  public Events: string="";
  @Output()
  btnClick:EventEmitter<string>=new EventEmitter<string>();
  // 组件内部变量
  brandId: any= "";           
  brandName: string = "";
  companyName: string = "";
  companyAddress: string = "";
  companyTel: string = "";
  createdTime: string = "";
  description: string = "";
  logo: string = "";

  constructor(
    private modalService: NzModalService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getBrandData();
    // this.validateForm = this.fb.group({
    //   brandName        : [ null,[Validators.required]],
    //   companyName      : [ null,[Validators.required]],
    //   companyAddress   : [ null],
    //   // companyTel       : [ null,[this.checkTel]],
    //   description      : [ null]
    // });
  }

  // 通过父组件传递的方法，获取父组件传递来的数据
  getBrandData(){
    console.log(this.brandData);
    this.isVisible = true;
    this.brandId = this.brandData.id;
    this.brandName = this.brandData.brandName;
    this.companyAddress = this.brandData.companyAddress;
    this.companyName = this.brandData.companyName;
    this.companyTel = this.brandData.companyTel;
    this.createdTime = this.brandData.createdTime;
    this.description = this.brandData.description;
  }

  submitForm(): void {
    console.log(this.validateForm.value);
  }



  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    this.isVisible = false;
  }

  handleCancel(): void {
    this.isVisible = false;
  }

  showConfirm(): void {
    this.modalService.confirm({
      nzTitle: 'Confirm',
      nzContent: 'Bla bla ...',
      nzOkText: 'OK',
      nzCancelText: 'Cancel'
    });
  }


  public click1():void{
    this.btnClick.emit("第1个子组件的点击事件...");
  }
  public click2():void{
    this.btnClick.emit("第2个子组件的点击事件...");
  }
}
