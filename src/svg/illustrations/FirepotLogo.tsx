import React from 'react';
import { useTheme } from '@mui/material/styles';

const FirepotLogo = (): JSX.Element => {
  const theme = useTheme();

  return (
<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_225_111)">
<path d="M38 19C38 29.4934 29.4934 38 19 38C8.50659 38 0 29.4934 0 19C0 8.50659 8.50659 0 19 0C29.4934 0 38 8.50659 38 19Z" fill="white"/>
<path d="M7.12856 16.5812C7.59752 20.5877 7.29767 24.2758 5.29991 26.9687L9.6079 28.375C11.9603 25.198 11.9989 20.8868 11.533 16.4458L7.12856 16.5812ZM28.1884 11.3672C27.8999 14.6549 26.9439 19.0816 25.9469 22L29.9 22.6978C31.0333 19.8906 32.236 15.729 33.1787 11.9924L28.1884 11.3672ZM16.5035 7.60477L14.2723 8.14952L16.8877 18.8618C18.1371 23.9791 17.0373 33.0318 7.62857 39.4861C8.72929 40.1211 10.5958 41.509 11.3699 42.296C18.6641 36.8641 20.8158 29.2897 20.893 25.5836C22.6788 28.7264 28.5065 34.5695 37.5611 35.9014C37.8875 34.5565 38.7671 32.4982 39.469 31.3508C27.8013 30.0423 22.6422 22.9153 21.3761 17.7298L18.7691 7.05164L16.5035 7.60477Z" fill="#09103C"/>
</g>
<defs>
<clipPath id="clip0_225_111">
<rect width="38" height="38" fill="white"/>
</clipPath>
</defs>
</svg>
  );
};

export default FirepotLogo;