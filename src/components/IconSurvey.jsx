import React from 'react';

const IconSurvey = props => {
  const styles = {
    svg: {
      display: 'inline-block',
      verticalAlign: 'middle',
    },
    path: {
      fill: props.color,
    },
  };

  return (
    <svg width="20px" height="20px" viewBox="0 0 20 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
      <desc>Created with Sketch.</desc>
      <defs></defs>
      <g id="Symbols" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" fill-opacity="0.5" opacity="0.5">
          <g id="Header" transform="translate(-1069.000000, -27.000000)" fill-rule="nonzero" fill="#000000">
              <g id="Right-menu">
                  <g transform="translate(1012.000000, 24.000000)">
                      <path d="M59,3 C57.8954305,3 57,3.8954305 57,5 L57,17 C57,18.1045695 57.8954305,19 59,19 L63,19 L63,22 C63,22.5522847 63.4477153,23 64,23 L64.5,23 L64.5,23 C64.75,23 65,22.9 65.2,22.71 L68.9,19 L75,19 C76.1045695,19 77,18.1045695 77,17 L77,5 C77,3.89 76.1,3 75,3 L59,3 L59,3 Z M59,5 L75,5 L75,17 L68.08,17 L65,20.08 L65,17 L59,17 L59,5 L59,5 Z M67.19,6.5 C66.3,6.5 65.59,6.68 65.05,7.04 C64.5,7.4 64.22,8 64.27,8.69 C55.21,8.69 61.57,8.69 66.24,8.69 C66.24,8.41 66.34,8.2 66.5,8.06 C66.7,7.92 66.92,7.85 67.19,7.85 C67.5,7.85 67.77,7.93 67.95,8.11 C68.13,8.28 68.22,8.5 68.22,8.8 C68.22,9.08 68.14,9.33 68,9.54 C67.83,9.76 67.62,9.94 67.36,10.08 C66.84,10.4 66.5,10.68 66.29,10.92 C66.1,11.16 66,11.5 66,12 L68,12 C68,11.72 68.05,11.5 68.14,11.32 C68.23,11.15 68.4,11 68.66,10.85 C69.12,10.64 69.5,10.36 69.79,10 C70.08,9.63 70.23,9.24 70.23,8.8 C70.23,8.1 69.96,7.54 69.42,7.12 C68.88,6.71 68.13,6.5 67.19,6.5 L67.19,6.5 Z M66,13 L66,15 L68,15 L68,13 L66,13 Z" id="Shape"></path>
                  </g>
              </g>
          </g>
      </g>
    </svg>

  );
};

export default IconSurvey;