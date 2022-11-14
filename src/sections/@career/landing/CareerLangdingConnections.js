import PropTypes from 'prop-types';
import { useRef } from 'react';
import Slider from 'react-slick';
import { m } from 'framer-motion';
// next
import NextLink from 'next/link';
// icons
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled, useTheme } from '@mui/material/styles';
import { Box, Grid, Container, Typography, Stack, Card, Button } from '@mui/material';
// routes
import Routes from '../../../routes';
// hooks
import { useBoundingClientRect } from '../../../hooks';
// components
import { CarouselArrows, Image, Iconify, SvgIconStyle } from '../../../components';
import { varHover, varTranHover } from '../../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  overflow: 'hidden',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    position: 'relative',
    padding: theme.spacing(15, 0),
  },
}));

const ContainerStyle = styled(Container)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    left: 0,
    right: 0,
    marginBottom: 0,
    position: 'absolute',
    height: 'calc(100% - 320px)',
  },
}));

const CarouselArrowsStyle = styled(CarouselArrows)(({ theme }) => ({
  position: 'unset',
  justifyContent: 'center',
  '& button': {
    borderRadius: '50%',
    border: `solid 1px ${theme.palette.divider}`,
  },
}));

// ----------------------------------------------------------------------

CareerLangdingConnections.propTypes = {
  countries: PropTypes.array.isRequired,
};

export default function CareerLangdingConnections({ countries }) {
  const theme = useTheme();

  const carouselRef = useRef(null);
  const containerRef = useRef(null);
  const container = useBoundingClientRect(containerRef);

  const offsetLeft = container?.left;

  const carouselSettings = {
    arrows: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    rtl: Boolean(theme.direction === 'rtl'),
    responsive: [
      {
        breakpoint: theme.breakpoints.values.xl,
        settings: { slidesToShow: 3 },
      },
      {
        breakpoint: theme.breakpoints.values.lg,
        settings: { slidesToShow: 2 },
      },
      {
        breakpoint: theme.breakpoints.values.sm,
        settings: { slidesToShow: 1 },
      },
    ],
  };

  const handlePrevious = () => {
    carouselRef.current?.slickPrev();
  };

  const handleNext = () => {
    carouselRef.current?.slickNext();
  };

  return (
    <RootStyle>
      <ContainerStyle>
        <SvgIconStyle
          src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_map.svg"
          sx={{
            top: -99,
            left: -64,
            width: 780,
            height: 646,
            opacity: 0.34,
            position: 'absolute',
            color: 'text.disabled',
            display: { xs: 'none', md: 'block' },
          }}
        />

        <Grid container spacing={12} justifyContent="space-between">
          <Grid item xs={12} md={4}>
            <Stack
              alignItems={{ xs: 'center', md: 'flex-start' }}
              sx={{
                pt: { md: 0 },
                textAlign: { xs: 'center', md: 'unset' },
              }}
            >
              <Typography variant="h2">Производство изделий из металла</Typography>
              <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
                Проверенный исполнитель в более чем 18 сферах с 2013 года. Изделия, сооружения, высоконагруженные конструкции.
              </Typography>
              <NextLink href={Routes.metal.allServices} passHref>
                <Button
                  size="large"
                  variant="contained"
                  endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
                >
                  Все услуги
                </Button>
              </NextLink>
            </Stack>
          </Grid>

          <Grid item xs={12} md={7}>
            <Box ref={containerRef} />
          </Grid>
        </Grid>
      </ContainerStyle>

      <Box
        sx={{
          pl: `${offsetLeft}px`,
          width: { md: `calc(100% + 120px)` },
        }}
      >
        <Slider ref={carouselRef} {...carouselSettings}>
          {countries.map((fullService) => (
            <Box
              key={fullService.id}
              sx={{
                ml: '-1px',
                py: 0,
                pr: { xs: 2, md: 4 },
                pl: { xs: 2, md: 0 },
                color: 'common.white',
              }}
            >
              <JobByCountryItem key={fullService} fullService={fullService} />
            </Box>
          ))}
        </Slider>

        <CarouselArrowsStyle onNext={handleNext} onPrevious={handlePrevious} />
      </Box>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

JobByCountryItem.propTypes = {
  country: PropTypes.shape({
    servicesImg: PropTypes.string,
    location: PropTypes.string,
    totalJobs: PropTypes.number,
  }),
};

function JobByCountryItem({ fullService }) {
  const { id, location, servicesImg, totalJobs, slug, slugTwo } = fullService;
  return (
    <NextLink as={Routes.metal.service(slugTwo)} href={Routes.metal.service('[slugTwo]')} passHref>
      {/* анимация при наведении */}
      <Card
        component={m.div}
        whileHover="hover"
        sx={{
          cursor: 'pointer',
          '&:hover': {
            boxShadow: (theme) => theme.customShadows.z24,
          },
        }}
      >
        {/* изображение */}
        <Box sx={{ overflow: 'hidden' }}>
          <m.div variants={varHover(1.1)} transition={varTranHover()}>
            <Image src={servicesImg} alt="cover" ratio="3/4" />
          </m.div>
        </Box>
        {/* заголовок и подзаголовок */}
        <Stack spacing={1} sx={{ textAlign: 'center', p: 2.5 }}>
          <Typography variant="h5">{location}</Typography>
          <Typography variant="body3" sx={{ color: 'text.disabled' }}>
            {totalJobs} Проект
          </Typography>
        </Stack>
      </Card>
    </NextLink>
  );
}
