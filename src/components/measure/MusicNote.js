import React, { Component } from 'react';
import shouldPureComponentUpdate from 'react-pure-render/function';

export default class MusicNote extends Component {
  shouldComponentUpdate = shouldPureComponentUpdate;

  renderQuarterNote = (x, y, color) => {
    return (
      <svg x={x} y={y-7} style={{ overflow: 'visible' }}>
        <g transform={'scale(0.75)'}>
          <path strokeWidth={0.2} fill={color}
            d='M 11.09297,35.38984 C 14.48881,33.56987 16.29825,30.27529 15.18519,27.79688 C 13.99793,25.15324 9.91818,24.40716 6.07861,26.13151 C 2.23905,27.85587 0.08645,31.40091 1.27371,34.04454 C 2.46098,36.68818 6.54072,37.43426 10.38029,35.70991 C 10.62026,35.60214 10.86657,35.51117 11.09297,34.38984 z '
          />
          <path strokeWidth={1.5} d='M 14.72547,29.05645 L 14.72547,0.46888' stroke={color} />
        </g>
      </svg>
    );
  };

  renderHalfNote = (x, y, color) => {
    return (
      <svg x={x} y={y-7} style={{ overflow: 'visible' }}>
        <g transform='matrix(-1,0,0,-1,254,262)'>
          <path d='M 237.68484,218.18353 C 234.289,220.0035 232.47956,223.29808 233.59262,225.77649 C 234.77988,228.42013 238.85963,229.16621 242.6992,227.44186 C 246.53876,225.7175 248.69136,222.17246 247.5041,219.52883 C 246.31683,216.88519 242.23709,216.13911 238.39752,217.86346 C 238.15755,217.97123 237.91124,218.0622 237.68484,218.18353 z M 238.79457,220.42569 C 239.0358,220.30136 239.28005,220.20766 239.53576,220.09282 C 242.80883,218.62288 245.96997,218.55375 246.59187,219.93851 C 247.21377,221.32327 245.06209,223.64013 241.78902,225.11008 C 238.51594,226.58002 235.3548,226.64915 234.73291,225.26439 C 234.15959,223.98781 235.94804,221.89278 238.79457,220.42569 z '
            style={{ opacity: 0.9, fill: color, fillOpacity:1, fillRule: 'evenOdd', strokeWidth: 0.2, strokeMiterlimit: 4, strokeDasharray: 'none', strokeDashoffset: 0, strokeOpacity: 1 }}
          />
          <path d='M 234.05234,224.51692 L 234.05234,258.10449'
            style={{ stroke: color, strokeWidth: 1.5, strokeLinecap: 'butt', strokeLinejoin: 'miter', strokeMiterlimit: 4, strokeDasharray: 'none', strokeOpacity: 1 }}
          />
        </g>
      </svg>
    );
  };

  renderWholeNote = (x, y, color) => {
    return (
      <svg x={x} y={y} style={{ overflow: 'visible' }}>
        <g transform='scale(1.5)'>
          <path fill={color} d="M6.65021 6.42029c-1.717-.09085-3.05874-1.61496-3.59713-3.19103-.32619-.92504-.14703-2.31276.93966-2.5726C5.56715.38926 6.8736 1.72667 7.60581 3.00653c.5216.94927.80997 2.44415-.16802 3.19662-.23221.15573-.51292.21819-.78758.21714zM9.38546 1.017C7.45101-.1579 5.00741-.24942 2.88913.4081 1.5473.87725.01269 1.87523 0 3.4995c-.00093 1.59146 1.48 2.58425 2.79049 3.05709 2.07469.67865 4.46847.61897 6.40552-.4629 1.09648-.58336 2.06833-1.79134 1.73878-3.13026-.18121-.86097-.84075-1.5052-1.54933-1.94643z"/>
        </g>
      </svg>
    );
  };

  renderEighthNote = (x, y, color) => {
    return (
      <svg x={x - 8} y={y - 15} style={{ overflow: 'visible' }}>
        <g transform='scale(0.4)'>
          <path fill={color} d="M23.71961 87.85213c-5.58785-5.02026-2.53077-13.19751 6.69317-17.90321 3.07692-1.56973 5.34644-2.24914 9.40578-2.12895 2.46224.06314 5.29391 1.48242 5.29391 1.48242 0-18.05494-.06821-52.28016-.06821-69.15127 1.00028.00563 1.64015-.00648 3.04094-.00648 0 .99254-.01335 1.7062-.01335 2.58602 0 .85738.06034 1.41406.1432 1.95287.96866 6.29923 2.37919 8.7789 9.42205 16.56374 8.9072 9.84558 11.49436 15.77596 11.44145 23.65154-.04921 7.38807-6.54795 23.21243-8.02557 22.55589 2.05465-5.53599 4.82532-11.50844 5.56223-16.50593.90056-6.10733-1.58049-14.72667-5.57333-19.27425-3.28359-3.73981-10.84654-7.08467-12.90954-7.08467 0 0-.08757 36.37228-.08757 50.16231 0 2.37471-2.15126 6.40059-3.36307 7.84809-5.52631 6.60112-16.13366 9.58986-20.96209 5.25188z"/>
        </g>
      </svg>
    );
  };

  renderSixteenthNote = (x, y, color) => {
    return (
      <svg x={x - 8} y={y - 15} style={{ overflow: 'visible' }}>
        <g transform='scale(0.4)'>
          <path fill={color} d="M23.71961 87.85213c-5.58785-5.02026-2.53077-13.19751 6.69317-17.90321 3.07692-1.56973 5.34644-2.24914 9.40578-2.12895 2.46224.06314 5.29391 1.48242 5.29391 1.48242 0-18.05494-.06821-52.28016-.06821-69.15127 1.00028.00563 1.64015-.00648 3.04094-.00648 0 .99254-.01335 1.7062-.01335 2.58602 0 .85738.06034 1.41406.1432 1.95287.96866 6.29923 2.37919 8.7789 9.42205 16.56374 8.9072 9.84558 11.49436 15.77596 11.44145 23.65154-.04921 7.38807-6.54795 23.21243-8.02557 22.55589 2.05465-5.53599 4.82532-11.50844 5.56223-16.50593.90056-6.10733-1.58049-14.72667-5.57333-19.27425-3.28359-3.73981-10.84654-7.08467-12.90954-7.08467 0 0-.08757 36.37228-.08757 50.16231 0 2.37471-2.15126 6.40059-3.36307 7.84809-5.52631 6.60112-16.13366 9.58986-20.96209 5.25188z"/>
        </g>
      </svg>
    );
  };

  renderNote = (x, y, color) => {

    switch(this.props.note.duration) {
      case 'q':
        return this.renderQuarterNote(x + 1, y, color);
      case 'h':
        return this.renderHalfNote(x + 1, y, color);
      case 'w':
        return this.renderWholeNote(x + 1, y, color);
      case 'e':
        return this.renderEighthNote(x + 1, y, color);
      case 's':
        return this.renderSixteenthNote(x + 1, y, color);
      default:
        return null;
    }
  };

  renderDot = (dotted, x, stringOffset, color) => {
    if(!dotted) {
      return null;
    }
    const y = 119 - (13 * stringOffset);

    return (
      <svg x={x} y={y} width={20} height={20}>
        <circle cx={6.5} cy={10} r={1.5} fill={color} stroke={color} />
      </svg>
    );
  };

  renderTremolo = (tremolo, x, stringOffset, color) => {
    if(!tremolo) {
      return null;
    }
    const y = 100 - (13 * stringOffset);

    return (
      <svg x={x + 1.5} y={y} >
        <g transform='scale(0.30)'>
          <polygon fill={color} points='31.5,7 3.75,21.25 3.75,14.5 31.5,0.25'/>
          <polygon fill={color} points='31.5,19.25 3.75,33.5 3.75,26.75 31.5,12.5'/>
          <polygon fill={color} points='31.5,31.5 3.75,45.75 3.75,39 31.5,24.75'/>
        </g>
      </svg>
    );
  };

  renderVibrato = (vibrato, x, color) => {
    if(!vibrato) {
      return null;
    }

    return (
      <svg x={x + 1.5} y={10}>
        <g transform='scale(8.00, 6.00)'>
          <path fill={color}
             d='M 1.864,0.316 C 1.88,0.292 1.9,0.28 1.928,0.28 c 0.044,0 0.08,0.036 0.08,0.08 0,0.016 -0.004,0.032 -0.012,0.044 C 1.872,0.592 1.748,0.776 1.624,0.964 1.608,0.988 1.584,1 1.556,1 1.532,1 1.512,0.992 1.496,0.972 L 1.104,0.496 0.792,0.964 C 0.776,0.988 0.752,1 0.724,1 0.7,1 0.68,0.992 0.664,0.972 L 0.268,0.496 C 0.228,0.56 0.184,0.62 0.144,0.684 0.128,0.708 0.108,0.72 0.08,0.72 0.036,0.72 0,0.684 0,0.64 0,0.624 0.004,0.608 0.012,0.596 0.136,0.408 0.26,0.224 0.384,0.036 0.4,0.012 0.424,0 0.452,0 0.476,0 0.496,0.008 0.512,0.028 L 0.904,0.504 1.216,0.036 C 1.232,0.012 1.256,0 1.284,0 1.308,0 1.328,0.008 1.344,0.028 L 1.74,0.504 C 1.78,0.44 1.824,0.38 1.864,0.316 Z' />
        </g>
        <g transform='translate(13.0, 0.0)'>
          <g transform='scale(8.00, 6.00)'>
            <path fill={color}
               d='M 1.864,0.316 C 1.88,0.292 1.9,0.28 1.928,0.28 c 0.044,0 0.08,0.036 0.08,0.08 0,0.016 -0.004,0.032 -0.012,0.044 C 1.872,0.592 1.748,0.776 1.624,0.964 1.608,0.988 1.584,1 1.556,1 1.532,1 1.512,0.992 1.496,0.972 L 1.104,0.496 0.792,0.964 C 0.776,0.988 0.752,1 0.724,1 0.7,1 0.68,0.992 0.664,0.972 L 0.268,0.496 C 0.228,0.56 0.184,0.62 0.144,0.684 0.128,0.708 0.108,0.72 0.08,0.72 0.036,0.72 0,0.684 0,0.64 0,0.624 0.004,0.608 0.012,0.596 0.136,0.408 0.26,0.224 0.384,0.036 0.4,0.012 0.424,0 0.452,0 0.476,0 0.496,0.008 0.512,0.028 L 0.904,0.504 1.216,0.036 C 1.232,0.012 1.256,0 1.284,0 1.308,0 1.328,0.008 1.344,0.028 L 1.74,0.504 C 1.78,0.44 1.824,0.38 1.864,0.316 Z' />
          </g>
        </g>
      </svg>
    );
  };

  renderTrill = (trill, x, color) => {
    if(!trill) {
      return null;
    }

    return (
      <svg x={x + 1.5} y={10}>
        <text y={7} style={{ fontSize: 12 }}>tr</text>
        <g transform='translate(11.0, 0.0)'>
          <g transform='scale(8.00, 6.00)'>
            <path fill={color}
               d='M 1.864,0.316 C 1.88,0.292 1.9,0.28 1.928,0.28 c 0.044,0 0.08,0.036 0.08,0.08 0,0.016 -0.004,0.032 -0.012,0.044 C 1.872,0.592 1.748,0.776 1.624,0.964 1.608,0.988 1.584,1 1.556,1 1.532,1 1.512,0.992 1.496,0.972 L 1.104,0.496 0.792,0.964 C 0.776,0.988 0.752,1 0.724,1 0.7,1 0.68,0.992 0.664,0.972 L 0.268,0.496 C 0.228,0.56 0.184,0.62 0.144,0.684 0.128,0.708 0.108,0.72 0.08,0.72 0.036,0.72 0,0.684 0,0.64 0,0.624 0.004,0.608 0.012,0.596 0.136,0.408 0.26,0.224 0.384,0.036 0.4,0.012 0.424,0 0.452,0 0.476,0 0.496,0.008 0.512,0.028 L 0.904,0.504 1.216,0.036 C 1.232,0.012 1.256,0 1.284,0 1.308,0 1.328,0.008 1.344,0.028 L 1.74,0.504 C 1.78,0.44 1.824,0.38 1.864,0.316 Z' />
          </g>
        </g>
      </svg>
    );
  };

  render() {
    const { x, y, fret, color } = this.props;

    let width = 12;
    if(fret > 9) {
      width += 6;
    }

    //  use rotate(180 9 31) to flip quarter note
    return (
      <g>
        { this.renderNote(x, y, color) }
      </g>
    );
  }
}
