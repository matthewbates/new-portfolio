import React, { useRef } from "react";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Box, Tooltip } from "@mui/material";

export default function ToolTip({ children, title, placement }) {
  const positionRef = { x: 0, y: 0 };
  const popperRef = React.useRef(null);
  const areaRef = React.useRef(null);
  const theme = createTheme({
    components: {
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            fontSize: "1em",
            fontFamily: "Raleway",
            padding: "0.5em",
          },
        },
      },
    },
  });

  const handleMouseMove = (event) => {
    positionRef.current = { x: event.clientX, y: event.clientY };
    if (popperRef.current !== null) {
      popperRef.current.update();
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Tooltip
        title={title}
        placement="top"
        PopperProps={{
          popperRef,
          anchorEl: {
            getBoundingClientRect: () => {
              return new DOMRect(
                positionRef.current.x,
                areaRef.current.getBoundingClientRect().y,
                0,
                0
              );
            },
          },
        }}
      >
        <Box ref={areaRef} onMouseMove={handleMouseMove}>
          {children}
        </Box>
      </Tooltip>
    </ThemeProvider>
  );
}
