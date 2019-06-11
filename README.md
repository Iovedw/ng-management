
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

## 项目知识点
    1. core核心文件 ==》api.services 封装好的请求(get,post)
        1.1: 