// Search.js
import React, { useState } from 'react';
import { TextField, Button, Box, Typography } from '@mui/material';

const Search = ({ searchUsers, clearUsers, showClear }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim()) {
      searchUsers(query);
      setQuery('');
    }
  };

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        margin: '20px 0',
        padding: '20px',
        borderRadius: '10px',
        boxShadow: 2, // Material UI shadow
        backgroundColor: '#fff',
      }}
    >
      <Typography variant="h4" gutterBottom>
        Find GitHub Users
      </Typography>
      <form onSubmit={handleSubmit} style={{ display: 'flex', width: '100%', maxWidth: '600px', gap: '10px' }}>
        <TextField
          label="GitHub Username"
          variant="outlined"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          fullWidth
          required
          sx={{ flex: 1 }}
        />
        <Button variant="contained" type="submit" color="primary">
          Search
        </Button>
        {showClear && (
          <Button variant="outlined" onClick={clearUsers} color="secondary">
            Clear
          </Button>
        )}
      </form>
    </Box>
  );
};

export default Search;
