import React from "react";
import tw from "tailwind-styled-components";
import { AiOutlineFilePdf } from "react-icons/ai";

function Specification() {
  return (
    <Container>
      <HeadingText>{"Description"}</HeadingText>
      <ProductContent>
        {`Jasper Newton Daniels is the namesake of this whiskey and is said to have learned the craft of distilling whiskey as a small child. Back in 1860, at the age of only 14, he took over the distillery where he had previously worked. Six years later, the company received an official distilling license. The old no. 7 or "Jack Daniel's Black Label" is one of the best-selling whiskeys on this planet and of course the flagship of the brand. For decades it was also the only whiskey made in the distillery. The famous Tennessee Whiskey is made from the Sour Mash Bill made from 80% corn, 12% barley and 8% rye. s products are filtered through maple charcoal in the so-called Lincoln Country process before being stored in the specially manufactured oak barrels. Ironically, the Old No. 7 was made in a so-called "Dry County" where the sale of spirits and wine has been banned since Prohibition - so the shops and restaurants around Lynchburg are not allowed to sell any alcohol except beer. That didn't stop Jack Daniel's from becoming the most popular whiskey brand in the world. The Apple Whiskey was made with real apples and the world-famous No. 7 whiskey made. where the sale of spirits and wine has been banned since Prohibition - so the shops and restaurants around Lynchburg are not allowed to sell any alcohol except beer. That didn't stop Jack Daniel's from becoming the most popular whiskey brand in the world. The Apple Whiskey was made with real apples and the world-famous No. 7 whiskey made. where the sale of spirits and wine has been banned since Prohibition - so the shops and restaurants around Lynchburg are not allowed to sell any alcohol except beer. That didn't stop Jack Daniel's from becoming the most popular whiskey brand in the world. The Apple Whiskey was made with real apples and the world-famous No. 7 whiskey made.`}
      </ProductContent>
      <CustomBtn>
        <AiOutlineFilePdf color="rgb(8 82 178)" />
        <Text>{"Download fact sheet as PDF"}</Text>
      </CustomBtn>
    </Container>
  );
}

const Container = tw.div`
flex 
flex-col
`;
const HeadingText = tw.span`
text-xl 
font-raleway 
font-bold
`;
const ProductContent = tw.span`
text-sm 
text-left
py-3
`;
const CustomBtn = tw.button`
flex items-center 
py-4
`;
const Text = tw.span`
text-linkColor
`;

export default Specification;
