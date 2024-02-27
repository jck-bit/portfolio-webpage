import React from "react";
import { Box, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const WorkGridItem = ({ id, title, thumbnail }) => (
  <Box textAlign="center">
    <LinkBox cursor="pointer">
      {/* <img
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
      /> */}
      <LinkOverlay href={`/project/${id}`} target="_blank">
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
    </LinkBox>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
        .grid-item-thumbnail {
          width: 100%;
          height: auto;
          border-radius: 12px;
          object-fit: cover;
        }
      `}
  />
);
