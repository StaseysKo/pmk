import PropTypes from 'prop-types';
import { m } from 'framer-motion';
import { useState } from 'react';
// @mui
import { styled } from '@mui/material/styles';
import { Box } from '@mui/material';
// components
import { Image, LightboxModal } from '../../../components';
import { varTranHover } from '../../../components/animate';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(({ theme }) => ({
  padding: theme.spacing(8, 0),
  [theme.breakpoints.up('md')]: {
    paddingTop: theme.spacing(5),
    paddingBottom: theme.spacing(10),
  },
}));

// ----------------------------------------------------------------------

TravelTourGallery.propTypes = {
  gallery: PropTypes.array.isRequired,
};

export default function TravelTourGallery({ gallery }) {
  const [openLightbox, setOpenLightbox] = useState(false);
  const [selectedImage, setSelectedImage] = useState(0);

  const handleOpenLightbox = (url) => {
    const selectedImage = gallery.findIndex((index) => url === index);

    setOpenLightbox(true);
    setSelectedImage(selectedImage);
  };

  return (
    <RootStyle>
      <Box
        sx={{
          display: 'grid',
          gap: 1,
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            md: 'repeat(2, 1fr)',
          },
        }}
      >
        <PhotoItem photo={gallery} onOpenLightbox={() => handleOpenLightbox(gallery)} />

      </Box>

      <LightboxModal
        images={gallery}
        mainSrc={gallery[selectedImage]}
        photoIndex={selectedImage}
        setPhotoIndex={setSelectedImage}
        isOpen={openLightbox}
        onCloseRequest={() => setOpenLightbox(false)}
      />
    </RootStyle>
  );
}

// ----------------------------------------------------------------------

PhotoItem.propTypes = {
  onOpenLightbox: PropTypes.func,
  photo: PropTypes.string,
};

function PhotoItem({ photo, onOpenLightbox }) {
  return (
    <m.div
      whileHover="hover"
      variants={{
        hover: { opacity: 0.8 },
      }}
      transition={varTranHover()}
    >
      <Image
        alt="photo"
        src={photo}
        ratio="1/1"
        onClick={onOpenLightbox}
        sx={{ borderRadius: 2, cursor: 'pointer' }}
      />
    </m.div>
  );
}
