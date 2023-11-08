import {
  Autocomplete,
  Box,
  Button,
  ClickAwayListener,
  Grid,
  TextField,
  Typography,
} from '@mui/material';
import { ChangeEvent, SyntheticEvent, useState } from 'react';
import { useJsApiLoader, useLoadScript } from '@react-google-maps/api';
import usePlacesAutocomplete, {
  getGeocode,
  getLatLng,
} from 'use-places-autocomplete';
import useOnclickOutside from 'react-cool-onclickoutside';
import parse from 'autosuggest-highlight/parse';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const Form = () => {
  //   const { isLoaded } = useLoadScript({
  //     id: 'google-map-script',
  //     googleMapsApiKey: 'AIzaSyDfGl5eh7QcT5qfhygufBYu3zOKm5zfJIs',
  //     libraries: ['places'],
  //   });

  const [longitude, setLongitude] = useState('');
  const [latitude, setLatitude] = useState('');

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
    console.log('Coordinates', lat, lng);
  };

  return (
    <Box sx={{ border: 2, borderColor: 'blue', display: 'flex', flexDirection: 'column', alignItems: 'center', }}>
      <Typography variant='h3'>
        What's Above Me?
      </Typography>
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

//   <div ref={ref}>
//     <input
//       value={value}
//       onChange={handleInput}
//       disabled={!ready}
//       placeholder='Where are you going?'
//     />
//     {/* We can use the "status" to decide whether we should display the dropdown or not */}
//     {status === 'OK' && <ul>{renderSuggestions()}</ul>}
//   </div>
// {
//   /* <Box
// component='form'
// sx={{
//   '& > :not(style)': { m: 1, width: '25ch' },
//   display: 'flex',
//   justifyContent: 'center',
// }}
// noValidate
// autoComplete='off'
// onSubmit={handleSubmit}
// >
// <TextField
//   id='longitude'
//   value={longitude}
//   label='Longitude'
//   variant='outlined'
//   onChange={(event) => setLongitude(event.target.value)}
// />
// <TextField
//   id='latitude'
//   value={latitude}
//   label='Latitude'
//   variant='outlined'
//   onChange={(event) => setLatitude(event.target.value)}
// />
// <Button variant='outlined' type='submit'>
//   Submit
// </Button>
// </Box> */
// }
