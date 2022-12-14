import PropTypes from 'prop-types';
// icons
import trophyIcon from '@iconify/icons-carbon/trophy';
import dataVis4 from '@iconify/icons-carbon/data-vis-4';
import increaseLevel from '@iconify/icons-carbon/increase-level';
import userCertification from '@iconify/icons-carbon/user-certification';
import directionStraightRight from '@iconify/icons-carbon/direction-straight-right';
// @mui
import { styled, alpha } from '@mui/material/styles';
import { Grid, Box, Container, Typography, Button } from '@mui/material';
// utils
import { fShortenNumber } from '../../../utils/formatNumber';
// components
import { Iconify, CountUpNumber, Image } from '../../../components';

// ----------------------------------------------------------------------

const SUMMARY = [
  { title: 'Сотрудников', total: 150, icon: increaseLevel },
  { title: 'Лет опыта', total: 13, icon: trophyIcon },
  { title: 'Производственных цеха', total: 3, icon: dataVis4 },
  { title: 'Реализованных проектов', total: 1500, icon: userCertification },
];

const COLORS = ['primary', 'secondary', 'warning', 'success'];

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

const IconStyle = styled('div', {
  shouldForwardProp: (prop) => prop !== 'color',
})(({ color, theme }) => ({
  width: 160,
  height: 160,
  margin: 'auto',
  display: 'flex',
  borderRadius: '50%',
  alignItems: 'center',
  position: 'relative',
  justifyContent: 'center',
  color: theme.palette[color].darker,
  border: `dashed 2px ${alpha(theme.palette[color].main, 0.24)}`,
  '&:before': {
    zIndex: 8,
    content: '""',
    borderRadius: '50%',
    position: 'absolute',
    width: 'calc(100% - 48px)',
    height: 'calc(100% - 48px)',
    background: `conic-gradient(from 0deg at 50% 50%, ${theme.palette[color].main} 0deg, ${theme.palette[color].light} 360deg)`,
  },
  '& svg': {
    zIndex: 9,
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAbout() {
  return (
    <RootStyle>
      <Container>
        <Grid container spacing={3} justifyContent="space-between" alignItems="center">
          {/* <Grid
            item
            xs={12}
            md={6}
            lg={5}
            sx={{
              display: { xs: 'none', md: 'block' },
            }}
          >
            <Image
              alt="teams"
              src="https://zone-assets-api.vercel.app/assets/illustrations/illustration_teams.svg"
            />
          </Grid> */}

          <Grid item xs={12} md={6} lg={12} sx={{ textAlign: { xs: 'center', md: 'left' } }}>
            <Typography variant="h2">Уважаемые поставщики!</Typography>
            <Typography sx={{ mt: 3, mb: 5, color: 'text.secondary' }}>
              Рады приветствовать вас на сайте Общества с ограниченной ответственностью «Чистоград ПМК».
              Наша компания уделяет особое внимание организации эффективных закупок материалов, результатом которых являются не только экономия затрат, но и построение надежной и честной системы взаимоотношений с нашими поставщиками.
              <br />
              <br />
              Одной из наших основных задач в области закупок является привлечение новых надежных контрагентов. На этой странице Вы сможете найти необходимую информацию о всех материалах и их видах, которые необходимы в настоящее время для нужд ООО «Чистоград ПМК», а также о условиях, необходимых для реализации партнерских отношений в данном направлении.
              <br></br>
              <br></br>
              Приглашаем всех желающих к плодотворному сотрудничеству.
            </Typography>

            <Button
              variant="outlined"
              color="inherit"
              size="large"
              endIcon={<Iconify icon={directionStraightRight} sx={{ width: 22, height: 22 }} />}
            >
              Стать поставщиком
            </Button>
          </Grid>
        </Grid>

        {/* <Box
          sx={{
            my: { xs: 8, md: 15 },
          }}
        />

        <Box
          sx={{
            textAlign: 'center',
            display: 'grid',
            gap: { xs: 5, md: 8 },
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {SUMMARY.map((value, index) => (
            <BoxItem key={value.title} value={value} index={index} />
          ))}
        </Box> */}
      </Container>
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

BoxItem.propTypes = {
  index: PropTypes.number,
  value: PropTypes.shape({
    icon: PropTypes.any,
    title: PropTypes.string,
    total: PropTypes.number,
  }),
};

function BoxItem({ value, index }) {
  return (
    <div>
      <IconStyle color={COLORS[index]}>
        <Iconify icon={value.icon} sx={{ width: 48, height: 48 }} />
      </IconStyle>
      <Typography variant="h2" sx={{ mt: 2, mb: 1 }}>
        <CountUpNumber
          start={value.total / 5}
          end={value.total}
          formattingFn={(value) => fShortenNumber(value)}
        />
      </Typography>
      <Typography sx={{ color: 'text.secondary' }}>{value.title}</Typography>
    </div>
  );
}
