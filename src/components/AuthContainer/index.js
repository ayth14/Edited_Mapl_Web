import React from 'react';
import tw from 'tailwind-styled-components';

const AuthContainer = (props) => {
  return (
    <Container>
      {props.children}
    </Container>
  )
}

const Container = tw.div`
flex
fixed
justify-center
items-center
inset-0
bg-cover
bg-AuthBackground
before:bg-BgOverlay
before:absolute
before:opacity-90
before:top-0
before:right-0
before:bottom-0
before:left-0
`

export default AuthContainer;