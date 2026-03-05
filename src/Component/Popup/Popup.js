import React, { useRef, useEffect } from "react";

const Popup = ({ closePopup }) => {

  const popupRef = useRef();

  useEffect(() => {

    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        closePopup();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };

  }, []);

  return (
    <div id="popupcontainer" ref={popupRef}>
      <h2>Special Offer</h2>
      <button onClick={closePopup}>Close</button>
    </div>
  );
};

export default Popup;