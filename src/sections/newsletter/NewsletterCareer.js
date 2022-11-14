// @mui
import { styled, alpha } from '@mui/material/styles';
import { Stack, Button, Container, Typography, FilledInput, InputAdornment } from '@mui/material';
// utils
import cssStyles from '../../utils/cssStyles';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(10, 0),
  ...cssStyles(theme).bgImage({
    url: 'https://zone-assets-api.vercel.app/assets/images/career/career_newsletter.jpg',
    startColor: `${alpha(theme.palette.grey[900], 0.88)}`,
    endColor: `${alpha(theme.palette.grey[900], 0.88)}`,
  }),
}));

// ----------------------------------------------------------------------

export default function NewsletterCareer() {
  return (
    <RootStyle>
      <Container>
        <Stack spacing={3} alignItems="center" sx={{ color: 'common.white', textAlign: 'center' }}>
          <Typography variant="h2">Найдите подходящую работу для вас</Typography>
          <Typography>
            Подпишитесь, чтобы быть в курсе последних и актуальных вакансий
          </Typography>

          <FilledInput
            placeholder="Enter your email"
            endAdornment={
              <InputAdornment position="end">
                <Button
                  size="large"
                  variant="contained"
                  sx={{
                    height: 56,
                    borderTopLeftRadius: 0,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  Подписка
                </Button>
              </InputAdornment>
            }
            sx={{
              p: 0,
              width: 1,
              maxWidth: 560,
              bgcolor: 'common.white',
              '&:hover, &.Mui-focused': {
                bgcolor: 'common.white',
              },
              '& .MuiFilledInput-input': {
                py: '18px',
                '&::placeholder': {
                  color: 'grey.500',
                },
              },
            }}
          />
        </Stack>
      </Container>
    </RootStyle>
  );
}
