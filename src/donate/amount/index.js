import React from "react";
import { Form, NestedForm } from "react-form";

import validations from "./validations";
import Checkbox from "../Checkbox";
import AmountSelector from "./AmountSelector";
import Error from "../Error";
import "./index.css";

export default ({
  currentAmount,
  selectAmount,
  setRecurring,
  nextStep,
  values
}) => (
  <NestedForm field="amount">
    <Form
      validateError={validations}
      defaultValues={{ amount: 100, recurring: false }}
      onSubmit={nextStep}
    >
      {({ submitForm, errors, touched }) => {
        return (
          <form onSubmit={submitForm}>
            <h5>Select an amount:</h5>
            <AmountSelector value={100} />
            <Error errors={errors} touched={touched} fieldName={"amount"} />
            <br />

            <Checkbox fieldName="recurring" toggle={setRecurring}>
              Yes! Show my support by making this a recurring donation.
            </Checkbox>

            <div className="Donate_ButtonGroup">
              <button type="submit">NEXT</button>
            </div>
          </form>
        );
      }}
    </Form>
  </NestedForm>
);
