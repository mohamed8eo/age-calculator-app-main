import { useState } from "react";
import Age_Calc from "./components/Age_Calc";
import Input_Field from "./components/Input_Field"

const App = () => {
  const [showError , setShowError] =useState(false)
  const Currentyear = new Date().getFullYear();
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');
  const [result, setResult] = useState({ years: '--', months: '--', days: '--' });

  const calculateAge = () => {
    // Validate inputs
    if (!day || !month || !year) {
      setShowError(true)
      setResult({ years: '--', months: '--', days: '--' });
      return;
    }

    const birthDate = new Date(year, month - 1, day);
    const today = new Date();

    // Validate date is valid and in the past
    if (birthDate > today || isNaN(birthDate.getTime())) {
      setResult({ years: '--', months: '--', days: '--' });
      return;
    }

    let years = today.getFullYear() - birthDate.getFullYear();
    let months = today.getMonth() - birthDate.getMonth();
    let days = today.getDate() - birthDate.getDate();

    // Handle negative days
    if (days < 0) {
      months--;
      const lastMonth = new Date(today.getFullYear(), today.getMonth() - 1, 0);
      days += lastMonth.getDate();
    }

    // Handle negative months
    if (months < 0) {
      years--;
      months += 12;
    }

    // Validate final results
    if (years < 0) {
      setResult({ years: '--', months: '--', days: '--' });
      return;
    }

    setResult({ 
      years, 
      months, 
      days
    });
  }


  return (
    <div className="flex justify-center items-center bg-[#f0f0f0] h-[100vh]">
      <div className="px-11 py-8 bg-white w-[700px] h-[555px] rounded-3xl rounded-br-[145px] flex flex-col ">
        <div className="flex gap-7 items-center">
          <Input_Field
            text={`day`}
            placeholder_text={`DD`}
            maxLength={2}
            maxNumber={30}
            onValueChange={(value) => setDay(value)}
            showError={showError && !day}
          />
          <Input_Field
            text={`month`}
            placeholder_text={`MM`}
            maxLength={2}
            maxNumber={12}
            onValueChange={(value) => setMonth(value)}
            showError={showError && !month}
          />
          <Input_Field
            text={`year`}
            placeholder_text={`yyyy`}
            maxLength={4}
            maxNumber={Currentyear}
            onValueChange={(value) => setYear(value)}
            showError={showError&& !year}
          />
        </div>
        <div className="flex items-center">
          <div className="w-[542px] h-[1px] bg-[#dbdbdb]"/>
          <div
            className="w-[70px] h-[70px] flex justify-center items-center bg-[#854dff] hover:bg-black cursor-pointer rounded-full"
            onClick={calculateAge}>
            <img
              src="./assets/images/icon-arrow.svg"
              alt="arrow down icon"
              className="w-[30px]"
            />
          </div>
        </div>
        <div>
          <Age_Calc
            text={'years'}
            value ={result.years}
          />
          <Age_Calc
            text={'months'}
            value ={result.months}
          />
          <Age_Calc
            text={'days'}
            value ={result.days}
          />
        </div>
      </div>
    </div>
  )
}


export default App

