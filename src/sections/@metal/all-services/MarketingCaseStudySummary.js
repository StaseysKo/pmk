import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Divider, Stack, Button } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
// components 
import { SocialsButton } from '../../../components';
import { Icon } from '@iconify/react';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(5),
  backgroundColor: theme.palette.background.neutral,
  borderRadius: Number(theme.shape.borderRadius) * 2,
}));

// ----------------------------------------------------------------------

MarketingCaseStudySummary.propTypes = {
  frontmatter: PropTypes.shape({
    category: PropTypes.string,
    createdAt: PropTypes.string,
    description: PropTypes.string,
    socialLinks: PropTypes.object,
    title: PropTypes.string,
    website: PropTypes.string,
    email: PropTypes.string,
    phone: PropTypes.string,
  }),
};

export default function MarketingCaseStudySummary({ frontmatter }) {
  const { title, description, category, website, createdAt, socialLinks, email, phone } = frontmatter;

  return (
    <RootStyle>
      <Stack spacing={3}>
        <Stack spacing={2}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            описание услуги
          </Typography>
          <Typography variant="body2">{description}</Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack spacing={1}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Менеджер направления
          </Typography>
          <Typography variant="body2">{website}</Typography>

          <Typography variant="overline" sx={{ color: 'text.disabled', pt: 1 }}>
            Контактный телефон:
          </Typography>
          <Typography variant="body2" sx={{ pb: 1 }}>
            {phone}
          </Typography>

          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Контактная почта:
          </Typography>
          <Typography variant="body2">{email}</Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack direction="row" alignItems="center" spacing={0.5}>
          <Typography variant="subtitle2">Написать:</Typography>
          <SocialsButton initialColor links={socialLinks} />
        </Stack>
        <Button color="inherit" variant="outlined" size="large">
          Оставить заявку
        </Button>
      </Stack>
    </RootStyle>
  );
}
