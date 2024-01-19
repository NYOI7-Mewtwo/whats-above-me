import { Autocomplete, Box, Grid, TextField, Typography } from '@mui/material';
import { ChangeEvent } from 'react';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import parse from 'autosuggest-highlight/parse';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import useCoordinates from '../hooks/useCoordinates';

const Form = () => {
  //   const { isLoaded } = useLoadScript({
  //     id: 'google-map-script',
  //     googleMapsApiKey: 'AIzaSyDfGl5eh7QcT5qfhygufBYu3zOKm5zfJIs',
  //     libraries: ['places'],
  //   });
  const { setLatitude, setLongitude } = useCoordinates();

  const {
    ready,
    value,
    setValue,
    suggestions: { status, data },
    clearSuggestions,
  } = usePlacesAutocomplete({});

  const handleInput = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    setValue(e.target.value);
  };

  const handleSelect = async ({ description }: { description: string }) => {
    setValue(description, false);
    clearSuggestions();

    const results = await getGeocode({ address: description });
    const { lat, lng } = await getLatLng(results[0]);
    // console.log('Coordinates', lat, lng);
    setLatitude(lat);
    setLongitude(lng);
  };

  return (
    <Box id='form-container'
      sx={{
        border: 2,
        borderColor: 'blue',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Typography variant='h3' sx={{color: 'black'}}>What's Above Me?</Typography>
      <Autocomplete
        id='combo-box-form'
        options={data}
        sx={{ width: 300 }}
        value={data.find((x) => x.description === value)}
        noOptionsText='No locations'
        getOptionLabel={(option) => {
          return typeof option === 'string' ? option : option.description;
        }}
        freeSolo
        autoComplete
        includeInputInList
        filterSelectedOptions
        filterOptions={(x) => x}
        renderInput={(params) => (
          <TextField
            {...params}
            label='Search for a Location'
            onChange={(e) => handleInput(e)}
          />
        )}
        renderOption={(props, option) => {
          const matches =
            option.structured_formatting.main_text_matched_substrings || [];

          const parts = parse(
            option.structured_formatting.main_text,
            matches.map((match: any) => [
              match.offset,
              match.offset + match.length,
            ])
          );

          return (
            <li {...props}>
              <Grid
                container
                alignItems='center'
                onClick={() => handleSelect(option)}
              >
                <Grid item sx={{ display: 'flex', width: 44 }}>
                  <LocationOnIcon sx={{ color: 'text.secondary' }} />
                </Grid>
                <Grid
                  item
                  sx={{ width: 'calc(100% - 44px)', wordWrap: 'break-word' }}
                >
                  {parts.map((part, index) => (
                    <Box
                      key={index}
                      component='span'
                      sx={{ fontWeight: part.highlight ? 'bold' : 'regular' }}
                    >
                      {part.text}
                    </Box>
                  ))}
                  <Typography variant='body2' color='text.secondary'>
                    {option.structured_formatting.secondary_text}
                  </Typography>
                </Grid>
              </Grid>
            </li>
          );
        }}
      />
    </Box>
  );
};

export default Form;
