import { useState } from "react";

const Footer = () => {
  const [isClicked, setIsClicked] = useState(true);

  const handleClick = () => {
    setIsClicked((isClicked) => !isClicked);
  };

  return (
    <>
      <div className="footerContainer bg-gray-100 p-4 rounded-md shadow-md mt-6">
        <p className="text-blue-600 underline cursor-pointer" onClick={handleClick}>
          Why do we need to know this?
        </p>
        <p className={`${isClicked ? "hidden" : "block"} mt-2 text-gray-700`}>
          Your date of birth determines if you can use our platform. You must be 18 years old to use our services.
        </p>
      </div>
    </>
  );
};

export default Footer;
