import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import { PlaneData } from '../../utils/interface';
import { ListItemText, Button } from '@mui/material';
import { FaPlane } from 'react-icons/fa';

const Modal = ({ planeData }: { planeData: PlaneData }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    console.log(planeData);
  };

  const handlePopoverClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <div>
      <Button
        aria-owns={open ? 'mouse-over-popover' : undefined}
        aria-haspopup='true'
        onMouseEnter={handlePopoverOpen}
        onMouseLeave={handlePopoverClose}
      >
        <FaPlane className='icon'/>
      </Button>

      <Popover
        id='mouse-over-popover'
        sx={{ pointerEvents: 'none' }}
        open={open}
        anchorEl={anchorEl}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        onClose={handlePopoverClose}
        disableRestoreFocus

      >
        <ListItemText>Airline: {planeData.airline_iata}</ListItemText>
        <ListItemText>Flight Number: {planeData.flight_number}</ListItemText>
        <ListItemText>Departure: {planeData.dep_iata}</ListItemText>
        <ListItemText>Arrival: {planeData.arr_iata}</ListItemText>
        <ListItemText>Status: {planeData.status}</ListItemText>
      </Popover>
    </div>
  );
};

export default Modal;
