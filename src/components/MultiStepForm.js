import React from "react";
import { useForm, useStep } from "react-hooks-helper"

import Name from "./User/Name";
import Contact from "./User/Contact";
import Address from './User/Address'
import Review from "./User/Review";
import Submit from "./User/Submit"

const steps = [
  {id: "name"},
  {id: "contact"},
  {id: "address"},
  {id: "review"},
  {id: "submit"},
]


const defaultData = {
  firstName: "",
  lastName: "",
  preferedName: "",
  email: "",
  mobile: "",
  address: "",
  city: "",
  state: "",
  pinCode: ""
}

const MultiStepForm = () => {
  const [formData, setForm] = useForm(defaultData);
  const { step, navigation } = useStep({ initialStep: 0, steps })
  const { id } = step;

  const props = { formData, setForm, navigation }
  
  switch( id ) {
    case "name":
      return <Name {...props} />;
    case "contact":
      return <Contact {...props} />;
    case "address":
      return <Address {...props} />;
    case "review":
      return <Review {...props} />;
    case "submit":
      return <Submit {...props} />;
    default:
      return null;
  }
}

export default MultiStepForm;
