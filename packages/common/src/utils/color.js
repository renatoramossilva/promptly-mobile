import {BaseTheme} from '../constants/theme';

const pSBC = (color, percent) => {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt((R * (100 + percent)) / 100);
  G = parseInt((G * (100 + percent)) / 100);
  B = parseInt((B * (100 + percent)) / 100);

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR =
    R.toString(16).length === 1 ? `0${R.toString(16)}` : R.toString(16);
  const GG =
    G.toString(16).length === 1 ? `0${G.toString(16)}` : G.toString(16);
  const BB =
    B.toString(16).length === 1 ? `0${B.toString(16)}` : B.toString(16);

  return `#${RR}${GG}${BB}`;
};

/**
 * @description transforms hex code color string into an array with rgba values
 * @param {string} color color's hex code
 * @param {number} [opacity=1] opacity value (from 0 to 1)
 */
export const getColorRGBA = (color, opacity = 1) => {
  let fullColor = color;
  if (fullColor.length === 4) {
    const _r = color[1] + color[1];
    const _g = color[2] + color[2];
    const _b = color[3] + color[3];
    fullColor = `#${_r + _g + _b}`;
  }
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(fullColor);
  if (!result) {
    return color;
  }
  const r = parseInt(result[1], 16);
  const g = parseInt(result[2], 16);
  const b = parseInt(result[3], 16);
  const rgba = [r, g, b, opacity];
  return rgba;
};

/**
 * @description takes color code in Hex and converts it to RGBA
 * @param {string} color color's hex code
 * @param {number} [opacity=1] opacity value (from 0 to 1)
 */
export const getRGBACode = (color, opacity = 1) => {
  const arrayRGBA = getColorRGBA(color, opacity);
  if (arrayRGBA === color) {
    return color;
  }
  return `rgba(${arrayRGBA.join(',')})`;
};

export const shadedTheme = (color) => {
  BaseTheme['color-primary-100'] = color
    ? pSBC(color, 40)
    : BaseTheme['color-primary-100'];
  BaseTheme['color-primary-200'] = color
    ? pSBC(color, 30)
    : BaseTheme['color-primary-200'];
  BaseTheme['color-primary-300'] = color
    ? pSBC(color, 20)
    : BaseTheme['color-primary-300'];
  BaseTheme['color-primary-400'] = color
    ? pSBC(color, 10)
    : BaseTheme['color-primary-400'];
  BaseTheme['color-primary-500'] = color
    ? pSBC(color, 0)
    : BaseTheme['color-primary-500'];
  BaseTheme['color-primary-600'] = color
    ? pSBC(color, -10)
    : BaseTheme['color-primary-600'];
  BaseTheme['color-primary-700'] = color
    ? pSBC(color, -20)
    : BaseTheme['color-primary-700'];
  BaseTheme['color-primary-800'] = color
    ? pSBC(color, -30)
    : BaseTheme['color-primary-800'];
  BaseTheme['color-primary-900'] = color
    ? pSBC(color, -40)
    : BaseTheme['color-primary-900'];

  return {
    ...BaseTheme,
  };
};
