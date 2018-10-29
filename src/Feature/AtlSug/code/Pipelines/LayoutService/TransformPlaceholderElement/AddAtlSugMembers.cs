using CoreySmith.Foundation.LayoutService.ItemRendering;
using CoreySmith.Foundation.LayoutService.Pipelines.LayoutService.TransformPlaceholderElement;
using Sitecore.Data.Fields;

namespace CoreySmith.Feature.AtlSug.Pipelines.LayoutService.TransformPlaceholderElement
{
  public class AddAtlSugMembers : TransformPlaceholderElementProcessor
  {
    public override void TransformPlaceholderElement(TransformPlaceholderElementPipelineArgs args)
    {
      if (!(args.Element is ExtensibleRenderedJsonRendering extensibleRendering)) return;
      if (!ShouldAddAtlSugMembers(extensibleRendering)) return;

      args.Result.atlSugMembers = new[]
      {
        "George \"Sitecore George\" Chang",
        "Martin \"Sitecore Artist\" English",
        "Anastasiya \"JavaScript Ninja\" Flynn",
        "Varun \"Too Many Questions\" Nehra",
        "Craig \"From ATL\" Taylor",
        "Amy \"Sitecore Amy\" Winburn"
      };
    }

    private static bool ShouldAddAtlSugMembers(ExtensibleRenderedJsonRendering extensibleRendering)
    {
      var rendering = extensibleRendering.Rendering?.RenderingItem?.InnerItem;
      if (rendering == null) return false;

      var addAtlSugMembersField = (CheckboxField)rendering.Fields[Templates.JsonRendering.Fields.AddAtlSugMembers];
      return addAtlSugMembersField?.Checked ?? false;
    }
  }
}
