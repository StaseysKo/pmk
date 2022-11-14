import PropTypes from 'prop-types';
import { useState } from 'react';
// next
import { useRouter } from 'next/router';
// @mui
import { Typography, Stack, Box, Button, Divider, Card } from '@mui/material';
// routes
import Routes from '../../../routes';
// utils
import { fCurrency } from '../../../utils/formatNumber';
//
import { TravelTourFilterGuests, TravelTourFilterTime } from '../filters';

// ----------------------------------------------------------------------

// TravelTourReserveForm.propTypes = {
//   tour: PropTypes.shape({
//     price: PropTypes.number,
//     priceSale: PropTypes.number,
//   }),
// };

TravelTourReserveForm.propTypes = {
  frontmatter: PropTypes.shape({
    category: PropTypes.string,
    createdAt: PropTypes.string,
    description: PropTypes.string,
    socialLinks: PropTypes.object,
    title: PropTypes.string,
    website: PropTypes.string,
  }),
};

export default function TravelTourReserveForm({ tour }) {
  const router = useRouter();

  const [departureDay, setDepartureDay] = useState(null);
  const [guests, setGuests] = useState({
    adults: 0,
    children: 0,
  });

  const { price, priceSale, title, role, category, description, location } = tour;

  const totalGuests = guests.adults + guests.children;

  const handleChangeReserve = () => {
    router.push(Routes.travel.checkout);
  };

  return (
    <Card>
      <Stack spacing={3} sx={{ p: 3 }}>
        <Stack spacing={2}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            summary
          </Typography>
          <Typography variant="h4">{title}</Typography>
          <Typography variant="body2">{description}</Typography>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />
        <Stack spacing={1}>
          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Website
          </Typography>
          <Typography variant="body2">{location}</Typography>

          <Typography variant="overline" sx={{ color: 'text.disabled', pt: 1 }}>
            Category
          </Typography>
          <Typography variant="body2" sx={{ pb: 1 }}>
            {location}
          </Typography>

          <Typography variant="overline" sx={{ color: 'text.disabled' }}>
            Date
          </Typography>
          <Typography variant="body2" sx={{ pb: 1 }}>
            {role}
          </Typography>
        </Stack>
      </Stack>
    </Card>
  );
}

