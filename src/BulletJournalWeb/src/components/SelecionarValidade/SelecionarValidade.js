import React from 'react';

import ButaoValidade from '../ButaoValidade';

export default function selecionarValidade(props) {
	const em1dias = props.validade === "1";
	const em2dias = props.validade === "2";
	const em3dias = props.validade === "3";
	const em4dias = props.validade === "4";
	const em5dias = props.validade === "5";
	const em6dias = props.validade === "6";
	const em7dias = props.validade === "7";
	const cor = props.invalidValue ? '#d50000' : '#cccccc';
	const style = {
    boxSizing: 'border-box',
    border: `1px solid ${cor}`,
    borderRadius: '5px',
    padding: '3px',
    paddingBottom: '0'
  };
 
  return (
    <div style={style}>
      <ButaoValidade
        selected={em1dias}
        validade={'1'}
        atualizarValidade={props.atualizarValidade}
      />
      <ButaoValidade
        selected={em2dias}
        validade={'2'}
        atualizarValidade={props.atualizarValidade}
      />
	  <ButaoValidade
        selected={em3dias}
        validade={'3'}
        atualizarValidade={props.atualizarValidade}
      />
      <ButaoValidade
        selected={em4dias}
        validade={'4'}
        atualizarValidade={props.atualizarValidade}
      />
	  <ButaoValidade
        selected={em5dias}
        validade={'5'}
        atualizarValidade={props.atualizarValidade}
      />
      <ButaoValidade
        selected={em6dias}
        validade={'6'}
        atualizarValidade={props.atualizarValidade}
      />
	  <ButaoValidade
        selected={em7dias}
        validade={'7'}
        atualizarValidade={props.atualizarValidade}
      />
    </div>
  );
}

