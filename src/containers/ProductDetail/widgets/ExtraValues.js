import React from 'react'
import tw from 'tailwind-styled-components';
function ExtraValues() {
    const info = [
        {title: "Item number", value: "70491"},
        {title: "Alcohol content", value: "35%"},
        {title: "Bottle content", value: "70cl"},
        {title: "Country of origin", value: "United States"},
        {title: "Region", value: "Tennessee"},
        {title: "Bottler", value: "Jack Daniel Distillery, 280 Lynchburg Hwy, Lynchburg, Tennessee 37352, États-Unis"},
        {title: "Brand", value: "Jack Daniels"},
        {title: "Type", value: "whiskey"},
        {title: "Application", value: "Pure or in mixed drinks"},
        {title: "Tasting Note", value: "Intense apple aromas with brown sugar, raisins and resin on the nose. Sweet on the palate with apple notes, toast, oranges, wood and cinnamon."},
        {title: "Traffic Denomination", value: "liqueur"},
        {title: "Details", value: "Flavored with real apples"},
        {title: "Ingredients", value: "A list of ingredients is not required according to Art. 16 Para. 4 of REGULATION (EU) No. 1169/2011."},
        {title: "Additives", value: "None"},
        {title: "Packaging", value: "None"},
    ]
  return (
    <div>
        <HeadingText>{"Extra Information"}</HeadingText>
        {info.map((values)=>{
            return(
                <ExtraContent>
                    <p className='mr-2 text-color155 max-w-fit'>{values.title}</p>
                    <p>{values.value}</p>
                </ExtraContent>
            );
        })}
    </div>
  )
}

const HeadingText = tw.span`
text-xl 
font-raleway 
font-bold
py-3
`
const ExtraContent = tw.div`
border-b 
border-b-color172 
flex 
items-center
py-3
`
export default ExtraValues