import React from "react";
import { useNavigate } from "react-router-dom";
import "./CallToAction.css";

export default function CallToAction(props) {
  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate(`${props.onClick}`);
  };

  return (
    <>
      <button
        onClick={handleButtonClick}
        type={props.type}
        className="yellow-button"
      >
        <a href={props.url} rel="noreferrer">
          {props.callToAction}
        </a>
      </button>
    </>
  );
}
