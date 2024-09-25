import React from 'react';
import { Badge, IconButton } from '@mui/material';
import { CiHeart } from "react-icons/ci";

const HeartIcon = () => {
  const favoriteCount = 5; // Replace with dynamic value

  return (
    <IconButton className="text-white">
      <Badge badgeContent={favoriteCount} color="bg-black]" classes={{ badge: 'bg-black-500 text-white' }}>
      <CiHeart />
      </Badge>
    </IconButton>
  );
};

export default HeartIcon;
