// @mui
import { styled } from '@mui/material/styles';
import { Typography, Container, Box } from '@mui/material';
// components
import { SvgIconStyle } from '../../../components';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    title: 'Про цену',
    description: 'Не включаем в стоимость работу посредников, поэтому Вы не переплатите.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_agreement.svg',
  },
  {
    title: 'Про вызов',
    description: 'Воплотим в жизнь любой проект и Вашу идею нестандартных металлоизделий.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_transparency.svg',
  },
  {
    title: 'Про сотрудников',
    description: 'Мы ежегодно повышаем квалификацию и тестируем сотрудников, поэтому доверяем им сложные процессы.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_reputation.svg',
  },
  {
    title: 'Про репутацию',
    description: 'Мы уверены в качестве изделий, которые производят наши сотрудники, поэтому гарантируем идеальную сохранность работ.',
    icon: 'https://zone-assets-api.vercel.app/assets/icons/ic_popularity.svg',
  },
];

const RootStyle = styled('div')(({ theme }) => ({
  textAlign: 'center',
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    padding: theme.spacing(15, 0),
  },
}));

// ----------------------------------------------------------------------

export default function MarketingAboutCoreValues() {
  return (
    <RootStyle>
      <Container>
        <Typography
          variant="h2"
          sx={{
            mb: { xs: 8, md: 10 },
          }}
        >
          Принципы работы
        </Typography>

        <Box
          sx={{
            display: 'grid',
            gap: 8,
            gridTemplateColumns: {
              xs: 'repeat(1, 1fr)',
              sm: 'repeat(2, 1fr)',
              md: 'repeat(4, 1fr)',
            },
          }}
        >
          {CORE_VALUES.map((value) => (
            <div key={value.title}>
              <SvgIconStyle
                src={value.icon}
                sx={{ width: 64, height: 64, mx: 'auto', color: 'primary.main' }}
              />
              <Typography variant="h5" sx={{ mt: 5, mb: 2 }}>
                {value.title}
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}> {value.description} </Typography>
            </div>
          ))}
        </Box>
      </Container>
    </RootStyle>
  );
}
