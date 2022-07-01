import React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import DiscordLogo from 'svg/raw/SocialLogos/DiscordLogo.svg';
import TwitterLogo from 'svg/raw/SocialLogos/TwitterLogo.svg';
import TelegramLogo from 'svg/raw/SocialLogos/TelegramLogo.svg';
import RedditLogo from 'svg/raw/SocialLogos/RedditLogo.svg';

import Container from 'components/Container';

const mock = [
  DiscordLogo,
  TwitterLogo,
  TelegramLogo,
  RedditLogo,
];

const getSocialUrl = (index: number) => {
  switch(index) {
    case 0: return 'https://discord.com/invite/cyKqQ4VFTh';
    case 1: return 'https://twitter.com/firepotfinance';
    case 2: return 'https://t.me/+HWtQlEPzvVA2NWNh';
    case 3: return 'https://www.reddit.com/r/firepotfinance/';
    default: return 'https://firepot.finance/'
  }
}

const Socials = (): JSX.Element => {
  const theme = useTheme();
  return (
      <Box 
      //paddingY={{ xs: 0, sm: '4rem', md: '8rem' }}
      paddingY={4}
      sx={{ backgroundColor: 'primary.main' }}>
        <Box marginBottom={4}>
          <Typography
           color={'text.secondary'}
            gutterBottom
            align={'center'}
            variant={'h4'}
            fontWeight={700}
          >
            Join Our Community
          </Typography>
          <Typography color={'text.secondary'} align={'center'} variant={'h6'}>
            Get the lastest updates and tell us what you would like to see
          </Typography>
        </Box>
        <Box display="flex" flexWrap="wrap" justifyContent={'center'}>
          {mock.map((item, i) => (
            <Box maxWidth={60} marginRight={4} key={i}>
              <Box
                component="a"
                href={getSocialUrl(i)}
                target='_blank'
                
              >
                <Box
                  component="img"
                  height={1}
                  width={1}
                  src={item}
                  alt="..."
                  sx={{
                    filter:
                      theme.palette.mode === 'dark'
                        ? 'brightness(0) invert(0.7)'
                        : 'none',
                  }}
                />
              </Box>
            </Box>
          ))}
        </Box>
      </Box>
  );
};

export default Socials;
