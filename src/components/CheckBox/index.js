import tw from 'tailwind-styled-components';
import { PrimaryText } from '@components';

const CheckBox = ({ title, onChange, errorText, containerStyle, inputStyle, titleStyle, className, check, titleClassName }) => {
  return (
    <div className={`${containerStyle} cursor-pointer flex flex-row`} onClick={onChange}>
      <input
        className={`${className} accent-black focus:outline-none`}
        checked={check}
        type='checkbox'
        style={{ ...inputStyle }}
      />
      <PrimaryText style={{ ...titleStyle }} className={`${titleClassName} ml-3 text-[12px] font-semibold font-sans`}>{title}</PrimaryText>
      {errorText && <ErrorText>{`${errorText}`}</ErrorText>}
    </div>
  );
};

const ErrorText = tw.p`
text-sm
text-red-500`;

export default CheckBox;
