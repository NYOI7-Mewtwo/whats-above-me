export interface PlaneData {
  hex: string;
  airline_iata: string;
  flight_number: string;
  arr_iata: string;
  dep_iata: string;
  status: string;
  alt: number;
}

export interface SatelliteData {
  name: string;
  lat: number;
  lng: number;
}