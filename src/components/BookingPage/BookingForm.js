import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import { updateTimes } from "./BookingPage";
import * as Yup from "yup";
import MySelect from "./MySelect";
import MyField from "./MyField";
import CallToAction from "../PageComponents/CallToAction";
import "./BookingForm.css";

export default function BookingForm(props) {
  const [date, setDate] = useState("");
  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option key={times}>{times}</option>)
  );

  const navigate = useNavigate();
  const handleButtonClick = () => {
    navigate("/booking/thank-you");
  };

  function handleDateChange(e) {
    setDate(e.target.value);

    const date = new Date(e.target.value);

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
            handleButtonClick();
            setSubmitting(false);
          }, 400);
        }}
      >
        <div className="form d-flex justify-content-center">
          <Form>
            <div className="d-flex flex-column align-items-end">
              <div className="d-md-flex justify-content-md-between justify-content-start align-items-center">
                <label htmlFor="date">Choose date</label>
                <MyField
                  name="date"
                  id="date"
                  type="date"
                  label="Choose date"
                  aria-labelledby="date"
                  value={date}
                  onChange={(e) => handleDateChange(e)}
                />
              </div>
              <div className="error">
                <ErrorMessage name="date" />
              </div>
            </div>

            <div className="d-flex flex-column align-items-end">
              <div className="d-md-flex justify-content-between  align-items-center">
                <MySelect
                  name="time"
                  id="time"
                  label="Choose time"
                  aria-labelledby="time"
                >
                  <option value="">Select time</option>
                  {finalTime}
                </MySelect>
              </div>
              <div className="error">
                <ErrorMessage className="error" name="time" />
              </div>
            </div>

            <div className="d-flex flex-column align-items-end">
              <div className="d-md-flex justify-content-between  align-items-center">
                <label htmlFor="guests">Number of guests</label>
                <Field
                  name="guests"
                  id="guests"
                  placeholder="Enter number"
                  aria-labelledby="guests"
                  type="number"
                  min={1}
                />
              </div>
              <div className="error">
                <ErrorMessage className="error" name="guests" />
              </div>
            </div>

            <div className="d-flex flex-column  align-items-end">
              <div className="d-md-flex justify-content-between  align-items-center">
                <MySelect
                  name="occasion"
                  id="occasion"
                  label="Occasion"
                  aria-labelledby="occasion"
                >
                  <option value="">Select a occasion</option>
                  <option value="birthday">Birthday</option>
                  <option value="anniversary">Anniversary</option>
                </MySelect>
              </div>
              <div className="error">
                <ErrorMessage className="error" name="occasion" />
              </div>
            </div>

            <div className="d-flex flex-column  align-items-end">
              <div className="d-md-flex justify-content-between  align-items-center">
                <label htmlFor="email">Email Address</label>
                <Field
                  name="email"
                  id="email"
                  placeholder="Enter email"
                  aria-labelledby="email"
                  type="email"
                />
              </div>
              <div className="error">
                <ErrorMessage className="error" name="email" />
              </div>
            </div>

            <CallToAction type="submit" callToAction="Book Now">
              <button type="submit"></button>
            </CallToAction>
          </Form>
        </div>
      </Formik>
    </>
  );
}
