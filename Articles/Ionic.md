# Ionic技术集锦

```
导读：ionic入门教程、示例源码、业界优秀技术等
```

[The Complete Guide To Progressive Web Apps with Ionic 4](https://ionicthemes.com/tutorials/about/the-complete-guide-to-progressive-web-apps-with-ionic4)
```
导读：Ionic PWA
```

[Ionic Samples](https://github.com/qq283335746/IonicSamples)
```
导读：ionic示例集，包含登录、注册等功能模块。
```
[Installing Ionic V1, Cordova Download, and Dependencies](https://ionicframework.com/docs/v1/guide/installation.html)

[Android Platform Guide --Cordova](https://cordova.apache.org/docs/en/dev/guide/platforms/android/index.html)

[ionic cordova build](https://ionicframework.com/docs/cli/commands/cordova-build)

[Getting Started With Ionic 4, Angular And .NET Core 3](https://www.c-sharpcorner.com/article/getting-started-with-ionic-framework-angular-and-net-core-3/)

[npm install Error: not found: python2 解决方案](https://blog.csdn.net/liwan09/article/details/106975041)

安装：ionic visual studio code 插件

### Ionic常用命令：
```
npm install -g ionic@latest

ionic v1:
ionic start MyionicApp sidemenu --type=ionic1

npm install -g cordova ionic or npm install -g cordova ionic@3.* (latest:3.9.2)
ionic start helloWorld blank --type=ionic-angular
cd helloWorld
ionic serve

step1：ionic start wms sidemenu --type ionic1
step2：ionic cordova platform add android
step3：ionic cordova build android
step4：ionic cordova build android --prod --release --buildConfig=build.json
使用虚拟机调试：
ionic cordova emulate android --list
ionic cordova emulate android --no-native-run --target Pixel_2_API_28 --verbose

https://ionicframework.com/docs/cli/commands/capacitor-run
ionic capacitor add android
ionic capacitor copy android
ionic capacitor open android
ionic capacitor run android --prod --release
ionic capacitor sync android

build.json：
{
    "android": {
        "release": {
            "keystore": "E:\\AndroidStudioWorkspace\\Keystores\\qq283335746.jks",
            "storePassword": "283335746",
            "alias": "shenzhen",
            "password" : "283335746",
            "keystoreType": "jks"
        }
    }
}

cordova platform add android
cordova build android --release --buildConfig
 
```

### npm问题集锦：
```
npm install出现error MSB3428:Could not load the Visual C++ component VCBuild.exe错误
npm install -g --production windows-build-tools

```

