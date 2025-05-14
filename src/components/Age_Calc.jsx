const Age_Calc = ({text, value}) => {
  // Format the value and text for better display
  const formatDisplay = () => {
    if (value === '--' || !value) return '--';
    
    const formattedValue = value < 10 ? `0${value}` : value;
    
    return formattedValue;
  };

  return (
    <div className="flex items-center gap-2.5">
      <span className="text-[#854dff] text-[70px] font-[800] tracking-[-3px] italic">
        {formatDisplay()}
      </span>
      <h1 className="text-[75px] font-[800] text-black italic">
        {text}
      </h1>
    </div>
  )
}

export default Age_Calc