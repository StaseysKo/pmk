import PropTypes from 'prop-types';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Stack, Typography, Paper, Avatar, Button, Container, Box } from '@mui/material';
// @routes
import Routes from '../../../routes';
// components
import { Iconify, TextMaxLine } from '../../../components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(1, 0),
  [theme.breakpoints.up('md')]: {
    paddingBottom: theme.spacing(15),
  },
}));

// ----------------------------------------------------------------------

TravelLandingToursByCity.propTypes = {
  tours: PropTypes.array,
};

export default function TravelLandingToursByCity({ tours }) {
  return (
    <RootStyle>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{
            mb: { xs: 8, md: 10 },
            textAlign: { xs: 'center', md: 'unset' },
          }}
        >
          <Stack spacing={3}>
            <Typography variant="h2">Сферы работ</Typography>
            <Typography sx={{ color: 'text.secondary' }}>
              Более 13 лет производим металлоконструкции для различных сфер
            </Typography>
          </Stack>

          <NextLink href={Routes.metal.allServices} passHref>
            <Button
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
              sx={{ display: { xs: 'none', md: 'inline-flex' } }}
            >
              Все сферы
            </Button>
          </NextLink>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gap: 3,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
              lg: 'repeat(4, 1fr)',
            },
          }}
        >
          {tours.map((tour) => (
            <TourItem key={tour.id} tour={tour} />
          ))}
        </Box>

        <Stack
          alignItems="center"
          sx={{
            mt: 8,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <NextLink href={Routes.travel.tours} passHref>
            <Button
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
            >
              View All
            </Button>
          </NextLink>
        </Stack>
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

TourItem.propTypes = {
  tour: PropTypes.shape({
    coverImg: PropTypes.string,
    id: PropTypes.string,
    location: PropTypes.string,
  }),
};

function TourItem({ tour }) {
  const { id, coverImg, location } = tour;

  return (
    <NextLink href={Routes.metal.allServices} passHref>
      <Paper
        variant="outlined"
        sx={{
          p: 3,
          borderRadius: 2,
          cursor: 'pointer',
          bgcolor: 'background.default',
          '&:hover': {
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
      >
        <Stack direction="row" alignItems="center" spacing={2.5}>
          <Avatar src={coverImg} sx={{ width: 64, height: 64 }} />
          <Stack spacing={0.5}>
            <TextMaxLine variant="h6" line={2}>
              {location}
            </TextMaxLine>
            <Typography variant="body3" sx={{ color: 'text.secondary' }}>
              194 Place
            </Typography>
          </Stack>
        </Stack>
      </Paper>
    </NextLink>
  );
}
