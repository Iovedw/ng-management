import { Component, OnInit,Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NzModalService ,NzMessageService} from 'ng-zorro-antd';
import axios from 'axios';
@Component({
  selector: 'app-brand-child',
  templateUrl: './brand-child.component.html',
  styleUrls: ['./brand-child.component.less']
})
export class BrandChildComponent implements OnInit {
  validateForm: FormGroup;
  @Input()
  // 接受父组件传给子组件的数据
  brandData:any={};
  operation:string; // 父组件对子组件的操作类型
  public Events: string="";
  @Output()
  btnClick:EventEmitter<string>=new EventEmitter<string>();

  isVisible = false;
  isOkLoading = false;
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
    private msgService: NzMessageService,
    private fb: FormBuilder
  ) {}

  ngOnInit() {
    this.getBrandData();
  }

  // 通过父组件传递的方法，获取父组件传递来的数据
  getBrandData(){
    this.isVisible = true;
    if(this.brandData == ''){
      console.log('新增品牌');
    }else{
      console.log('更新品牌数据')
      console.log(this.brandData)
      console.log(this.brandData.companyTel)
      this.brandId = this.brandData.id;
      this.brandName = this.brandData.brandName;
      this.companyAddress = this.brandData.companyAddress;
      this.companyName = this.brandData.companyName;
      this.companyTel = this.brandData.companyTel;
      this.createdTime = this.brandData.createdTime;
      this.description = this.brandData.description;
    }
  }

  // 提交数据
  handleOk(){
    let that = this;
    let params: any = {};
    this.isOkLoading = true;
    // 数据验证
    params.companyAddress = this.companyAddress;
    params.brandId = this.brandId;
    params.description = this.description;
    if(this.companyTel!=''){ if(!this.checkTel(this.companyTel)){ this.msgService.error('请填写正确手机号'); that.isOkLoading = false; return false;}else{params.companyTel = this.companyTel}};
    if(this.brandName!=''){params.brandName = this.brandName}else{that.msgService.error('品牌名不能为空'); that.isOkLoading = false; return false};
    if(this.companyName!=''){params.companyName = this.companyName}else{that.msgService.error('公司名不能为空'); that.isOkLoading = false; return false};
    axios({
      method:'post',
      baseURL:'/api',
      url:'brand/save',
      headers:{'token':'admin'},
      data: params
    }).then(function(response) {
      console.log(response);
      that.isVisible = false;
      that.isOkLoading = false;
      that.msgService.success('保存成功');
      that.callBackFatherData('1'); // 0 失败  1成功后父组件刷新数据
    }).
    catch(function(error) {
      that.msgService.error(error);
    }).then(function() {
      console.log('always executed');
    });
  }
  // 取消保存关闭弹窗
  handleCancel(): void {
    this.isVisible = false;
  }

  // 校验手机号
  checkTel(data){
    let isPhone = new RegExp("^(13[0-9]|14[579]|15[0-3,5-9]|16[6]|17[0135678]|18[0-9]|19[89])\\d{8}$");        // 手机号码
    let isMob = new RegExp("^([0-9]{3,4}-)?[0-9]{7,8}$");// 座机格式
    if(isMob.test(data) || isPhone.test(data)){
      
      return true;
    }else{
      return false;
    }
  }
  
  

  //  返回父组件数据
  public callBackFatherData(type):void{
    this.btnClick.emit(type);
  }
}
