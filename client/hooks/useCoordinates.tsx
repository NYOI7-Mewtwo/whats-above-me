import { useContext } from 'react';
import { CoordinatesContext } from '../context/CoordinatesContext';

const useCoordinates = () => {
  const context = useContext(CoordinatesContext);

  if (!context) {
    throw new Error('useCoordinates must be used within a CoordinatesContext');
  }

  return context;
};

export default useCoordinates;
