import React from 'react';

import GenderButton from '../GenderButton';

export default function GenderSelector(props) {
	const em1dias = props.gender === "1";
	const em2dias = props.gender === "2";
	const em3dias = props.gender === "3";
	const em4dias = props.gender === "4";
	const em5dias = props.gender === "5";
	const em6dias = props.gender === "6";
	const em7dias = props.gender === "7";
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
      <GenderButton
        selected={em1dias}
        gender={'1'}
        updateGender={props.updateGender}
      />
      <GenderButton
        selected={em2dias}
        gender={'2'}
        updateGender={props.updateGender}
      />
	  <GenderButton
        selected={em3dias}
        gender={'3'}
        updateGender={props.updateGender}
      />
      <GenderButton
        selected={em4dias}
        gender={'4'}
        updateGender={props.updateGender}
      />
	  <GenderButton
        selected={em5dias}
        gender={'5'}
        updateGender={props.updateGender}
      />
      <GenderButton
        selected={em6dias}
        gender={'6'}
        updateGender={props.updateGender}
      />
	  <GenderButton
        selected={em7dias}
        gender={'7'}
        updateGender={props.updateGender}
      />
    </div>
  );
}

