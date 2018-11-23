# Extensible JSON Renderings

This is a sample repository to demonstrate how to extend rendering data in both
the mock (disconnected) Layout Service and real Layout Service in [Sitecore
JavaScript Services][1].

Read more details about the inner workings here:
- Connected mode: <https://www.coreysmith.co/jss-extend-connected-layout-service-rendering-data/>
- Disconnected mode: <https://www.coreysmith.co/jss-extend-disconnected-layout-service-rendering-data/>

## Setup

1. Clone this repository.
   - The default clone path is
    `C:\Projects\Sitecore\ExtensibleJsonRenderings`.
2. Install an instance of [Sitecore 9.0 Update-2][2].
   - The default install path is
    `C:\inetpub\wwwroot\extjsonrenderings.localhost`.
   - The default URL is `extjsonrenderings.localhost`.
3. Install [Sitecore JavaScript Services 9.0 Tech Preview 4][3].
4. Copy the following assemblies from the `\bin` folder of your web root into
   the `\lib` folder of your repository:
   - `Sitecore.JavaScriptServices.ViewEngine.dll` (`8.0.0.266`)
   - `Sitecore.LayoutService.dll` (`4.0.0.67`)
5. If you used a clone path, install directory, or URL different than the
   defaults above, open
   [ExtensibleJsonRenderings.sln](ExtensibleJsonRenderings.sln) and modify
   the following files in the `.config` folder:
   - `CoreySmith.Project.Common.Dev.config`
     - Change `sourceFolder` to your repository directory.
   - `CoreySmith.Project.JssRocks.Dev.config`
     - Change `hostName` to the URL you used for your instance.
   - `PublishSettings.targets`
     - Change `publishUrl` to the path of your Sitecore instance.
   - `scjssconfig.json`
     - Change `instancePath` to the path of your Sitecore instance.
     - Change `deployUrl` host name to the host name of your Sitecore instance.
     - Change `layoutServiceHost` to the URL of your Sitecore instance.
6. Navigate to [/src/Project/JssRocks/app](/src/Project/JssRocks/app) and
   deploy the JSS app with `jss deploy files`.
7. Build the solution in Visual Studio.
   - This will publish all code to your instance thanks to
     [Helix Publishing Pipeline][4].
   - Note: you may need to reload the solution and build a second time if you
     get errors about missing assemblies/references when you load Sitecore.
8. Perform a Unicorn sync at `/unicorn.aspx?verb=sync`.
9. Navigate to your site at <http://hostname.localhost.>

[1]: https://jss.sitecore.net
[2]: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/90/Sitecore_Experience_Platform_90_Update2.aspx
[3]: https://dev.sitecore.net/Downloads/Sitecore_JavaScript_Services/90_Tech_Preview/Sitecore_JavaScript_Services_90_Tech_Preview_4.aspx
[4]: https://github.com/richardszalay/helix-publishing-pipeline
