export const getRadius = (lat: number, lng: number, radius: number) => {
  const R = 3958.8; // Earth's radius in miles
  const latRad = (lat * Math.PI) / 180;
  const lngRad = (lng * Math.PI) / 180;

  // Calculate the new latitude and longitude
  const newLatRad = latRad + radius / R;
  const newLngRad = lngRad + radius / R;

  // Convert back to degrees
  const newLat = ((newLatRad * 180) / Math.PI).toFixed(4);
  const newLng = ((newLngRad * 180) / Math.PI).toFixed(4);

  return { lat: newLat, lng: newLng };
};
