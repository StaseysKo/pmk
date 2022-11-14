import PropTypes from 'prop-types';
import { serialize } from 'next-mdx-remote/serialize';

import { m } from 'framer-motion';
import { useState } from 'react';
import { varTranHover } from '../../../src/components/animate';

import checkmarkIcon from '@iconify/icons-carbon/checkmark';
// @mui
import { styled } from '@mui/material/styles';
import { Container, Grid, Box, Stack, Typography, Divider } from '@mui/material';
// routes
import Routes from '../../../src/routes';
import calendarIcon from '@iconify/icons-carbon/calendar';
import userIcon from '@iconify/icons-carbon/user';
import locationIcon from '@iconify/icons-carbon/location';
import mobileIcon from '@iconify/icons-carbon/mobile';
import timeIcon from '@iconify/icons-carbon/time';
import translateIcon from '@iconify/icons-carbon/translate';
// utils
import {
  getServiceData,
  getAllServicesSlugs,
  getAllAllServices,
} from '../../../src/utils/get-mardown/metal/all-services';
// config
import { HEADER_MOBILE_HEIGHT, HEADER_DESKTOP_HEIGHT } from '../../../src/config';
// _data
import { _testimonials } from '../../../_data/mock';
// layouts
import Layout from '../../../src/layouts';
// components
import { Page, Image, Markdown, Breadcrumbs, LightboxModal } from '../../../src/components';
// sections
import { NewsletterMarketing } from '../../../src/sections/newsletter';
import { TestimonialsMarketing } from '../../../src/sections/testimonials';
import {
  MarketingFreeSEO,
  MarketingCaseStudySummary,
  MarketingCaseStudyGallery,
  MarketingCaseStudiesSimilar,
} from '../../../src/sections/@metal';

import {
  MarketingServicesHowItWork,
  MarketingContactForm,
  MarketingContactInfo,
} from '../../../src/sections/@marketing';

import { TextIconLabel, Iconify } from '../../../src/components';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  paddingTop: HEADER_MOBILE_HEIGHT,
  [theme.breakpoints.up('md')]: {
    paddingTop: HEADER_DESKTOP_HEIGHT,
  },
}));

// ----------------------------------------------------------------------

MarketingCaseStudyPage.propTypes = {
  allServices: PropTypes.array,
  service: PropTypes.shape({
    content: PropTypes.object,
    frontmatter: PropTypes.shape({
      coverImg: PropTypes.string,
      galleryImgs: PropTypes.array,
      heroImg: PropTypes.string,
      title: PropTypes.string,
      typeOfMetal: PropTypes.string,
      productionTime: PropTypes.string,
      country: PropTypes.string,
      certificate: PropTypes.string,
      materialThickness: PropTypes.string,
      price: PropTypes.string,
      includes: PropTypes.array,
    }),
  }),
};

export default function MarketingCaseStudyPage({ allServices, tour, service }) {



  const { frontmatter, content } = service;
  const { includes, title, coverImg, heroImg, galleryImgs, typeOfMetal, productionTime, country, certificate, materialThickness, price } = frontmatter;

  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleOpenLightbox = (url) => {
    const selectedImage = galleryImgs.findIndex((index) => url === index);

    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

  return (
    <Page
      title={`${title} - ПМК`}
      meta={
        <>
          <meta property="og:image" content={coverImg} />
        </>
      }
    >
      <RootStyle>
        <Container>
          <Breadcrumbs
            sx={{ mb: 5, mt: 5}}
            links={[
              { name: 'Главная', href: '/' },
              { name: 'Все услуги', href: Routes.metal.allServices },
              { name: title },
            ]}
          />
            <Box
              sx={{
                mb: 8,
                display: 'grid',
                gap: 1,
                gridTemplateColumns: {
                  xs: 'repeat(1, 1fr)',
                  md: 'repeat(2, 1fr)',
                },
              }}
            >
              <PhotoItem photo={galleryImgs[0]} onOpenLightbox={() => handleOpenLightbox(galleryImgs[0])} />

              <Box
                sx={{
                  display: 'grid',
                  gap: 1,
                  gridTemplateColumns: 'repeat(2, 1fr)',
                }}
              >
              { galleryImgs.slice(1, 5).map((photo) => (
                  <PhotoItem key={photo} photo={photo} onOpenLightbox={() => handleOpenLightbox(photo)} />
                ))}
              </Box>
            </Box>

            <LightboxModal
              images={galleryImgs}
              mainSrc={galleryImgs[selectedImage]}
              photoIndex={selectedImage}
              setPhotoIndex={setSelectedImage}
              isOpen={openLightbox}
              onCloseRequest={() => setOpenLightbox(false)}
            />

          <Grid
            container
            spacing={{ md: 8 }}
            direction={{ md: 'row-reverse' }}
            sx={{
              pb: { xs: 10, md: 15 },
            }}
          >
            <Grid item xs={12} md={4}>
              <MarketingCaseStudySummary frontmatter={frontmatter} />
            </Grid>
            <Grid item xs={12} md={8}>
            <section>
                <Typography variant="h3" sx={{ mb: 3 }}>
                  {title}
                </Typography>
                <Divider sx={{ borderStyle: 'dashed', my: 5 }} />
                <Box
                  sx={{
                    my: 5,
                    display: 'grid',
                    rowGap: 2.5,
                    columnGap: 3,
                    gridTemplateColumns: {
                      xs: 'repeat(1, 1fr)',
                      sm: 'repeat(2, 1fr)',
                    },
                  }}
                >
                 <OverviewItem
                    icon={<Iconify icon={calendarIcon} />}
                    label="Вид металла"
                    text={typeOfMetal}
                  />
                  <OverviewItem
                    icon={<Iconify icon={userIcon} />}
                    label="Толщина материала"
                    text={materialThickness}
                  />
                  <OverviewItem icon={<Iconify icon={locationIcon} />} label="Срок изготовления" text={productionTime} />
                  <OverviewItem
                    icon={<Iconify icon={mobileIcon} />}
                    label="Стоимость"
                    text={price}
                  />
                  <OverviewItem icon={<Iconify icon={timeIcon} />}  label="Наличие сертификата" text={certificate} />
                  <OverviewItem
                    icon={<Iconify icon={translateIcon} />}
                    label="Страна производитель"
                    text={country}
                  />
                </Box>
                <Divider sx={{ borderStyle: 'dashed', my: 5 }} />
            </section>
              <Typography variant="h4" paragraph>
                  Описание услуги
              </Typography>
              <Markdown content={content} />
                <Typography variant="h4" paragraph sx={{ my: 5 }}>
                  Преимущества
                </Typography>
              <section>
                <Box
                  sx={{
                    display: 'grid',
                    rowGap: 2,
                    columnGap: 3,
                    gridTemplateColumns: {
                      xs: 'repeat(1, 1fr)',
                      sm: 'repeat(2, 1fr)',
                    },
                  }}
                >
                  {includes.map((option) => (
                    <TextIconLabel
                      key={option.label}
                      icon={
                        <Iconify
                          icon={checkmarkIcon}
                          sx={{
                            mr: 2,
                            width: 20,
                            height: 20,
                            color: 'primary.main',
                            ...(!option.enabled && { color: 'currentColor' }),
                          }}
                        />
                      }
                      value={option.label}
                      sx={{
                        ...(!option.enabled && { color: 'text.disabled' }),
                      }}
                    />
                  ))}
                </Box>
              </section>
                <Typography variant="h4" paragraph sx={{ my: 5 }}>
                  Этапы работы
                </Typography>
              <MarketingServicesHowItWork />
              {/* <MarketingCaseStudyGallery images={galleryImgs} /> */}
            </Grid>
          </Grid>
        </Container>

        {/* <Container sx={{ py: { xs: 8, md: 10 } }}>

            <Grid item xs={12} md={6} lg={6}>
              <Typography variant="h2" sx={{ mb: 5 }}>
                Ready To Get Started?
              </Typography>
              <MarketingContactForm />
            </Grid>
        </Container> */}

        {/* <TestimonialsMarketing testimonials={_testimonials} /> */}

        {/* <MarketingCaseStudiesSimilar allServices={allServices.slice(0, 3)} /> */}

        <MarketingFreeSEO />

        {/* <NewsletterMarketing /> */}
      </RootStyle>
    </Page>
  );
}

// ----------------------------------------------------------------------

MarketingCaseStudyPage.getLayout = function getLayout(page) {
  return <Layout>{page}</Layout>;
};

// ----------------------------------------------------------------------

export async function getStaticProps({ params }) {
  const service = getServiceData(params.slugTwo);

  return {
    props: {
      allServices: getAllAllServices(),
      service: {
        ...service,
        content: await serialize(service.content),
      },
    },
  };
}

export async function getStaticPaths() {
  const files = getAllServicesSlugs();

  return {
    paths: files,
    fallback: false,
  };
}


OverviewItem.propTypes = {
  icon: PropTypes.any,
  label: PropTypes.string,
  text: PropTypes.string,
};

function OverviewItem({ icon, label, text = '-' }) {
  return (
    <TextIconLabel
      spacing={1.5}
      alignItems="flex-start"
      icon={icon}
      value={
        <Stack spacing={0.5}>
          <Typography variant="body2">{label}</Typography>
          <Typography sx={{ color: 'text.secondary' }}>{text}</Typography>
        </Stack>
      }
      sx={{ '& svg': { width: 24, height: 24 } }}
    />
  );
}

PhotoItem.propTypes = {
  onOpenLightbox: PropTypes.func,
  photo: PropTypes.string,
};

function PhotoItem({ photo, onOpenLightbox }) {
  return (
    <m.div
      whileHover="hover"
      variants={{
        hover: { opacity: 0.8 },
      }}
      transition={varTranHover()}
    >
      <Image
        alt="photo"
        src={photo}
        ratio="1/1"
        onClick={onOpenLightbox}
        sx={{ borderRadius: 2, cursor: 'pointer' }}
      />
    </m.div>
  );
}