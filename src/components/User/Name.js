import React from 'react';
import FormItem from "../UIElements/FormItem";

const Name = ({ setForm, formData, navigation }) => {
  const { firstName, lastName, preferedName } = formData;
  const { next } = navigation;
  return (
    <div className="form">
      <h3>Name of the User</h3>
      <FormItem
        label="First Name"
        name="firstName"
        placeholder="Enter your First Name"
        value={firstName}
        onChange={setForm}
      />
      <FormItem
        label="lastname"
        name="lastName"
        placeholder="Enter your Last Name"
        value={lastName}
        onChange={setForm}
      />
      <FormItem
        label="Prefered Name"
        name="preferedName"
        placeholder="Enter your preferred Name"
        value={preferedName}
        onChange={setForm}
      />
      <div>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Name;