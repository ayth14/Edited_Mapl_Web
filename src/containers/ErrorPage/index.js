import { Link } from 'react-router-dom';
import tw from 'tailwind-styled-components';
import { AuthContainer } from '@components';
import maplLogo from '@assets/images/maplLogo.png';

const ErrorPage = () => {
  return (
    <AuthContainer>
      <Container>
        <Logo src={maplLogo} />
        <BigText>404</BigText>
        <NormalText>
          Page not found{" "}
          <Link to={"/"} className="text-black">
            Go back!
          </Link>
        </NormalText>
      </Container>
    </AuthContainer>
  );
};

const Container = tw.div`
bg-overlay
relative
flex
flex-col 
justify-center 
items-center 
w-screen 
h-screen 
bg-center 
bg-cover 
`;

const Logo = tw.img`
w-[15vw]
`;

const BigText = tw.h1`
text-[12vw] 
font-bold 
text-black  
`;

const NormalText = tw.h6`
sm:text-[20px]
md:text-[30px]
lg:text-[40px]
font-extrabold 
text-black
`;

export default ErrorPage;