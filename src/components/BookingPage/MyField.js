import React from "react";
import ReactDOM from "react-dom";
import { Formik, Field, Form, useField, useFormikContext } from "formik";

const MyField = (props) => {
  const {
    values: { textA, textB, date, time, updateTimes },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  React.useEffect(() => {
    // set the value of textC, based on textA and textB
    if (
      textA.trim() !== "" &&
      textB.trim() !== "" &&
      touched.textA &&
      touched.textB
    ) {
      setFieldValue(props.name, `textA: ${textA}, textB: ${textB}`);
    }
    if (date.trim() !== "" && touched.date) {
      setFieldValue(
        props.setFinalTime(
          props.availableTimes.map((times) => (
            <option key={times}>{times}</option>
          ))
        )
      );
    }
  }, [textB, textA, touched.textA, touched.textB, setFieldValue, props.name]);

  return (
    <>
      <input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};

export default MyField;
