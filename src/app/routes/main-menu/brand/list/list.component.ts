import { Component, OnInit, ViewChild, ViewContainerRef, ComponentFactoryResolver, ComponentRef  } from '@angular/core';
import { ApiService } from 'src/app/core/api/api.service';
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
  
  comp1: ComponentRef<BrandChildComponent>;
  comp2: ComponentRef<BrandChildComponent>;

  //
  allChecked = false;
  indeterminate = false;
  displayData = [];
  data = [
    {
      name    : 'John Brown',
      age     : 32,
      address : 'New York No. 1 Lake Park',
      checked : false,
      disabled: false
    },
    {
      name    : 'Jim Green',
      age     : 42,
      address : 'London No. 1 Lake Park',
      checked : false,
      disabled: false
    },
    {
      name    : 'Joe Black',
      age     : 32,
      address : 'Sidney No. 1 Lake Park',
      checked : false,
      disabled: false
    }
  ];
  //


  constructor(
    private apiService: ApiService,
    private resolver: ComponentFactoryResolver
  ) { }

  ngOnInit() {
    let params: any = {};
    params.currentPage = 1;
    params.pageSize = 10;
    // console.info(axios)
    axios({
      method:'post',
      baseURL:'/api',
      url:'brand/list',
      headers:{'token':'admin'},
      data:params
    }).then(function(response) {
      // handle success
        console.log(response);
    }).
    catch(function(error) {
      console.log(error)
      // handle error console.log(error);
    }).then(function(e) {
      // always executed
      console.log(e)
    });
    
    // this.apiService.post("brand/list",params,{}).subscribe(r => {
    //   console.log(r)
    //   if(r.result == "0") { 
    //   }
    // });

  }

  ngAfterContentInit() {
    console.log("动态创建组件的实例...");
    const childComp = this.resolver.resolveComponentFactory(BrandChildComponent);
    this.comp1 = this.brandChild.createComponent(childComp);
    this.comp1.instance.title = "111"; // 传参title
    this.comp1.instance.Events = "click1"; // 传参事件click1

    this.comp1.instance.btnClick.subscribe((param) => {
      console.log("--->" + param);
    });

    // 可以创建多个组件实例出来
    // let temp1 = this.dyncomp.createComponent(childComp);
    // temp1.instance.title = "第2个动态子组件";
    // let temp2 = this.dyncomp.createComponent(childComp);
    // temp2.instance.title = "第3个动态子组件";
    // let temp3 = this.dyncomp.createComponent(childComp);
    // temp3.instance.title = "第4个动态子组件";
    // let temp4 = this.dyncomp.createComponent(childComp);
    // temp4.instance.title = "第5个动态子组件";
    // let temp5 = this.dyncomp.createComponent(childComp, 0);
    // temp5.instance.title = "第6个动态子组件";

    /**
     * createComponent方法可以调用很多次，会动态创建出多个组件实例
     * 方法有第二个参数，表示组件渲染的顺序
     */
    this.comp2 = this.brandChild.createComponent(childComp);
    this.comp2.instance.Events = "click2"; // 传参事件click2
    this.comp2.instance.title = "第二个子组件";
    this.comp2.instance.btnClick.subscribe((param) => {
      console.log("--->" + param);
    });
  }
  // 销毁子组件
  public destoryChild(): void {
    this.comp1.destroy();
    this.comp2.destroy();
  }


  currentPageDataChange($event: Array<{ name: string; age: number; address: string; checked: boolean; disabled: boolean; }>): void {
    this.displayData = $event;
    this.refreshStatus();
  }

  refreshStatus(): void {
    const allChecked = this.displayData.filter(value => !value.disabled).every(value => value.checked === true);
    const allUnChecked = this.displayData.filter(value => !value.disabled).every(value => !value.checked);
    this.allChecked = allChecked;
    this.indeterminate = (!allChecked) && (!allUnChecked);
  }

  checkAll(value: boolean): void {
    this.displayData.forEach(data => {
      if (!data.disabled) {
        data.checked = value;
      }
    });
    this.refreshStatus();
  }

}
