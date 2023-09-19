import { createTheme, ThemeProvider } from "@mui/material/styles";

import { Tooltip } from "@mui/material";

export default function ToolTip({ children, title }) {
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

  return (
    <ThemeProvider theme={theme}>
      <Tooltip title={title} placement="top">
        {children}
      </Tooltip>
    </ThemeProvider>
  );
}
