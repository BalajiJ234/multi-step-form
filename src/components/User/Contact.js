import React from "react";
import {Form, Button} from 'semantic-ui-react';
import FormItem from "../UIElements/FormItem";

const Contact = ({ setForm, formData, navigation }) => {
  const { mobile, email } = formData;
  const { previous, next } = navigation;

  return (
    <div className="form">
      <h3>Contact</h3>
      <FormItem
        label="mobileno"
        name="mobile"
        value={mobile}
        placeholder="Mobile No."
        onChange={setForm}
      />
      <FormItem label="E-mail" name="email" placeholder="Email - ID" value={email} onChange={setForm} />
      <div>
        <button onClick={previous}>Previous</button>
        <button onClick={next}>Next</button>
      </div>
    </div>
  );
};

export default Contact;
