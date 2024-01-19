import React, { useState } from 'react';
import Popover from '@mui/material/Popover';
import { SatelliteData } from '../../utils/interface';
import { ListItemText, Button } from '@mui/material';
import { FaSatellite } from 'react-icons/fa';

const SatelliteModal = ({ satelliteData }: { satelliteData: SatelliteData }) => {
    const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

    const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
        console.log('satelliteData',satelliteData);
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
                <FaSatellite className='icon'/>
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
                <ListItemText>Satellite Name: {satelliteData.name}</ListItemText>
                <ListItemText>Satellite Latitude: {satelliteData.lat}</ListItemText>
                <ListItemText>Satellite Longitude: {satelliteData.lng}</ListItemText>

            </Popover>
        </div>
    );
};

export default SatelliteModal;
