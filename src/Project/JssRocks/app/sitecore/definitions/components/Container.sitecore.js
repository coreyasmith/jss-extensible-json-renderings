// eslint-disable-next-line no-unused-vars
import { SitecoreIcon } from '@sitecore-jss/sitecore-jss-manifest';

export default function(manifest) {
  manifest.addComponent({
    name: 'Container',
    icon: SitecoreIcon.TruckContainer,
    placeholders: ['jss-container']
  });
}
