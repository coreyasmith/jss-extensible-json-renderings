using CoreySmith.Foundation.LayoutService.Serialization;
using Microsoft.Extensions.DependencyInjection;
using Sitecore.DependencyInjection;
using Sitecore.JavaScriptServices.ViewEngine.LayoutService;

namespace CoreySmith.Foundation.LayoutService
{
  public class LayoutServiceConfigurator : IServicesConfigurator
  {
    public void Configure(IServiceCollection serviceCollection)
    {
      serviceCollection.AddTransient<IPlaceholderTransformer, PipelinePlaceholderTransformer>();
    }
  }
}
