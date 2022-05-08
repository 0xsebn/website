import React from 'react';
import { useTheme } from '@mui/material/styles';

const HeroBG = (): JSX.Element => {
  const theme = useTheme();

  return (
<svg width="958" height="746" viewBox="0 0 958 746" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect y="-3" width="1510.21" height="1886" fill="url(#paint0_radial_227_112)"/>
<path d="M585.835 377.064C588.508 399.896 586.799 420.914 575.414 436.26L599.964 444.274C613.37 426.169 613.59 401.601 610.935 376.292L585.835 377.064ZM705.85 347.351C704.206 366.087 698.757 391.313 693.076 407.945L715.603 411.921C722.062 395.924 728.915 372.208 734.288 350.914L705.85 347.351ZM639.261 325.91L626.545 329.014L641.45 390.061C648.57 419.223 642.303 470.812 588.685 507.593C594.957 511.211 605.594 519.121 610.006 523.606C651.573 492.651 663.835 449.486 664.275 428.366C674.452 446.276 707.662 479.575 759.262 487.165C761.122 479.501 766.135 467.771 770.135 461.232C703.643 453.775 674.243 413.161 667.028 383.61L652.171 322.758L639.261 325.91Z" fill="#09103C" fill-opacity="0.15"/>
<defs>
<radialGradient id="paint0_radial_227_112" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(755.105 940.001) rotate(90) scale(943.001 755.105)">
<stop stop-color="#FFBE09"/>
<stop offset="1" stop-color="#372511" stop-opacity="0"/>
</radialGradient>
</defs>
</svg>

  );
};

export default HeroBG;
