import * as React from "react";

const SvgComponent = (props) => (
  <svg
    width={354}
    height={393}
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <g filter='url(#a)'>
      <path
        d='M168.568 30.998a16 16 0 0 1 16 0l121.783 70.311a16 16 0 0 1 8 13.857v140.623a16 16 0 0 1-8 13.856l-121.783 70.312a16 16 0 0 1-16 0L46.785 269.645a16 16 0 0 1-8-13.856V115.166a16 16 0 0 1 8-13.857l121.783-70.311Z'
        fill='#EAE2B7'
      />
    </g>
    <g filter='url(#b)'>
      <path
        d='M184.446 15.767 319.602 93.8a15.757 15.757 0 0 1 7.878 13.646v156.064a15.758 15.758 0 0 1-7.878 13.646l-135.156 78.032a15.758 15.758 0 0 1-15.757 0L33.534 277.155a15.758 15.758 0 0 1-7.878-13.646V107.445a15.757 15.757 0 0 1 7.878-13.646l135.155-78.032a15.757 15.757 0 0 1 15.757 0Z'
        stroke='#D62828'
        strokeWidth={4}
      />
    </g>
    <defs>
      <filter
        id='a'
        x={18.785}
        y={18.854}
        width={315.566}
        height={353.246}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={10} />
        <feGaussianBlur stdDeviation={10} />
        <feColorMatrix values='0 0 0 0 0.160784 0 0 0 0 0.160784 0 0 0 0 0.164706 0 0 0 0.07 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_294_43' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_294_43'
          result='shape'
        />
      </filter>
      <filter
        id='b'
        x={1.46}
        y={0.558}
        width={350.216}
        height={392.034}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feColorMatrix
          in='SourceAlpha'
          values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          result='hardAlpha'
        />
        <feOffset dy={11.098} />
        <feGaussianBlur stdDeviation={11.098} />
        <feColorMatrix values='0 0 0 0 0.160784 0 0 0 0 0.160784 0 0 0 0 0.164706 0 0 0 0.07 0' />
        <feBlend in2='BackgroundImageFix' result='effect1_dropShadow_294_43' />
        <feBlend
          in='SourceGraphic'
          in2='effect1_dropShadow_294_43'
          result='shape'
        />
      </filter>
    </defs>
  </svg>
);

export default SvgComponent;
