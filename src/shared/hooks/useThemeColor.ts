import { useState, useLayoutEffect } from 'react';
import {
  generateActiveColor,
  generateHoverColor,
  generateShadowColor,
} from '../utils/color';

const useThemeColor = () => {
  const [color, setColor] = useState('#f52121');

  useLayoutEffect(() => {
    const r = document.querySelector(':root') as HTMLElement;
    r?.style.setProperty('--primary-color', color);
    r?.style.setProperty('--primary-hover-color', generateHoverColor(color));
    r?.style.setProperty('--primary-active-color', generateActiveColor(color));
    r?.style.setProperty('--primary-shadow-color', generateShadowColor(color));
  }, [color]);

  return { setColor, color };
};

export default useThemeColor;
