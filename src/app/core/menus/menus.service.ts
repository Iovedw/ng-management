import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }
  _Menus = [
    {
      text: 'Home',
      link: '',
      icon: 'home',
      children: [
        {
          text: '主页',
          link: '/menu/home',
          icon: 'github',
        }
      ]
    },
    {
      text: '品牌管理',
      link: '',
      icon: 'bars',
      children: [
        {
          text: '品牌列表',
          link: '/menu/brandList',
          icon: 'ordered-list',
        }
      ]
    },
    {
      text: '房主管理',
      link: '',
      icon: 'profile',
      children: [
        {
          text: '预定申请',
          link: '/menu/application',
          icon: 'contacts',
        },
        {
          text: '房主列表',
          link: '/menu/holderList',
          icon: 'solution',
        }
      ]
    },
  ];
  menus() {
    return this._Menus;
  }
}
/** 菜单类：待用 */
export interface Menu {
  [key: string]: any;
  /** 文本 */
  text: string;
  /** 路由 */
  link?: string;
  target?: '_blank' | '_self' | '_parent' | '_top';
  /** 图标 */
  icon?: string;
  /** 二级菜单 */
  children?: Menu[];
}
