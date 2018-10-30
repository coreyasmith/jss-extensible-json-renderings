const getRouteRenderings = route => {
  return getRenderingsFromPlaceholders(route.placeholders);
};

const getRenderingsFromPlaceholders = placeholders => {
  var allRenderings = Object.values(placeholders).reduce(
    (renderings, placeholder) => {
      const placeholderRenderings = getRenderingsFromPlaceholder(placeholder);
      return { ...placeholderRenderings, ...renderings };
    },
    {}
  );
  return allRenderings;
};

const getRenderingsFromPlaceholder = placeholder => {
  const allRenderings = placeholder.reduce((renderings, rendering) => {
    renderings[rendering.uid] = rendering;

    if (rendering.placeholders) {
      const nestedRenderings = getRenderingsFromPlaceholders(
        rendering.placeholders
      );
      return { ...nestedRenderings, ...renderings };
    }

    return renderings;
  }, {});
  return allRenderings;
};

exports.getRouteRenderings = getRouteRenderings;
