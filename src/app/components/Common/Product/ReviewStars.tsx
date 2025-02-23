import React from 'react';
import { Box } from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import StarBorderIcon from '@mui/icons-material/StarBorder';

interface ReviewStarsProps {
  rating: number; // Decimal rating (e.g., 4.7)
  totalStars?: number; // Default: 5 stars
}

export const ReviewStars: React.FC<ReviewStarsProps> = ({ rating, totalStars = 5 }) => {
  const fullStars = Math.floor(rating); // Whole number part
  const decimal = rating % 1; // Get decimal part

  const hasHalfStar = decimal >= 0.3 && decimal < 0.75; // Show half-star only if between 0.3 and 0.74
  const adjustedFullStars = fullStars + (decimal >= 0.75 ? 1 : 0); // Round up if decimal is ≥ 0.75

  const emptyStars = totalStars - adjustedFullStars - (hasHalfStar ? 1 : 0);

  return (
    <Box display="flex">
      {/* Render full stars */}
      {[...Array(adjustedFullStars)].map((_, i) => (
        <StarIcon key={`full-${i}`} sx={{ color: '#fc9003', width: '.75em', height: '.75em' }} />
      ))}

      {/* Render half star if applicable */}
      {hasHalfStar && <StarHalfIcon sx={{ color: '#fc9003', width: '.75em', height: '.75em' }} />}

      {/* Render empty stars */}
      {[...Array(emptyStars)].map((_, i) => (
        <StarBorderIcon key={`empty-${i}`} sx={{ color: '#fc9003', width: '.75em', height: '.75em' }} />
      ))}
    </Box>
  );
};
