import tw from "tailwind-styled-components";
import React from "react";
import { SecondaryText } from "@components";

const Button = (props) => {
  const {
    className,
    title,
    titleStyle,
    titleclassname,
    onClick,
    disabled,
    style,
    icon,
    iconStyle,
    iconclassname,
    bottomlabel
  } = props;

  const checkOpacity = disabled ? 0.5 : 1

  const styles = {
    ...style,
    opacity: checkOpacity
  }

  return (
    <CustomButton style={styles} onClick={onClick} className={`${className}`} disabled={disabled ? true : false}>
      {icon ? <Img src={icon} style={{ ...iconStyle }} className={iconclassname}/> : null}
      <SecondaryText style={{ ...titleStyle }} className={`${titleclassname} font-semibold text-[12px]`}>{title}</SecondaryText>
      {bottomlabel && <HoverText>{bottomlabel}</HoverText>}
    </CustomButton>
  )
}

const CustomButton = tw.button`
flex
w-[89%]
p-4
pl-4
justify-center
self-center
transition
delay-75
hover:shadow-lg
group
`;

const Img = tw.img`
flex
w-[28px]
h-full
`;

const HoverText = tw.span`
inline-flex 
text-color456
text-[14px]
font-semibold
text-color456
overflow-hidden 
ease-in-out duration-[0.8s] 
tracking-[-2em] 
group-hover:tracking-normal
`;

export default Button;
