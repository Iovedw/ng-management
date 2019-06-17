
##  项目说明

Angular6基础框架。

## 版本说明

```
"@delon/acl": "^1.5.1",
"@delon/auth": "^1.5.1",
"@delon/theme": "^1.5.1",
"ng-zorro-antd": "^1.8.1"
```

### 用户认证

[@delon/auth](https://ng-alain.com/auth/getting-started)


```

constructor( @Inject(DA_SERVICE_TOKEN) private tokenService: TokenService) {
    // 设置认证信息
    tokenService.set({token:'token'})
    // 获取认证信息
    tokenService.get().token; // token
    // 清除认证信息
    tokenService.clear()
}
```

## 项目资源

用户认证：[@delon/auth](https://ng-alain.com/auth/getting-started)

项目框架ng-zorro-1.8.x：[ng-zorro](https://ng.ant.design/version/1.8.x/) 

阿里icon：[ali-icon](https://www.iconfont.cn)



## 引用阿里icon
    一. 字体引入模式(所有字体黑白模式暂不支持多色)：
    引用方法: 1. 将选择好的icon加入购物车，打开购物车‘下载代码’
             2. 将下载的文件字体[ .eot, .ttf, .woff, .woff2 ]及.css文件加入assets文件夹
             3. 将下载的文件.css放入assets文件
             4. 在angular.json种styles 引入.css文件
             5. 打开下载的icon文件夹中的demo_index.html，Unicode下的字符编码例如（&#xe798;）复制
             6. 在项目文件所需页面中使用，例如{ <span class="iconfont">&#x33;</span> }
    二. 字体svg引入（icon可多色）*svg性能不是很好建议需要用多色icon可使用.png或方法一
    引入方法: 1. ...
             2. 将下载的文件.svg加入assets文件夹,同时新建.css文件将
             .icon {
                width: 1em;
                height: 1em;
                vertical-align: -0.15em;
                fill: currentColor;
                overflow: hidden;
            }，引入
             3. ...
             4. ....
            *5. 在angular.json种scripts 引入.js文件
             6. 打开下载的icon文件夹中的demo_index.html，Symbol下的字符编码例如（#icon-houzi）复制，引入7
             7. 在项目文件所需页面中使用，例如：{ 
                        <svg class="icon" aria-hidden="true">
                            <use xlink:href="#icon-xxx"></use>
                        </svg>
                    }

## default下的other-child.SERVICE
    1. 添加OtherChildService服务，层级组件分别注册（default,brand-list），解决初进入左侧栏目初次加载数据通过StatusMission方法发射数据，Subscription接受发射的数据，从而停止loading动画
