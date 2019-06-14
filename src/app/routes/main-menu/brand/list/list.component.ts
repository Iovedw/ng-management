import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef  } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
import { NzMessageService, NzModalService} from 'ng-zorro-antd';
import { BrandChildComponent } from '../../children/brand-child/brand-child.component'; // 引入子组件
import axios from 'axios';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.less']
})
export class BrandListComponent implements OnInit {
  // 这里引用模板里面定义的brandChild容器标签
  @ViewChild("brandChild", { read: ViewContainerRef })
  brandChild: ViewContainerRef;
  comp: ComponentRef<BrandChildComponent>;

  // 页面级变量
  brandName: string = "";
  companyAddress: string = "";
  companyName: string = "";
  companyTel: string = "";
  createdTime: string = "";
  description: string = "";
  brandId: string = "";
  loading = false;
  allChecked = false;
  indeterminate = false;
  dataSet = [];
  total = 0;
  pageIndex = 0;
  pageSize = 10;

  constructor(
    private apiService: ApiService,
    private msgService: NzMessageService,
    private modalService: NzModalService,
    private resolver: ComponentFactoryResolver
    ) { }

  ngOnInit() {
    this.pageIndex = 1;
    this.total = 0;
    this.getData();
  }

  getData():void{
    let that = this;
    let params: any = {};
    if(this.brandName && this.brandName.length >0) params.keyword = this.brandName;
    params.currentPage = this.pageIndex;
    params.pageSize = this.pageSize;
    this.loading = true;
    axios({
      method:'post',
      baseURL:'/api',
      url:'brand/list',
      headers:{'token':'admin'},
      data:params
    }).then(function(response) {
      // handle success
      console.log(response);
      that.dataSet = response.data.list;
      that.total = response.data.pagination.total;
      
      that.dataSet.forEach(d => {
        d.checked = false;
      });
      that.refreshStatus(null);
      that.loading = false;
    }).
    catch(function(error) {
      that.msgService.error(error);
    }).then(function() {
      console.log('always executed');
    });
  }

  refreshStatus(value): void {
    const allChecked = (this.dataSet == null || this.dataSet.length == 0) ? false : this.dataSet.every(value => value.checked === true);
    const allUnChecked = (this.dataSet == null || this.dataSet.length == 0) ? true : this.dataSet.every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
    if(value && value.toString().length >0){
        this.pageIndex = value;//parseInt(value) - 1 < 0 ? 0 : parseInt(value) - 1;
        this.getData();
    }
  }
  
  checkAll(value: boolean): void {
    if(this.dataSet && this.dataSet.length > 0){
      this.dataSet.forEach(data => data.checked = value);
    }
    this.refreshStatus(null);
  }

  // 更新
  updateBrand(): void{
    if(this.dataSet == null || this.dataSet.length == 0){
      this.msgService.error("暂无数据可以操作!");
      return;
    }
    if(this.dataSet.filter(v => v.checked == true).length != 1){
        this.msgService.error("请选择一条记录，在进行操作!");
        return;
    }
    let selectedData = this.dataSet.filter(v => v.checked == true)[0];
    this.createChild(selectedData, "更新操作");
    // this.showUserOperatePage(selectedData,"更新操作");
  }
 
  // 显示增添数据页面
  showUserOperatePage(data,type){
    this.comp.instance.brandData = data;   // 传参data给子组件
    console.log(data)
  }

  // 新增
  addBrand(): void{
    // this.showUserOperatePage(null,"新增操作");
    this.createChild({},"新增操作");
  }

  // 删除
  deleteBrand(): void{
    if(this.dataSet == null || this.dataSet.length == 0){
      this.msgService.error("暂无数据可以操作!");
      return;
    }
    if(this.dataSet.filter(v => v.checked == true).length == 0){
      this.msgService.error("至少选择一条记录，在进行操作!");
      return;
    }
    let managerUser:boolean = false;
    this.dataSet.filter(v => v.checked == true).forEach(r => {
      if(r.userType == 0 || r.userType == "0") {
        managerUser = true;
      }
    });
    if(managerUser) {
      this.msgService.error("不能删除系统管理员!");
      return;
    }
    this.modalService.confirm({
      nzTitle: '确认信息',
      nzContent: '确认要删除选择的数据？',
      nzOkText: '确认',
      nzCancelText: '取消',
      nzOnOk:()=>{
        let params: any = {};
        params.ids = [];
        this.dataSet.filter(v => v.checked == true).forEach(r=>{
            params.ids.push(r.id);
        });
        this.apiService.post("brand/delete",params,{}).subscribe(r => {
          if(r.result == 0) {
            this.msgService.info("删除成功!");
            this.dataSet = [];
            this.getData();
          } else {
            this.msgService.error("删除失败!");
          }
        });
      },
      nzOnCancel:()=>{
        this.dataSet.forEach(d => {
          d.checked = false;
        });
        this.refreshStatus(null);
      }
    });
  }

  // 描述超过20字`...`显示
  desSubStr(str: any, num: Number){
    if(str && str.length > 0) {
      if(str.length > num) return str.substr(0,num) + "...";
      return str;
    }
    return str;
  }


  // 创建brandChild动态组件
  // ngAfterContentInit() {
  //   console.log("动态创建组件的实例...");
  //   const childComp = this.resolver.resolveComponentFactory(BrandChildComponent);
  //   this.comp = this.brandChild.createComponent(childComp);
  //   this.comp.instance.brandData = {};             // 传参data给子组件
  //   this.comp.instance.Events = "save";            // 提交事件
  //   this.comp.instance.Events = "cancel";          // 关闭事件

  //   this.comp.instance.btnClick.subscribe((param) => {
  //     console.log("--->" + param);
  //   });
    

  //   // 可以创建多个组件实例出来
  //   // let temp1 = this.dyncomp.createComponent(childComp);
  //   // temp1.instance.title = "第2个动态子组件";
  //   // let temp2 = this.dyncomp.createComponent(childComp);
  //   // temp2.instance.title = "第3个动态子组件";
  //   // let temp3 = this.dyncomp.createComponent(childComp);
  //   // temp3.instance.title = "第4个动态子组件";
  //   // let temp4 = this.dyncomp.createComponent(childComp);
  //   // temp4.instance.title = "第5个动态子组件";
  //   // let temp5 = this.dyncomp.createComponent(childComp, 0);
  //   // temp5.instance.title = "第6个动态子组件";

  //   /**
  //    * createComponent方法可以调用很多次，会动态创建出多个组件实例
  //    * 方法有第二个参数，表示组件渲染的顺序
  //    */
  //   /*
  //   this.comp2 = this.brandChild.createComponent(childComp);
  //   this.comp2.instance.Events = "click2"; // 传参事件click2
  //   this.comp2.instance.title = "第二个子组件";
  //   this.comp2.instance.btnClick.subscribe((param) => {
  //     console.log("--->" + param);
  //   });
  //   */
  // }

  createChild(data,type){
    console.log("动态创建组件的实例...");
    const childComp = this.resolver.resolveComponentFactory(BrandChildComponent);
    this.comp = this.brandChild.createComponent(childComp);
    this.comp.instance.operation = type;           // 传参操作类型给子组件
    this.comp.instance.brandData = data;           // 传参data给子组件
    this.comp.instance.Events = "getBrandData";    // 传给子组件事件，获取父组件传递的数据

    this.comp.instance.btnClick.subscribe((param) => {
      console.log("--->" + param);
    });
  }
  // 销毁子组件
  public destoryChild(): void {
    this.comp.destroy();
  }


}
