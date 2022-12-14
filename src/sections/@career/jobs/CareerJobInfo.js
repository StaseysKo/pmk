import PropTypes from 'prop-types';
// icons
import calendarIcon from '@iconify/icons-carbon/calendar';
import hourglassIcon from '@iconify/icons-carbon/hourglass';
import moneyIcon from '@iconify/icons-carbon/money';
import increaseLevel from '@iconify/icons-carbon/increase-level';
import userIcon from '@iconify/icons-carbon/user';
import translateIcon from '@iconify/icons-carbon/translate';
// @mui
import { Stack, Typography, Card } from '@mui/material';
// utils
import { fCurrency } from '../../../utils/formatNumber';
import { fDate } from '../../../utils/formatTime';
// components
import { Iconify, TextIconLabel } from '../../../components';

// ----------------------------------------------------------------------

CareerJobInfo.propTypes = {
  job: PropTypes.shape({
    createdAt: PropTypes.string,
    deadline: PropTypes.string,
    experience: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
    languages: PropTypes.arrayOf(PropTypes.string),
    level: PropTypes.string,
    salary: PropTypes.string,
  }),
};

export default function CareerJobInfo({ job }) {
  const { createdAt, salary, experience, deadline, level, languages } = job;

  return (
    <Card sx={{ p: 3 }}>
      <Stack spacing={2}>
        <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={calendarIcon} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Дата публикации </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                09 ноября 2022
              </Typography>
            </Stack>
          }
        />

        <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={hourglassIcon} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Актуально до </Typography>
              <Typography variant="body2" sx={{ color: 'primary.main' }}>
                20 ноября 2022
              </Typography>
            </Stack>
          }
        />

        <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={moneyIcon} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Зарплата в месяц </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {typeof salary === 'number' ? fCurrency(salary) : salary}
              </Typography>
            </Stack>
          }
        />

        <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={increaseLevel} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Опыт </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {`${experience} year exp`}
              </Typography>
            </Stack>
          }
        />
{/* 
        <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={userIcon} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Level </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {level}
              </Typography>
            </Stack>
          }
        /> */}

        {/* <TextIconLabel
          spacing={2}
          alignItems="flex-start"
          icon={<Iconify icon={translateIcon} sx={{ width: 24, height: 24 }} />}
          value={
            <Stack>
              <Typography variant="subtitle2"> Language </Typography>
              <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                {typeof languages === 'string' ? languages : languages.join(', ')}
              </Typography>
            </Stack>
          }
        /> */}
      </Stack>
    </Card>
  );
}
