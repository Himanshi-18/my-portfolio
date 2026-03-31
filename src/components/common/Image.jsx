// src/components/Image.jsx
import React from "react";
import { Box } from "@mui/material";

const Image = ({ src, alt, width, height, size = 200, circular = false, shadow = false }) => {
  return (
    <Box
      component="img"
      src={src}
      alt={alt}
      width ={width}
      height ={height}
      sx={{
        borderRadius: circular ? "50%" : "0%",
        objectFit: "cover",
        display: "block",
        boxShadow: shadow ? 3 : 0,
      }}
    />
  );
};

export default Image;
