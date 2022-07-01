import React from 'react';
import { useTheme } from '@mui/material/styles';

const FirepotLogo = (): JSX.Element => {
  const theme = useTheme();

  return (
<svg width="38" height="38" viewBox="0 0 38 38" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="19" cy="19" r="19" fill="#F7F7F7"/>
<g filter="url(#filter0_b_215_517)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M13.7336 15.9665C12.095 15.9665 10.7667 17.2948 10.7667 18.9333C10.7667 20.5719 12.095 21.9002 13.7336 21.9002C15.3721 21.9002 16.7004 20.5719 16.7004 18.9333C16.7004 17.2948 15.3721 15.9665 13.7336 15.9665ZM7.06689 18.9333C7.06689 15.2514 10.0517 12.2667 13.7336 12.2667C17.4155 12.2667 20.4002 15.2514 20.4002 18.9333C20.4002 22.6152 17.4155 25.6 13.7336 25.6C10.0517 25.6 7.06689 22.6152 7.06689 18.9333Z" fill="url(#paint0_radial_215_517)"/>
</g>
<g filter="url(#filter1_b_215_517)">
<path fill-rule="evenodd" clip-rule="evenodd" d="M24.4001 15.9665C22.7615 15.9665 21.4332 17.2948 21.4332 18.9333C21.4332 20.5719 22.7615 21.9002 24.4001 21.9002C26.0386 21.9002 27.3669 20.5719 27.3669 18.9333C27.3669 17.2948 26.0386 15.9665 24.4001 15.9665ZM17.7334 18.9333C17.7334 15.2514 20.7182 12.2667 24.4001 12.2667C28.082 12.2667 31.0667 15.2514 31.0667 18.9333C31.0667 22.6152 28.082 25.6 24.4001 25.6C20.7182 25.6 17.7334 22.6152 17.7334 18.9333Z" fill="url(#paint1_linear_215_517)" fill-opacity="0.5"/>
</g>
<defs>
<filter id="filter0_b_215_517" x="-34.9331" y="-29.7333" width="97.3335" height="97.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImage" stdDeviation="21"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_215_517"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_215_517" result="shape"/>
</filter>
<filter id="filter1_b_215_517" x="-2.2666" y="-7.73334" width="53.3335" height="53.3333" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
<feFlood flood-opacity="0" result="BackgroundImageFix"/>
<feGaussianBlur in="BackgroundImage" stdDeviation="10"/>
<feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_215_517"/>
<feBlend mode="normal" in="SourceGraphic" in2="effect1_backgroundBlur_215_517" result="shape"/>
</filter>
<radialGradient id="paint0_radial_215_517" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(3.96044 12.4761) rotate(42.8481) scale(20.3761)">
<stop stop-color="#290578"/>
<stop offset="1" stop-color="#05669D"/>
</radialGradient>
<linearGradient id="paint1_linear_215_517" x1="28.6584" y1="12.5459" x2="20.0371" y2="25.1462" gradientUnits="userSpaceOnUse">
<stop stop-color="#72EDFF"/>
<stop offset="1" stop-color="#0070FF"/>
</linearGradient>
</defs>
</svg>

  );
};

export default FirepotLogo;
