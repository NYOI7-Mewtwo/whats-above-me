import {
  useState,
  createContext,
  Dispatch,
  SetStateAction,
  ReactNode,
} from 'react';
import { Latitude, Longitude } from '../../utils/types';

type CoordinatesContextType = {
  latitude: Latitude;
  setLatitude: Dispatch<SetStateAction<Latitude>>;
  longitude: Longitude;
  setLongitude: Dispatch<SetStateAction<Longitude>>;
};

export const CoordinatesContext = createContext<CoordinatesContextType | null>(
  null
);

export const CoordinatesContextProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [latitude, setLatitude] = useState<Latitude>(0);
  const [longitude, setLongitude] = useState<Longitude>(0);

  return (
    <CoordinatesContext.Provider
      value={{
        latitude,
        setLatitude,
        longitude,
        setLongitude,
      }}
    >
      {children}
    </CoordinatesContext.Provider>
  );
}
