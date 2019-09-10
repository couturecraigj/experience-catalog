/* eslint-disable jsx-a11y/label-has-for */
import React, { useState, useEffect, useContext } from "react";
import { SingleDatePicker } from "react-dates";
import moment from "moment";
import FormContext from "./Form/Context";
import AdditionalFieldsContext from "./AdditionalFields/Context";

import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import "../scss/datepicker.scss";

const SingleDatePickerWrapper = ({
  name,
  label,
  placeholder,
  required,
  validate = () => {},
  className,
  value
}) => {
  const [focused, setFocused] = useState(false);

  // eslint-disable-next-line no-unused-vars
  let [
    // eslint-disable-next-line no-unused-vars
    context,
    // eslint-disable-next-line no-unused-vars
    state,
    dispatch,
    dispatchLocal,
    // eslint-disable-next-line no-unused-vars
    addedFieldsContext,
    // eslint-disable-next-line no-unused-vars
    addedFieldsDispatch
  ] = [{}, {}, () => {}, () => {}];
  try {
    [context, dispatchLocal] = useContext(FormContext);
    // eslint-disable-next-line no-empty
  } catch (error) {}
  const { initialValues } = context;
  const initialValue = initialValues[name];
  console.log(context);
  try {
    [addedFieldsContext, addedFieldsDispatch] = useContext(
      AdditionalFieldsContext
    );
    // eslint-disable-next-line no-empty
  } catch (error) {}
  const [date, setDate] = useState(initialValue ? moment(initialValue) : null);
  console.log(date);
  useEffect(() => {
    dispatchLocal({ type: "FIELD/insert", payload: { name, label } });
    dispatch({ type: "FIELD/insert", payload: { name, label } });
    if (value) {
      dispatchLocal({ type: "FIELD/change", payload: { name, value } });
      dispatch({ type: "FIELD/change", payload: { name, value } });
    }
    return () => {
      dispatchLocal({ type: "FIELD/remove", payload: { name } });
      dispatch({
        type: "FIELD/remove",
        payload: { name }
      });
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [name, label]);
  useEffect(() => {
    if (value) {
      dispatchLocal({
        type: "FIELD/change",
        payload: { name, value: date.format("YYYY-MM-DD") }
      });
      dispatch({
        type: "FIELD/change",
        payload: { name, value: date.format("YYYY-MM-DD") }
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [date]);

  return (
    <div className={className}>
      <label htmlFor={name}>{label}</label>
      <SingleDatePicker
        required={required}
        numberOfMonths={1}
        openDirection="up"
        id={name}
        placeholder={placeholder}
        date={date}
        focused={focused}
        onDateChange={d => {
          setDate(d);
          dispatchLocal({
            type: "FIELD/change",
            payload: { value: d, name }
          });
          dispatch({
            type: "FIELD/change",
            payload: { value: d, name }
          });
        }}
        onFocusChange={() => setFocused(!focused)}
      />
    </div>
  );
};

export default SingleDatePickerWrapper;
