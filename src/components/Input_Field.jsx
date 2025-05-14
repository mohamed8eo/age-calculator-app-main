import { useState } from "react";

const Input_Field = ({ text, placeholder_text, maxLength, maxNumber, onValueChange, showError }) => {
  const [value, setValue] = useState('');
  
  const handlevalue = (event) => {
    const currentvalue = parseInt(event.target.value);
    setValue(currentvalue);
    onValueChange(currentvalue); // Pass value back to parent
  }

  const handlekeyPress = () => {
    if (!/[0-9]/.test(event.key)) {
      event.preventDefault();
    }
  }

  return (
    <>
      <div className="flex flex-col gap-1.5 relative">
        <span className={`uppercase text-[13px] font-[700] tracking-[3px] ${
          showError || value > maxNumber ? 'text-[#ff5757]' : 'text-[#716f6f]'
        }`}>
          {text}
        </span>
        <input
          type="text"
          placeholder={placeholder_text}
          onChange={handlevalue}
          maxLength={maxLength}
          onKeyPress={handlekeyPress}
          className={`font-[800] border border-solid uppercase cursor-pointer
            w-[140px] h-[57px] pl-5 rounded-md text-[25px] outline-0 focus:border-2 ${
            showError || value > maxNumber ? 'border-[#ff5757]' : 'border-[#dbdbdb] focus:border-[#854dff]'
          }`}
        />
        {showError && !value && (
          <span className="text-[#ff5757] font-[400] italic absolute bottom-[-18px] text-[10px]">
            This field is required
          </span>
        )}
        {value > maxNumber && (
          <span className="text-[#ff5757] font-[400] italic absolute bottom-[-18px] text-[10px]">
            {`Must be a Valid ${text}`}
          </span>
        )}
      </div>
    </>
  )
}

export default Input_Field

