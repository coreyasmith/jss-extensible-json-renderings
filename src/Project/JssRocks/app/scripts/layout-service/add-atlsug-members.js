const atlSugMembers = [
  'George "Sitecore George" Chang',
  'Martin "Sitecore Artist" English',
  'Anastasiya "JavaScript Ninja" Flynn',
  'Varun "Too Many Questions" Nehra',
  'Craig "From ATL" Taylor',
  'Amy "Sitecore Amy" Winburn'
];

const applicableRenderings = ["ContentBlock"];

const addAtlSugMembers = (transformedRendering, rawRendering) => {
  if (!applicableRenderings.includes(rawRendering.renderingName))
    return undefined;

  return {
    ...transformedRendering,
    atlSugMembers: [...atlSugMembers]
  };
};

exports.addAtlSugMembers = addAtlSugMembers;
