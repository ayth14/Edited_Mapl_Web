import React, { useEffect, useState } from 'react';
import tw from 'tailwind-styled-components';
import { useLocation, useNavigate } from 'react-router-dom';
import theme from '@theme';

const AuthHeader = () => {
  const [state, setState] = useState({
    toggle: false,
  })
  const { toggle } = state;

  const navigate = useNavigate();
  const location = useLocation();

  const toggleHandler = () => {
    navigate('/')
  }

  const toggleInput = () => {
    navigate('/registration')
  }
  
  return (
    <div className="flex flex-row w-[90%] self-center mt-[20px]">
      <div className='w-full'>
        <ToggleButton
            active={'/'}
            onClick={toggleHandler}
            className="py-2 font-raleway text-sm md:text-lg"
            style={{
              width: "50%",
              fontWeight: location.pathname === '/' ? '600': '300',
              borderBottomWidth: location.pathname === '/' ? 2 : 1,
              borderBottomColor: location.pathname === '/' ? theme.colors.black : theme.colors.gray[0],
            }}
            >
            {"SIGN IN"}
          </ToggleButton>
          <ToggleButton
            active={'/registration'}
            onClick={toggleInput}
            className="py-2 font-raleway text-sm md:text-lg"
            style={{
              width: "50%",
              fontWeight: (location.pathname === '/registration' || location.pathname === '/bussinessRegistration') ? '600' : '300',
              borderBottomWidth: (location.pathname === '/registration' || location.pathname === '/bussinessRegistration')  ? 2 : 1,
              borderBottomColor: (location.pathname === '/registration' || location.pathname === '/bussinessRegistration')  ? theme.colors.black : theme.colors.gray[0],
            }}
          >
            {"REGISTRATION"}
          </ToggleButton>
          </div>
        </div>
  )
}

const ToggleButton = tw.button`
transition-[5s]
lg:text-[18px]
lg:tracking-[0.17px]
tracking-[0.13px]
uppercase
`;

export default AuthHeader;