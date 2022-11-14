// @mui
import { styled } from '@mui/material/styles';
import {
  Timeline,
  TimelineDot,
  TimelineItem,
  TimelineContent,
  TimelineSeparator,
  TimelineConnector,
} from '@mui/lab';
import { Stack, Typography, Container } from '@mui/material';
// utils
import cssStyles from '../../../utils/cssStyles';
// hooks
import useResponsive from '../../../hooks/useResponsive';

// ----------------------------------------------------------------------

const CORE_VALUES = [
  {
    year: '1 этап',
    title: 'Формирование заявки',
    description:
      'Оставьте заявку используя форму ниже, в течение рабочего дня с вами свяжется менеджер для выставления коммерческого предложения и заключения договора',
  },
  {
    year: '2 этап',
    title: 'Внесение предоплаты',
    description:
      'Внесите предоплату, необходимую для запуска услуги в работу',
  },
  {
    year: '3 этап',
    title: 'Инженерные работы',
    description:
      'Наши инженеры выезжают на объект заказчика для снятия замеров и начала проектировочных работ',
  },
  {
    year: '4 этап',
    title: 'Производственные работы',
    description:
      'После окончания проектировочных работ проект передается в один из трех производственных цехов',
  },
  {
    year: '5 этап',
    title: 'Доставка и монтаж',
    description:
      'Мы осуществим доставку и монтаж изделий на вашем объекте',
  },
  {
    year: '6 этап',
    title: 'Закрывающие документы',
    description:
      'Сдача работ и обмен закрывающими документами',
  },
];

const COLORS = ['primary', 'primary', 'primary', 'primary'];
// const COLORS = ['primary', 'secondary', 'warning', 'success'];
const RootStyle = styled('div')(({ theme }) => ({

}));

// ----------------------------------------------------------------------

export default function MarketingServicesHowItWork() {
  const isDesktop = useResponsive('up', 'md');

  return (

        <Timeline position={isDesktop ? 'right' : 'center'}>
          {CORE_VALUES.map((value, index) => {
            const { title, description, year } = value;
            return (
              <TimelineItem
                key={title}
                sx={{
                  '&:before': {
                    display: { xs: 'none'},
                  },
                }}
              >
                <TimelineSeparator>
                  <TimelineDot color={COLORS[index]} />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{ pb: { xs: 3, md: 5 } }}>
                  <Typography variant="subtitle3" sx={{ color: `${COLORS[index]}.main` }}>
                    {year}
                  </Typography>
                  <Typography variant="h6" sx={{ mt: 0.5, mb: 1 }}>
                    {title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      opacity: 0.72,
                      maxWidth: { md: 360 },
                    }}
                  >
                    {description}
                  </Typography>
                </TimelineContent>
              </TimelineItem>
            );
          })}
        </Timeline>
  );
}
