import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenusService {

  constructor() { }
  _Menus = [
    {
      text: 'Home',
      link: 'index',
      icon: 'home',
      children: [
        {
          text: 'Hi',
          link: 'welcome/hi',
          icon: '',
        },
        {
          text: 'table',
          link: 'welcome/table',
          icon: '',
        }
      ]
    },
    {
      text: '品牌管理',
      link: 'brand',
      icon: 'bars',
      children: [
        {
          text: '品牌列表',
          link: 'brand/list',
          icon: 'ordered-list',
        }
      ]
    },
    {
      text: '房主管理',
      link: 'holder',
      icon: 'profile',
      children: [
        {
          text: '房主列表',
          link: 'holder/list',
          icon: 'solution',
        },{
          text: '预定申请',
          link: 'holder/Book',
          icon: 'file-audit',
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
