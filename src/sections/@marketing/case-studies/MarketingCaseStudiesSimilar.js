import PropTypes from 'prop-types';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// next
import NextLink from 'next/link';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Stack, Button, Typography, Box } from '@mui/material';
// routes
import Routes from '../../../routes';
// components
import { Iconify } from '../../../components';
//
import MarketingCaseStudyItem from './MarketingCaseStudyItem';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

MarketingCaseStudiesSimilar.propTypes = {
  caseStudies: PropTypes.array.isRequired,
};

export default function MarketingCaseStudiesSimilar({ caseStudies }) {
  return (
    <RootStyle>
      <Container>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent={{ xs: 'center', md: 'space-between' }}
          sx={{ mb: { xs: 8, md: 6 } }}
        >
          <Typography variant="h3">Другие проекты</Typography>

          <NextLink href={Routes.marketing.caseStudies} passHref>
            <Button
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
              sx={{
                display: { xs: 'none', md: 'inline-flex' },
              }}
            >
              Все проекты
            </Button>
          </NextLink>
        </Stack>

        <Box
          sx={{
            display: 'grid',
            gap: 4,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(3, 1fr)',
            },
          }}
        >
          {caseStudies.map((project) => (
            <MarketingCaseStudyItem key={project.slug} project={project} />
          ))}
        </Box>

        <Stack
          alignItems="center"
          sx={{
            mt: 8,
            display: { xs: 'flex', md: 'none' },
          }}
        >
          <NextLink href={Routes.marketing.caseStudies} passHref>
            <Button
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
            >
              Все проекты
            </Button>
          </NextLink>
        </Stack>
      </Container>
    </RootStyle>
  );
}
