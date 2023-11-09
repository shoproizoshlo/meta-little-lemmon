import React from "react";
import { useField, useFormikContext } from "formik";
import { updateTimes } from "./BookingPage";

const MyField = (props) => {
  const {
    values: { date },
    touched,
    setFieldValue,
  } = useFormikContext();
  const [field, meta] = useField(props);

  React.useEffect(() => {
    // set the value of data
    if (touched.date) {
      setFieldValue(props.name, `${date}`);
      updateTimes(date);
    }
  }, [date, touched.date, setFieldValue, props.name]);

  return (
    <>
      <input {...props} {...field} />
      {!!meta.touched && !!meta.error && <div>{meta.error}</div>}
    </>
  );
};

export default MyField;
