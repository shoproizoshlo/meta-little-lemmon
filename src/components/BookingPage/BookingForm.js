import React from "react";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import MySelect from "./MySelect";
import MyField from "./MyField";
import { updateTimes } from "./BookingPage";

export default function BookingForm(props) {
  const [date, setDate] = useState("");
  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option key={times}>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    const date = new Date(e.target.value);
    console.log("date", date);

    updateTimes(date);
    console.log("update times", updateTimes(date));

    setFinalTime(
      props.availableTimes.map((times) => (
        <option key={times} value={times}>
          {times}
        </option>
      ))
    );
    console.log("finalTime", finalTime);
  }

  return (
    <>
      <p>This is BookingForm</p>
      <Formik
        initialValues={{
          date: "",
          time: "",
          guests: "",
          occasion: "",
          email: "",
        }}
        validationSchema={Yup.object({
          date: Yup.date().required("Required"),

          time: Yup.string().required("Required"),

          guests: Yup.number()
            .max(1, "Minimum 1 guest please")
            .max(10, "Maximum 10 guests or email us if you want more guests")
            .required("Required"),

          occasion: Yup.string()
            .oneOf(["birthday", "anniversary"])
            .required("Required"),

          email: Yup.string()
            .email("Invalid email address")
            .required("Required"),
        })}
        onSubmit={(values, { setSubmitting }) => {
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
          }, 400);
        }}
      >
        <Form>
          <label htmlFor="res-date">Choose date</label>
          <MyField
            name="date"
            type="date"
            value={date}
            onChange={(e) => handleDateChange(e)}
          />

          <MySelect label="Choose time" name="time">
            <option value="">Select time</option>
            {finalTime}
          </MySelect>

          <label htmlFor="guests">Number of guests</label>
          <Field name="guests" type="number" min={1} />
          <ErrorMessage name="guests" />

          <MySelect label="Occasion" name="occasion">
            <option value="">Select a occasion</option>
            <option value="birthday">Birthday</option>
            <option value="anniversary">Anniversary</option>
          </MySelect>

          <label htmlFor="email">Email Address</label>
          <Field name="email" type="email" />
          <ErrorMessage name="email" />

          <button type="submit">Book Now</button>
        </Form>
      </Formik>
    </>
  );
}
