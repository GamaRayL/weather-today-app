export const showWind = (wind) => {
  if (wind === 0) {
    return "./images/weatherIcons/wind/wind0.svg";
  } else if (wind > 1 && wind <= 3) {
    return "./images/weatherIcons/wind/wind1.svg";
  } else if (wind >= 4 && wind <= 7) {
    return "./images/weatherIcons/wind/wind2.svg";
  } else if (wind >= 8 && wind <= 12) {
    return "./images/weatherIcons/wind/wind3.svg";
  } else if (wind >= 13 && wind <= 18) {
    return "./images/weatherIcons/wind/wind4.svg";
  } else if (wind >= 19 && wind <= 24) {
    return "./images/weatherIcons/wind/wind5.svg";
  } else if (wind >= 25 && wind <= 31) {
    return "./images/weatherIcons/wind/wind6.svg";
  } else if (wind >= 32 && wind <= 38) {
    return "./images/weatherIcons/wind/wind7.svg";
  } else if (wind >= 39 && wind <= 46) {
    return "./images/weatherIcons/wind/wind8.svg";
  } else if (wind >= 47 && wind <= 54) {
    return "./images/weatherIcons/wind/wind9.svg";
  } else if (wind >= 55 && wind <= 63) {
    return "./images/weatherIcons/wind/wind10.svg";
  } else if (wind >= 64 && wind <= 75) {
    return "./images/weatherIcons/wind/wind11.svg";
  } else if (wind >= 75) {
    return "./images/weatherIcons/wind/wind12.svg";
  } else {
    return null;
  }
};

export const showUv = (uvIndex) => {
  if (uvIndex === 0) {
    return "./images/weatherIcons/uvIndex/uv.svg";
  } else if (uvIndex === 1) {
    return "./images/weatherIcons/uvIndex/uv1.svg";
  } else if (uvIndex === 2) {
    return "./images/weatherIcons/uvIndex/uv2.svg";
  } else if (uvIndex === 3) {
    return "./images/weatherIcons/uvIndex/uv3.svg";
  } else if (uvIndex === 4) {
    return "./images/weatherIcons/uvIndex/uv4.svg";
  } else if (uvIndex === 5) {
    return "./images/weatherIcons/uvIndex/uv5.svg";
  } else if (uvIndex === 6) {
    return "./images/weatherIcons/uvIndex/uv6.svg";
  } else if (uvIndex === 7) {
    return "./images/weatherIcons/uvIndex/uv7.svg";
  } else if (uvIndex === 8) {
    return "./images/weatherIcons/uvIndex/uv8.svg";
  } else if (uvIndex === 9) {
    return "./images/weatherIcons/uvIndex/uv9.svg";
  } else if (uvIndex === 10) {
    return "./images/weatherIcons/uvIndex/uv10.svg";
  } else if (uvIndex === 11) {
    return "./images/weatherIcons/uvIndex/uv11.svg";
  } else {
    return null;
  }
};
