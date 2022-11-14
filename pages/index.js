import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Typography, Stack, Box, Button } from '@mui/material';

import NextLink from 'next/link';

import Routes from '/Users/stasko/Downloads/Zone_JavaScript_v1.4/src/routes.js';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../src/config';
// utils
import { getAllPosts } from '../src/utils/get-mardown/marketing/posts';
import { getAllCaseStudies } from '../src/utils/get-mardown/marketing/case-studies';
// _data
import { _testimonials, _brands, _members, _pricingMarketing } from '../_data/mock';
// layouts
import Layout from '../src/layouts';
// components
import { Page, Iconify } from '../src/components';
// sections
import { NewsletterMarketing } from '../src/sections/newsletter';
import { BlogCareerLatestPosts, BlogMarketingLatestPosts } from '../src/sections/blog';
import { MarketingFreeSEO, MarketingCaseStudiesList } from '../src/sections/@marketing';


import {
  TravelLandingToursByCity,
} from '../src/sections/@travel';

import {
  CareerLangdingConnections,
} from '../src/sections/@career';

import {
  _jobsByCountries, 
} from '../_data/mock';

import {
  _jobsByCategories, 
} from '../_data/mock';

import { useRequest } from '../src/hooks';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

MarketingCaseStudiesPage.propTypes = {
  caseStudies: PropTypes.array,
  posts: PropTypes.array,
};

export default function MarketingCaseStudiesPage({ posts, caseStudies }) {
  const { data: tours = [], error } = useRequest('/api/travel/tours');

  return (
    <Page title="ЧИСТОГРАД ПМК">
      <RootStyle>
        <CareerLangdingConnections countries={_jobsByCountries} />

        <TravelLandingToursByCity tours={tours.slice(0, 8)} />

        <Container>
          <Stack
            spacing={3}
            sx={{
              mt: { xs: 8, md: 1 },
              textAlign: { xs: 'center', md: 'left' },
            }}
          >
            <Typography variant="h2">Наши работы
            </Typography>
            {/* <Typography sx={{ color: 'text.secondary' }}>
              Nullam tincidunt adipiscing enim.
              <br /> Mauris sollicitudin fermentum libero.
            </Typography> */}
          </Stack>
          <MarketingCaseStudiesList caseStudies={caseStudies.slice(0, 6)} />
        </Container>
        <Box sx={{ mt: 7, textAlign: 'center' }}>
          <NextLink href={Routes.travel.tours} passHref>
            <Button size="large" variant="contained">
              Все проекты
            </Button>
          </NextLink>
        </Box>

        <BlogCareerLatestPosts posts={posts.slice(0, 5)} />

        <MarketingFreeSEO />

        <NewsletterMarketing />
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingCaseStudiesPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps() {
  return {
    props: {
      posts: getAllPosts(),
      caseStudies: getAllCaseStudies(),
    },
  };
}
