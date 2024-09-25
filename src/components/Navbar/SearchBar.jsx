import React, { useState } from 'react';
import { TextField, IconButton } from '@mui/material';
import { Close as CloseIcon } from '@mui/icons-material';

const SearchBar = ({ closeSearch }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = () => {
    // Perform search logic here
    console.log('Searching for:', searchTerm);
  };

  return (
    <div className="flex items-center w-full rounded">
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search for products..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <IconButton onClick={handleSearch} className="text-black">
        <CloseIcon onClick={closeSearch} />
      </IconButton>
    </div>
  );
};

export default SearchBar;
