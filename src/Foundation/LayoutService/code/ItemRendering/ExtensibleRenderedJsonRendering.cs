using System;
using Sitecore.JavaScriptServices.ViewEngine.ItemRendering;
using Sitecore.Mvc.Presentation;

namespace CoreySmith.Foundation.LayoutService.ItemRendering
{
  public class ExtensibleRenderedJsonRendering : RenderedJsonRendering
  {
    public string RenderingConfigurationName { get; }
    public Rendering Rendering { get; }

    public ExtensibleRenderedJsonRendering(RenderedJsonRendering innerRendering, string renderingConfigurationName, Rendering rendering)
      : base(innerRendering)
    {
      RenderingConfigurationName = renderingConfigurationName ?? throw new ArgumentNullException(nameof(renderingConfigurationName));
      Rendering = rendering ?? throw new ArgumentNullException(nameof(rendering));
    }
  }
}
