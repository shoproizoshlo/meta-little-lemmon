import React from "react";
import { useLocation } from "react-router-dom";

import "./ThankYouPage.css";

export default function ThankYouPage(props) {
  const location = useLocation();
  const formValues = location.state && location.state.formValues;
  return (
    <div className="pt-5" id="thanks">
      <div className="thanks d-flex flex-column align-items-center justify-content-center">
        <h2>Thank You!</h2>
        {formValues && (
          <div>
            <ul>
              {Object.entries(formValues).map(([fieldName, value]) => (
                <li key={fieldName}>
                  <strong>{fieldName}:</strong> {value}
                </li>
              ))}
            </ul>
          </div>
        )}
        <p>You will receive Email with all information</p>
      </div>
    </div>
  );
}
