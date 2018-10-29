using System;
using Sitecore.LayoutService.ItemRendering;
using Sitecore.Pipelines;

namespace CoreySmith.Foundation.LayoutService.Pipelines.LayoutService.TransformPlaceholderElement
{
  public class TransformPlaceholderElementPipelineArgs : PipelineArgs
  {
    public RenderedPlaceholderElement Element { get; set; }
    public string RenderingConfigurationName { get; set; }
    public dynamic Result { get; set; }

    public TransformPlaceholderElementPipelineArgs(RenderedPlaceholderElement element, string renderingConfigurationName, dynamic transformedElement)
    {
      Element = element ?? throw new ArgumentNullException(nameof(element));
      RenderingConfigurationName = renderingConfigurationName ?? throw new ArgumentNullException(nameof(renderingConfigurationName));
      Result = transformedElement ?? throw new ArgumentNullException(nameof(transformedElement));
    }
  }
}
