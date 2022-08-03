import React from 'react';
import tw from 'tailwind-styled-components';

const AppLoader = ({ text, loading }) => {
  return (
    <Container style={{ fontFamily: 'Source Sans Pro, sans-serif' }} >
      {text ? text : <Loader />}
    </Container>
  )
}

const Container = tw.div`
w-full 
h-full 
flex 
justify-center 
items-center
font-bold
text-black/30
text-2xl
`;
const Loader = tw.div`
w-20
h-20
bg-transparent
border-8
animate-spin
rounded-full
border-t-logoColor
border-logoColor
`

export default AppLoader;
