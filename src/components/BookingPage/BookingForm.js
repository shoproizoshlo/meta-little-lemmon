import React from "react";
import { useState } from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";
import MySelect from "./MySelect";
import MyField from "./MyField";
import { updateTimes } from "./BookingPage";
import "./BookingForm.css";

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
        <div className="form d-flex justify-content-center">
          <Form>
            <div className="d-md-flex justify-content-between">
              <label htmlFor="date">Choose date</label>
              <MyField
                name="date"
                id="date"
                type="date"
                aria-labelledby="date"
                value={date}
                onChange={(e) => handleDateChange(e)}
              />
            </div>

            <div className="d-md-flex justify-content-between">
              <label htmlFor="time">Choose time</label>
              <MySelect name="time" id="time" aria-labelledby="time">
                <option value="">Select time</option>
                {finalTime}
              </MySelect>
            </div>

            <div className="d-md-flex justify-content-between">
              <label htmlFor="guests">Number of guests</label>
              <Field
                name="guests"
                id="guests"
                aria-labelledby="guests"
                type="number"
                min={1}
              />
              <ErrorMessage name="guests" />
            </div>

            <div className="d-md-flex justify-content-between">
              <label htmlFor="occasion">Occasion</label>
              <MySelect
                name="occasion"
                id="occasion"
                aria-labelledby="occasion"
              >
                <option value="">Select a occasion</option>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </MySelect>
            </div>

            <div className="d-md-flex justify-content-between">
              <label htmlFor="email">Email Address</label>
              <Field
                name="email"
                id="email"
                aria-labelledby="email"
                type="email"
              />
              <ErrorMessage name="email" />
            </div>

            <button type="submit">Book Now</button>
          </Form>
        </div>
      </Formik>
    </>
  );
}
