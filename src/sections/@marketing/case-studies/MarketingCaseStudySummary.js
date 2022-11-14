import PropTypes from 'prop-types';
// @mui
import { styled } from '@mui/material/styles';
import { Typography, Divider, Stack } from '@mui/material';
// utils
import { fDate } from '../../../utils/formatTime';
// components 
import { SocialsButton } from '../../../components';

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
    workStartDate: PropTypes.string,
    workСompletionDate: PropTypes.string,
    description: PropTypes.string,
    socialLinks: PropTypes.object,
    title: PropTypes.string,
    website: PropTypes.string,
    сustomer: PropTypes.string,
    objectOfWork: PropTypes.string,
    typeOfMetal: PropTypes.string,
    leadEngineer: PropTypes.string,
    foreman: PropTypes.string,
    projectManager: PropTypes.string,
  }),
};

export default function MarketingCaseStudySummary({ frontmatter }) {
  const { title, description, category, website, createdAt, workСompletionDate, workStartDate, сustomer, objectOfWork, typeOfMetal, leadEngineer, foreman, projectManager, socialLinks } = frontmatter;

  return (
    <RootStyle>
      <Stack spacing={1}>
        
        <Stack spacing={1}>
          <Typography variant="h4">{title}</Typography>
        </Stack>

        <Divider sx={{ pb: 2, borderStyle: 'dashed' }} />

        <Stack spacing={1}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Дата начала работ
          </Typography>
          <Typography variant="body2">{workStartDate}</Typography>
          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled' }}>
            Работы выполнены за
          </Typography>
          <Typography variant="body2">{workСompletionDate}</Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack spacing={1}>
          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled' }}>
            Заказчик
          </Typography>
          <Typography variant="body2">{сustomer}</Typography>
          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled'}}>
            Объект
          </Typography>
          <Typography variant="body2">
            {objectOfWork}
          </Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack spacing={1}>
          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled' }}>
            Курирующий менеджер
          </Typography>
          <Typography variant="body2">{projectManager}</Typography>
          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled'}}>
            Ведущий инженер
          </Typography>
          <Typography variant="body2">
            {leadEngineer}
          </Typography>
          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled'}}>
            Начальник цеха
          </Typography>
          <Typography variant="body2">
            {foreman}
          </Typography>
          <Typography variant="overline" sx={{ pt: 1, color: 'text.disabled'}}>
            Цех
          </Typography>
          <Typography variant="body2">
            {typeOfMetal}
          </Typography>
        </Stack>
      </Stack>
    </RootStyle>
  );
}
