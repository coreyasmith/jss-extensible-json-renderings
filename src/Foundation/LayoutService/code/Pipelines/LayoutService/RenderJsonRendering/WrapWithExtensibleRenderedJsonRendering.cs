using System;
using CoreySmith.Foundation.LayoutService.ItemRendering;
using Sitecore.JavaScriptServices.ViewEngine.ItemRendering;
using Sitecore.LayoutService.Configuration;
using Sitecore.LayoutService.Presentation.Pipelines.RenderJsonRendering;

namespace CoreySmith.Foundation.LayoutService.Pipelines.LayoutService.RenderJsonRendering
{
  public class WrapWithExtensibleRenderedJsonRendering : BaseRenderJsonRendering
  {
    public WrapWithExtensibleRenderedJsonRendering(IConfiguration configuration)
      : base(configuration)
    {
    }

    protected override void SetResult(RenderJsonRenderingArgs args)
    {
      if (args == null) throw new ArgumentNullException(nameof(args));
      if (args.RenderingConfiguration == null) throw new ArgumentNullException(nameof(args.RenderingConfiguration));

      if (!(args.Result is RenderedJsonRendering jssRenderedJsonRendering)) return;
      args.Result = new ExtensibleRenderedJsonRendering(jssRenderedJsonRendering, args.RenderingConfiguration.Name, args.Rendering);
    }
  }
}
