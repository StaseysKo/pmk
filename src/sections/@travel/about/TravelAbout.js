// @mui
import { Grid, Container, Typography, Box, Button } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// _data
import _mock from '../../../../_data/mock';
// components
import { Image, CountUpNumber, Iconify } from '../../../components';

import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';


// ----------------------------------------------------------------------

const IMAGES = [...Array(4)].map((_, index) => _mock.image.travel(index + 2));

const SUMMARY = [
  { name: 'Сотрудников', number: 140 },
  { name: 'Лет опыта', number: 13 },
  { name: 'Производственных цеха', number: 3 },
  { name: 'Реализованных проекта', number: 1500 },
];

// ----------------------------------------------------------------------

export default function TravelAbout() {
  return (
    <Container>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{
          py: { xs: 8, md: 10 },
        }}
      >
        <Grid item xs={12} md={6} sx={{ textAlign: 'center' }}>
          <Typography variant="h1" sx={{ mb: 3 }}>
            О компании
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            Мы проектируем и производим промышленные металлоконструкции и металлоизделия для основных сфер жизнедеятельности города и его населения. 
          </Typography>
        </Grid>
      </Grid>

      <Grid container spacing={3}>
        {IMAGES.map((img, index) => (
          <Grid
            key={img}
            item
            xs={12}
            sm={6}
            md={index === 0 ? 6 : 2}
            sx={{
              ...((index === 1 || index === 2 || index === 3) && {
                display: { xs: 'none', sm: 'block' },
              }),
            }}
          >
            <Image alt={img} src={img} sx={{ height: 350, borderRadius: 2 }} />
          </Grid>
        ))}
      </Grid>

      <Box
        sx={{
          mt: { xs: 8, md: 10 },
          mb: { xs: 8, md: 15 },
          textAlign: 'center',
          display: 'grid',
          rowGap: 5,
          columnGap: 3,
          gridTemplateColumns: {
            xs: 'repeat(2, 1fr)',
            md: 'repeat(4, 1fr)',
          },
        }}
      >
        {SUMMARY.map((value) => (
          <div key={value.name}>
            <Typography variant="h2" gutterBottom>
              <CountUpNumber
                start={value.number / 5}
                end={value.number}
                formattingFn={(value) => fShortenNumber(value)}
              />

              <Typography
                variant="h4"
                component="span"
                sx={{ verticalAlign: 'top', ml: 0.5, color: 'primary.main' }}
              >
                +
              </Typography>
            </Typography>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              {value.name}
            </Typography>
          </div>
        ))}
      </Box>

      <Grid
        container
        spacing={{ xs: 5, md: 3 }}
        justifyContent="space-between"
        sx={{ mb: 5, textAlign: { xs: 'center', md: 'left' } }}
      >
        <Grid item xs={12} md={6} lg={5}>
          <Box
            sx={{
              mb: 2,
              width: 24,
              height: 3,
              borderRadius: 3,
              bgcolor: 'primary.main',
              mx: { xs: 'auto', md: 0 },
            }}
          />
          <Typography variant="h3">
            Работаем с муниципальными организациями, малым, средним и крупным бизнесом в Калининграде и области
          </Typography>
        </Grid>

        <Grid item xs={12} md={6} lg={6}>
          <Typography variant="h4" paragraph>
            Производственная структура
          </Typography>
          <Typography sx={{ color: 'text.secondary' }}>
            За 13 лет работы  нам удалось выстроить оптимальную производственную структуру 
            для своевременного и качественного удовлетворения потребностей заказчиков из различных сфер.
            <br />
            <br />
            Начиная от систем вентиляции для ресторанов, кафе, баров и заканчивая проектами для городского благоустройства, промышленными сооружениями и проектированием технически-сложных металлоконструкций.
          </Typography>
          <br />
          <Button
            href="/metal/all-services"
            variant="outlined"
            color="inherit"
            size="large"
            endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
          >
            Наши услуги
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}
