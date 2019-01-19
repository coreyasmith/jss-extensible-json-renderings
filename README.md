# Extensible JSON Renderings

This is a sample repository to demonstrate how to extend rendering data in both
the mock (disconnected) Layout Service and real Layout Service in [Sitecore
JavaScript Services][1].

Read more details about the inner workings here: <https://www.coreysmith.co/jss-extend-layout-service-rendering-data/>

## Setup

1. Clone this repository.
   - The default clone path is
    `C:\Projects\Sitecore\jss-extensible-json-renderings`.
2. Install an instance of [Sitecore 9.1 Initial Release][2].
   - The default install path is
    `C:\inetpub\wwwroot\extjsonrenderings.sitecore`.
   - The default URL is `extjsonrenderings.sitecore`.
3. Install [Sitecore JavaScript Services 11.0.0][3].
4. If you used a clone path, install directory, or URL different than the
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
5. Navigate to [/src/Project/JssRocks/app](/src/Project/JssRocks/app) and
   deploy the JSS app with `jss deploy files`.
6. Build the solution in Visual Studio.
   - This will publish all code to your instance thanks to
     [Helix Publishing Pipeline][4].
   - Note: you may need to reload the solution and build a second time if you
     get errors about missing assemblies/references when you load Sitecore.
7. Perform a Unicorn sync at `/unicorn.aspx?verb=sync`.
8. Navigate to your site at <http://hostname.sitecore.>

[1]: https://jss.sitecore.net
[2]: https://dev.sitecore.net/Downloads/Sitecore_Experience_Platform/91/Sitecore_Experience_Platform_91_Initial_Release.aspx
[3]: https://dev.sitecore.net/Downloads/Sitecore_JavaScript_Services/110/Sitecore_JavaScript_Services_1100.aspx
[4]: https://github.com/richardszalay/helix-publishing-pipeline
