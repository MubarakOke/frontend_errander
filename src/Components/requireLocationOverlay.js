import React from 'react'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: "50%",
    borderRadius: 2,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
  };

function requireLocationOverlay({children, locationUnset}) {
  return (
    <>
    <Modal open={locationUnset} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
    <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
            Allow errander app to access location
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Errander app needs access to location, so that customers can track their errand
        </Typography>
    </Box> 
    </Modal>
    {children}
    </>
  )
}

export default requireLocationOverlay