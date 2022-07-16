import React from 'react'
import tw from 'tailwind-styled-components';

const NutritionValues = () => {
    const values = [
        {title: "Nutrinal value per ", quantity: "100g",},
        {title: "Energy", quantity: "690 kJ (165 kcal)",},
        {title: "Fat", quantity: "9g",},
        {title: "of which saturates", quantity: "4g",},
        {title: "Carbohydrate", quantity: "0g",},
        {title: "of which sugars", quantity: "0g",},
        {title: "Fibre", quantity: "0g",},
        {title: "Protein", quantity: "21g",},
        {title: "Salt", quantity: "0.1g",},
    ]
  return (
    <div>
        <HeadingText>{"Nutritional Values"}</HeadingText>
        {values.map((value, index)=>{
            return(
                <NutritionContent key={index}>
                    <span>{value.title}</span>
                    <span>{value.quantity}</span>
                </NutritionContent>
            );
        })}
    </div>
  )
}
const HeadingText = tw.span`
text-xl 
font-raleway 
font-bold
`
const NutritionContent = tw.div`
bg-color235 
even:bg-transparent 
flex 
items-center 
justify-between 
py-3 px-2
`
export default NutritionValues