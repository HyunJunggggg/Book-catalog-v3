import { useRef } from "react";
import './HoverButton.css';

function HoverButton({btnLabel, children, btnClassName}) {
  const buttonRef = useRef();

  function openAdd(){
    buttonRef.current.showModal();
  }
  return (
    <>
      <button onClick={openAdd} className={btnClassName || "hover-button"}>
      {btnLabel || "New"}
      </button>
      
      <dialog ref={buttonRef}>
        {children}
      </dialog>
      
      {/* <div className="book">
        <button className="hover-button">{HoverButtonLabel}</button>
      </div> */}
    </>
  );
}

export default HoverButton;
