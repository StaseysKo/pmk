import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';

import { Typography, Stack, Container, Box, Button } from '@mui/material';
// components
import { SvgIconStyle, Iconify } from '../../../components';

import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';

import NextLink from 'next/link';

// ----------------------------------------------------------------------

const RootStyle = styled(Stack)(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

OurClientsTravel.propTypes = {
  brands: PropTypes.array.isRequired,
};

export default function OurClientsTravel({ brands }) {
  return (
    <RootStyle>
      <Container>
        <Stack
            direction="row"
            alignItems="center"
            justifyContent={{ xs: 'center', md: 'space-between' }}
            sx={{
              mb: { xs: 8, md: 10 },
            }}
          >
            <Typography variant="h2">Наши клиенты</Typography>

            <NextLink href='{Routes.travel.posts}' passHref>
              <Button
                endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
                sx={{ display: { xs: 'none', md: 'inline-flex' } }}
              >
                Портфолио
              </Button>
           </NextLink>
        </Stack>

        <Box
          sx={{
            mt: { xs: 8, md: 15 },
            display: 'grid',
            rowGap: { xs: 4, md: 5 },
            columnGap: 3,
            gridTemplateColumns: {
              xs: 'repeat(2, 1fr)',
              sm: 'repeat(3, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {brands.map((brand) => (
            <SvgIconStyle
              key={brand.id}
              src={brand.image}
              sx={{
                width: 106,
                height: 32,
                color: 'grey.50080',
                mr: { xs: 'auto' },
                ml: { xs: 'auto', md: 'unset' },
              }}
            />
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
