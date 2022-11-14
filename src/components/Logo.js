import PropTypes from 'prop-types';
import { memo } from 'react';
// next
import NextLink from 'next/link';
// @mui
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';

// ----------------------------------------------------------------------

Logo.propTypes = {
  isSimple: PropTypes.bool,
  onDark: PropTypes.bool,
  sx: PropTypes.object,
};

function Logo({ onDark = false, isSimple = false, sx }) {
  const theme = useTheme();
  const isLight = theme.palette.mode === 'light';

  const PRIMARY_MAIN = theme.palette.primary.main;
  const LIGHT_COLOR = theme.palette.common.white;
  const DARK_COLOR = theme.palette.grey[800];

  return (
    <NextLink href="/" passHref>
      <Box
        sx={{
          width: isSimple ? 64 : 75,
          lineHeight: 0,
          cursor: 'pointer',
          display: 'inline-flex',
          ...sx,
        }}
      >
        {isSimple ? (
          <svg

          >
          </svg>
        ) : (
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="100%"
            height="100%"
            viewBox="0 0 70 50"
          >
          <style>{`
            .st0{fill-rule:evenodd;clip-rule:evenodd;fill:#9B9D9C;}
            .st1{fill-rule:evenodd;clip-rule:evenodd;fill:#EE7E1C;}
          `}</style>
          <g>
            <polygon class="st0" points="14.7,0 14.7,4.3 20.1,4.3 20.1,19.9 6.4,27.8 3.8,23.2 0,25.3 4.8,33.7 4.8,33.7 4.8,33.7 24.4,22.4 
                24.4,22.4 24.4,22.4 24.4,4.3 24.4,4.3 24.4,0 	"/>
            <polygon class="st1" points="38.4,0 38.4,4.3 33.1,4.3 33.1,19.9 46.7,27.8 49.4,23.2 53.1,25.3 48.3,33.7 48.3,33.7 48.3,33.7 
                28.8,22.4 28.8,22.4 28.7,22.4 28.7,4.3 28.7,4.3 28.7,0 	"/>
            <polygon class="st0" points="41.1,45.8 37.3,43.6 40,39 26.5,31.2 12.9,39 15.5,43.6 11.8,45.8 7,37.4 7,37.4 7,37.4 26.6,26.2 
                26.6,26.2 26.6,26.2 42.2,35.3 42.2,35.3 45.9,37.4 	"/>
          </g>  
          </svg>
        )}
      </Box>
    </NextLink>
  );
}

export default memo(Logo);
