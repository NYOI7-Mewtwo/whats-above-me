import { Box } from '@mui/material';
import Plane from '../components/Plane';

const BottomContainer = () => {
  return (
    <Box sx={{ border: 2, borderColor: 'red' }}>
      <Plane />
    </Box>
  );
};

export default BottomContainer;
