import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Box, Slider } from '@mui/material';

interface CustomSliderProps {
  max: number;
  min: number;
  value: [number, number];
  onChange: (event: Event, value: number | number[], activeThumb: number) => void;
  ariaLabel: string;
  valueLabelDisplay: 'auto' | 'on' | 'off';
  railColor: string;
  mainColor: string;
  barWidth: string;
  barHeight: string;
  tickSize: string;
}

function CustomSlider({ 
  max, 
  min, 
  value, 
  onChange, 
  ariaLabel, 
  valueLabelDisplay, 
  mainColor, 
  railColor, 
  barWidth, 
  barHeight, 
  tickSize,
}: CustomSliderProps) {

  const theme = createTheme({
    palette: {
      primary: {
        main: mainColor,
      },
      secondary: {
        main: mainColor,
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ width: barWidth }}>
        <Slider
          color='primary'
          getAriaLabel={() => ariaLabel}
          max={max}
          min={min}
          value={value}
          onChange={onChange}
          valueLabelDisplay={valueLabelDisplay}
          sx={{
            '& .MuiSlider-thumb': {
              width: tickSize,
              height: tickSize,
            },
            '& .MuiSlider-rail': {
              width: barWidth,
              height: barHeight,
              mainColor: railColor,
            },
            '& .MuiSlider-track': {
              width: barWidth,
              height: barHeight,
            },
            '& .MuiSlider-valueLabelOpen': {
              transform: 'translateY(100%) scale(1) !important',
              mainColor: mainColor,
              fontSize: '16px',
              background: 'none',
            },
          }}
        />
      </Box>
    </ThemeProvider>
  );
}

export default CustomSlider;