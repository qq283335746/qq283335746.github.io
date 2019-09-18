# Xamarin


[Xamarin 文档](https://docs.microsoft.com/zh-cn/xamarin/)

[Xamarin Free](https://dotnet.microsoft.com/apps/xamarin)

[Xamarin社区博客](https://devblogs.microsoft.com/xamarin)

[xamarin github](https://github.com/xamarin)

[Xamarin.Forms官方示例](https://docs.microsoft.com/zh-cn/samples/browse/?products=xamarin&term=Xamarin.Forms)

[《使用 Xamarin.Forms 的企业应用程序模式》电子书](https://docs.microsoft.com/zh-cn/xamarin/xamarin-forms/enterprise-application-patterns/)

[Repeat Alarm Example In Android Using AlarmManager](https://www.stacktips.com/tutorials/android/repeat-alarm-example-in-android)

[Android Alarm Clock Tutorial](https://javapapers.com/android/android-alarm-clock-tutorial/)

[Backgrounding with Xamarin.Forms](https://robgibbens.com/backgrounding-with-xamarin-forms/)

Xamarin.Forms优秀插件
```
Plugin.MediaManager.Forms：
https://github.com/martijn00/XamarinMediaManager

Xamarin.Plugin.FilePicker：

```

Visual Studio 2019 开发移动应用（Xamarin）
```
环境搭建：
1、自定义安装：下载并安装android studio，指定android sdk安装至E:/Android/sdk目录下，安装android sdk时记得勾选安装虚拟机。
2、vs2019=>工具=》选项=》xamarin设置android sdk路径为E:/Android/sdk
3、vs2019使用虚拟机运行项目，如果缺失安装会提示，按提示安装即可。
```

问题记录：
```
使用虚拟机运行时报错：找不到 HAXM 安装程序: C:\Program Files (x86)\Android\android-sdk\extras\intel\Hardware_Accelerated_Execution_Manager\silent_install.bat
解决方法：
在vs2019找到“打开android sdk管理器”，勾选“intel x86 emulator accelerator (haxm installer)”并安装即可。

PANIC: Missing emulator engine program for 'x86' CPU.
解决方法：
打开路径：C:\Program Files (x86)\Android\android-sdk，将emulator目录改为tools即可。
```