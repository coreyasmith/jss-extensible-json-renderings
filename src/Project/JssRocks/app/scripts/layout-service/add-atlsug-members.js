const atlSugMembers = [
  'George "Sitecore George" Chang',
  'Martin "Sitecore Artist" English',
  'Anastasiya "JavaScript Ninja" Flynn',
  'Varun "Too Many Questions" Nehra',
  'Craig "From ATL" Taylor',
  'Amy "Sitecore Amy" Winburn'
];

const applicableRenderings = ["ContentBlock"];

const addAtlSugMembers = (routeRenderings, rawRouteRenderings) => {
  const atlSugMemberRenderings = applicableRenderings.map(r => r.toLowerCase());
  const addAtlSugRenderingIds = rawRouteRenderings
    .filter(r => atlSugMemberRenderings.includes(r.renderingName.toLowerCase()))
    .map(r => r.uid);

  addAtlSugRenderingIds.forEach(renderingId => {
    routeRenderings[renderingId].atlSugMembers = atlSugMembers;
  });
};

exports.addAtlSugMembers = addAtlSugMembers;
