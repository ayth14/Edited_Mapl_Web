import React, { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import { MdStarBorder, MdStar } from 'react-icons/md';
import { Basic } from '@components';
import { Link } from 'react-router-dom';

const Ratings = (props) => {
  const { precision = 1, totalStars = totalStars, label , emptyIcon = MdStar, filledIcon = MdStarBorder} = props
  const [activeStar, setActiveStar] = useState(-1);
  const [hoverActiveStar, setHoverActiveStar] = useState(-1);
  const [isHovered, setIsHovered] = useState(false);
  const ratingContainerRef = useRef(null);

  const calculateRating = (e) => {
    const { width, left } = ratingContainerRef.current.getBoundingClientRect();
    let percent = (e.clientX - left) / width;
    const numberInStars = percent * totalStars;
    const nearestNumber = Math.round((numberInStars + precision / 2) / precision) * precision;

    return Number(nearestNumber.toFixed(precision.toString().split('.')[1]?.length || 0));
  };

  const handleClick = (e) => {
    setIsHovered(false);
    setActiveStar(calculateRating(e));
  };

  const handleMouseMove = (e) => {
    setIsHovered(true);
    setHoverActiveStar(calculateRating(e));
  };

  const handleMouseLeave = (e) => {
    setHoverActiveStar(-1); // Reset to default state
    setIsHovered(false);
  };
  const EmptyIcon = emptyIcon;
  const FilledIcon = filledIcon;

  return (
    <Box
      sx={{
        display: 'inline-flex',
        position: 'relative',
        cursor: 'pointer',
        textAlign: 'left'
      }}
      onClick={handleClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      ref={ratingContainerRef}
    >
      {[...new Array(totalStars)].map((arr, index) => {
        const activeState = isHovered ? hoverActiveStar : activeStar;

        const showEmptyIcon = activeState === -1 || activeState < index + 1;

        const isActiveRating = activeState !== 1;
        const isRatingWithPrecision = activeState % 1 !== 0;
        const isRatingEqualToIndex = Math.ceil(activeState) === index + 1;
        const showRatingWithPrecision =
          isActiveRating && isRatingWithPrecision && isRatingEqualToIndex;

        return (
          <Box
            position={'relative'}
            sx={{
              cursor: 'pointer'
            }}
            key={index}
          >
            <Box
              sx={{
                width: showRatingWithPrecision ? `${(activeState % 1) * 100}%` : '0%',
                overflow: 'hidden',
                position: 'absolute'
              }}
            >
              <FilledIcon size={20}/>
            </Box>
            {/*Note here */}
            <Box
              sx={{
                color: showEmptyIcon ? 'black' : 'inherit'
              }}
            >
              {showEmptyIcon ? <EmptyIcon size={20}/> : <FilledIcon size={20}/>}
            </Box>
          </Box>
        );
      })}
      {label && (
        <Link to={"/home"} className={"pl-3"}>
          <Basic>{label}</Basic>
        </Link>
      )}
    </Box>
  );
};

export default Ratings;