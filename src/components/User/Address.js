import React from "react";

import FormItem from "../UIElements/FormItem";

const Address = ({ setForm, formData, navigation }) => {
  const { address, city, state, pinCode } = formData;

  const { previous, next } = navigation;

  return (
    <div className="form">
      <h3>Address</h3>
      <FormItem
        label="Address"
        name="address"
        placeholder="Address"
        value={address}
        onChange={setForm}
      />
      <FormItem
        label="City"
        name="city"
        placeholder="City"
        value={city}
        onChange={setForm}
      />
      <FormItem
        label="State"
        name="state"
        placeholder="State"
        value={state}
        onChange={setForm}
      />
      <FormItem
        label="PinCode"
        name="pinCode"
        placeholder="Pin Code"
        value={pinCode}
        onChange={setForm}
      />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Address;
