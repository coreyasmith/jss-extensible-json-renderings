using System;
using CoreySmith.Foundation.LayoutService.ItemRendering;
using CoreySmith.Foundation.LayoutService.Pipelines.LayoutService.TransformPlaceholderElement;
using Sitecore.Abstractions;
using Sitecore.JavaScriptServices.ViewEngine.LayoutService;
using Sitecore.LayoutService.ItemRendering;

namespace CoreySmith.Foundation.LayoutService.Serialization
{
  public class PipelinePlaceholderTransformer : PlaceholderTransformer
  {
    private const string GroupName = "layoutService";
    private const string PipelineName = "transformPlaceholderElement";

    private readonly BaseCorePipelineManager _pipelineManager;

    public PipelinePlaceholderTransformer(BaseCorePipelineManager pipelineManager)
    {
      _pipelineManager = pipelineManager ?? throw new ArgumentNullException(nameof(pipelineManager));
    }

    public override object TransformPlaceholderElement(RenderedPlaceholderElement element)
    {
      var transformedElement = base.TransformPlaceholderElement(element);
      var renderingConfigurationName = GetRenderingConfigurationName(element);

      var args = new TransformPlaceholderElementPipelineArgs(element, renderingConfigurationName, transformedElement);
      _pipelineManager.Run(PipelineName, args, GroupName);
      return args.Result;
    }

    private static string GetRenderingConfigurationName(RenderedPlaceholderElement element)
    {
      return (element as ExtensibleRenderedJsonRendering)?.RenderingConfigurationName ?? string.Empty;
    }
  }
}
