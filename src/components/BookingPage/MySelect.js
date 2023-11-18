import React from "react";
import { useField } from "formik";

export default function MySelect({ label, ...props }) {
  const [field] = useField(props);
  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <select {...field} {...props} />
    </div>
  );
}
