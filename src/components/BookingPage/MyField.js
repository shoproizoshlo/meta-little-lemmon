import React from "react";
import { useState } from "react";
import { useField, useFormikContext } from "formik";
import { updateTimes } from "./BookingPage";

const MyField = (props) => {
  const {
    values: { textA, textB, date },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  React.useEffect(() => {
    // set the value of textC, based on textA and textB
    if (touched.date) {
      //   console.log("date from my input", date);
      //   setSelectedDate(date);
      //   updateTimes(date);
      //   console.log("updateTimes(date)", updateTimes(date));

      setFieldValue(props.name, `${date}`);
      updateTimes(date);
    }
  }, [date, touched.date, setFieldValue, props.name]);

  //   React.useEffect(() => {
  //     // set the value of textC, based on textA and textB
  //     if (
  //       textA.trim() !== "" &&
  //       textB.trim() !== "" &&
  //       touched.textA &&
  //       touched.textB
  //     ) {
  //       setFieldValue(props.name, `textA: ${textA}, textB: ${textB}`);
  //     }
  //   }, [textB, textA, touched.textA, touched.textB, setFieldValue, props.name]);

  return (
    <>
      <input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};

export default MyField;
