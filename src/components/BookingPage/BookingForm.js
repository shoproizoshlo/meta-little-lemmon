import React from "react";
import { useState } from "react";
import { useFormik, Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function BookingForm(props) {
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("");
  const [date, setDate] = useState("");
  const [finalTime, setFinalTime] = useState(
    props.availableTimes.map((times) => <option key={times}>{times}</option>)
  );

  function handleDateChange(e) {
    setDate(e.target.value);

    var stringify = e.target.value;
    const date = new Date(stringify);

    props.updateTimes(date);

    setFinalTime(
      props.availableTimes.map((times) => <option key={times}>{times}</option>)
    );
  }

  const formik = useFormik({
    initialValues: {
      guests: "",
      occasion: "",
      email: "",
    },
    validationSchema: Yup.object({
      guests: Yup.number()
        .max(10, "Maximum be 10 guests or email us if you want more guests")
        .required("Required"),
      occasion: Yup.string().required("Required"),
      email: Yup.string().email("Invalid email address").required("Required"),
    }),
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <>
      <p>This is BookingForm</p>
      <form
        onSubmit={formik.handleSubmit}
        style={{ display: "grid", maxWidth: 200, gap: 20 }}
      >
        <label htmlFor="res-date">Choose date</label>
        <input
          type="date"
          id="res-date"
          name="res-date"
          value={date}
          onChange={(e) => handleDateChange(e)}
        />
        <label htmlFor="res-time">Choose time</label>
        <select id="res-time" name="res-time">
          {finalTime}
        </select>

        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          placeholder={1}
          id="guests"
          name="guests"
          onChange={formik.handleChange}
          value={formik.values.guests}
        />
        {formik.touched.guests && formik.errors.guests ? (
          <div>{formik.errors.guests}</div>
        ) : null}

        <label htmlFor="occasion">Occasion</label>
        <select
          id="occasion"
          name="occasion"
          onChange={formik.handleChange}
          value={formik.values.occasion}
        >
          <option>Birthday</option>
          <option>Anniversary</option>
        </select>
        {formik.errors.occasion ? <div>{formik.errors.occasion}</div> : null}

        <label htmlFor="email">Email Address</label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          value={formik.values.email}
        />
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}

        <button type="submit">Book Now</button>
      </form>
    </>
  );
}
