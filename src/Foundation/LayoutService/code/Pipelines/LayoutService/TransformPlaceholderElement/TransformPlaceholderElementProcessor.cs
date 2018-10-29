using System;
using System.Collections.Generic;
using System.Linq;

namespace CoreySmith.Foundation.LayoutService.Pipelines.LayoutService.TransformPlaceholderElement
{
  public abstract class TransformPlaceholderElementProcessor
  {
    public List<string> AllowedConfigurations { get; set; } = new List<string>();

    public void Process(TransformPlaceholderElementPipelineArgs args)
    {
      if (args == null) throw new ArgumentNullException(nameof(args));
      if (args.RenderingConfigurationName == null) throw new ArgumentNullException(args.RenderingConfigurationName);

      if (!IsConfigurationAllowed(args.RenderingConfigurationName)) return;
      TransformPlaceholderElement(args);
    }

    protected virtual bool IsConfigurationAllowed(string configurationName)
    {
      return !AllowedConfigurations.Any() || AllowedConfigurations.Contains(configurationName);
    }

    public abstract void TransformPlaceholderElement(TransformPlaceholderElementPipelineArgs args);
  }
}
