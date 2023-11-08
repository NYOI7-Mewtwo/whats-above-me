import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import { SatData } from '../../utils/interface';
import { ListItemText, Button } from '@mui/material';
import { FaSatellite } from 'react-icons/fa';

const SatelliteModal = ({ satData }: { satData: SatData }) => {
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
                <FaPlane />
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
                <ListItemText>Satellite Name: {satData}</ListItemText>
                <ListItemText>Ground Latitude: {satData}</ListItemText>
                <ListItemText>Ground Longitude: {satData}</ListItemText>
                <ListItemText>Country: {satData}</ListItemText>

            </Popover>
        </div>
    );
};

export default SatelliteModal;
