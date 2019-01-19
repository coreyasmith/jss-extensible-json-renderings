const atlSugMembers = [
  'George "Sitecore George" Chang',
  'Martin "Sitecore Artist" English',
  'Anastasiya "JavaScript Ninja" Flynn',
  'Varun "Too Many Questions" Nehra',
  'Craig "From ATL" Taylor',
  'Amy "Sitecore Amy" Winburn'
];

const addAtlSugMembers = (transformedRendering, currentManifest) => {
  const manifestRendering = currentManifest.renderings.find(
    r => r.name === transformedRendering.componentName
  );
  if (!manifestRendering.addAtlSugMembers) return undefined;

  return {
    ...transformedRendering,
    atlSugMembers: [...atlSugMembers]
  };
};

exports.addAtlSugMembers = addAtlSugMembers;
