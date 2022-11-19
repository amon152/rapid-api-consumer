import { SearchRounded } from "@mui/icons-material";
import { LoadingButton } from "@mui/lab";
import { Container, Box, TextField, Select, Autocomplete, Button, MenuItem, SelectChangeEvent } from "@mui/material";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { countries } from "../../../utils/Countries";

interface Props {
  onSubmission(data: any): void;
}

function SearchBar({ onSubmission }: Props) {
  const { control, handleSubmit } = useForm();
  const [country, setCountry] = React.useState('');
  const handleChange = (event: SelectChangeEvent) => {
    setCountry(event.target.value);
    onSubmission(event.target.value)
  };

  return (
    <Container maxWidth="lg">
      <form onSubmit={handleSubmit(onSubmission)}>
        <Box
          sx={{
            width: { xs: "98%", sm: "80%", md: "80%" },
            height: { md: "90px" },
            backgroundColor: "#fff",
            border: '1px solid black',
            mx: { xs: "auto", sm: 6, md: 6 },
            mt: { xs: 0, sm: 5, md: 6 },
            mb: 2,
            p: 1,
            borderRadius: "1rem",
            display: "flex",
            flexDirection: { xs: "column", sm: "row", md: "row" },
            position: "relative",
            zIndex: 2,
          }}
        >
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                value={country}
                onChange={handleChange}
                autoWidth
                label="Choose a country"
                variant="standard"
                sx={{ width: { sm: '35%', md: '90%' }, mb: 2, mx: 'auto' }}
              >
                {countries.map((option) => (
                  <MenuItem key={option.label} value={option.label || ''}>
                      <Box
                        component='img'
                        loading="lazy"
                        width="20"
                        src={`https://flagcdn.com/w20/${option.code.toLowerCase()}.png`}
                        srcSet={`https://flagcdn.com/w40/${option.code.toLowerCase()}.png 2x`}
                        alt=""
                      />
                      {option.label} ({option.code})
                  </MenuItem>
                ))}
              </Select>
      </Box>
    </form>
    </Container >
  );
}

export default SearchBar;
