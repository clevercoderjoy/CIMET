import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Form = () => {

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const dob = e.target[0].value.split("-");
    const day = Number(dob[2]);
    const month = Number(dob[1]);
    const year = Number(dob[0]);
    const checkEligibility = calculateCurrentAge(day, month, year);
    navigate("/results", { state: { finalAge: checkEligibility } });
  }

  const calculateCurrentAge = (day, month, year) => {
    const today = new Date();
    const birthDate = new Date(year, month - 1, day);
    const age = today.getFullYear() - birthDate.getFullYear();
    const hadBdayThisYear = today.getMonth() > birthDate.getMonth() || (today.getMonth() === birthDate.getMonth() && today.getDate() >= birthDate.getDate());
    const finalAge = hadBdayThisYear ? age : age - 1;
    return finalAge;
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-gray-50 p-6 rounded-lg shadow-lg max-w-md mx-auto mt-8">
        <div className="dobContainer mb-4">
          <label htmlFor="dob" className="block text-gray-700 text-sm font-semibold mb-2">
            What is your date of birth?
          </label>
          <input
            type="date"
            id="dob"
            autoFocus
            required
            placeholder="dd/mm/yyyy"
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="btnContainer text-center">
          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Submit
          </button>
        </div>
      </form>
    </>
  );
}

export default Form;
