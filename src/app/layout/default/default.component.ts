import { Component, OnInit, ViewChild } from '@angular/core';
import { LoadingComponent } from '../../shared/loading/loading.component'; // loading子组件
import { ActivatedRoute, Router, Params, NavigationEnd, PRIMARY_OUTLET, NavigationStart } from '@angular/router';
import { ApiService } from 'src/app/core/api/api.service';
import { OtherChildService } from "./other-child.service";
import { Subscription } from 'rxjs';
@Component({
  selector: 'app-default',
  templateUrl: './default.component.html',
  styleUrls: ['./default.component.less']
})
export class DefaultComponent implements OnInit {
  // 子组件引入，greeting：自定义方法名，DwChildComponent：组件实例: 方法使用 this.greeting.greeting();
  @ViewChild("child") greeting: LoadingComponent;
  childData: any = {}; // 发送给子组件loading - data
  acceptData: any = {};
  subscription: Subscription;
  
  isCollapsed = false;
  triggerTemplate = null;
  date: any;
  
  constructor(
    private api: ApiService,
    public  activatedRoute: ActivatedRoute,
    private otherService: OtherChildService,
    private router: Router
  ) {
    router.events.subscribe(e => {
      if(e instanceof NavigationStart) {
        this.checkedBack('1','2');
      }else if(e instanceof NavigationEnd) {
        if(this.subscription == undefined){
          this.checkedBack('0','');
        }
         // 接受父组件传来的初始化加载状态标识
        this.subscription = otherService.Status$.subscribe(message => {
          console.log('我是default子组件加载状态初始化状态'+ message); // true
          if(message){
            this.checkedBack('0',''); // 传一任意值停止动画
          }
        });
      }
    })
  }
  launchSidebar() {
    this.isCollapsed = !this.isCollapsed;
  }
  ngOnInit() {
    const date = new Date();
    this.date = date.getFullYear();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  // 传值给子组件
  checkedBack(status,data) {
    console.log('传值给子组件');
    this.childData = {
      status: status, // status:1 开始执行动画 0关闭动画
      loader: data    // data: 选择动画形式 暂时只有0, 1, 2三种动画
    };
  }

  // 接受子组件传来的数据,  子组件使用父组件方法，通过接受子组件方法触发父组件方法，从而调用其他方法
  checkedCallBack(event){
    this.acceptData = {title:'我是子组件返回给父组件的数据',data:event.id};
    console.log(this.acceptData);
    this.otherFun();
  }
  
  otherFun(){
    console.log('执行了父组件的其他方法')
  }
}
