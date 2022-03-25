import React from 'react'
import { func, string } from 'prop-types';
import ToggleContainer from './ToggleContainer'
import powerbtn from '../Assets/Power.png'

const Toggle = ({ theme, toggleTheme }) => {
  const isLight = theme === 'light';

  return (
      <ToggleContainer type='button' lightTheme={isLight} onclick={toggleTheme}>
      <img src={powerbtn} width={30} height={30} alt='power'/>
      </ToggleContainer>
  );
};

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}


export default Toggle