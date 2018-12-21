import React from 'react';

import './index.css';
import ImagemValidade from '../ImagemValidade';

export default function ButaoValidade(props) {
  return (
    <a 
      className={props.selected ? 
        "validade-button selected-validade-button" : 
        "validade-button"
      }
      href="#!"
      onClick={event => props.atualizarValidade(event, props.validade)}
    >
      <ImagemValidade validade={props.validade} />
    </a>
  );
}

