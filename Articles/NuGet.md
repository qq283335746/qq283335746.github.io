# .Net开发之NuGet

一、使用Visual Studio生成自动打包
```
在解决方案，打开编辑.csproj文件：
<PropertyGroup>
    <PackageId>xxx.xxx</PackageId>
    <Version>1.0.0</Version>
    <Authors>yibi chen</Authors>
    <Company>yibi chen</Company>
    <Description>your project descr</Description>
    <GeneratePackageOnBuild>true</GeneratePackageOnBuild>
    <CopyLocalLockFileAssemblies>true</CopyLocalLockFileAssemblies>
    <IncludeSymbols>true</IncludeSymbols>
    <EmbedAllSources>true</EmbedAllSources>
    <SymbolPackageFormat>snupkg</SymbolPackageFormat>
    <GenerateDocumentationFile>true</GenerateDocumentationFile>
</PropertyGroup>
```

二、相关链接

[承载自己的 NuGet 源](https://docs.microsoft.com/zh-cn/nuget/hosting-packages/overview)

[网络](https://docs.microsoft.com/zh-cn/windows-server/networking/networking)