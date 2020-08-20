import React from "react";

const Review = ({ setForm, formData, navigation }) => {
  const {
    firstName,
    lastName,
    preferedName,
    mobile,
    email,
    address,
    city,
    state,
    pinCode,
  } = formData;
  const { go } = navigation;

  return (
    <div className="form">
      <h3>Review your data</h3>
      <h4>
        Name
        <button onClick={() => go("name")}>Edit</button>
      </h4>
      <div>
        {" "}
        First name: {`${firstName}`}
        <br />
        Last name: {`${lastName}`}
      </div>
      <div>Prefered Name: {`${preferedName}`}</div>
      <h4>
        Contact
        <button onClick={() => go("contact")}>Edit</button>
      </h4>
      <div>
        Mobile No: {`${mobile}`}
        <br />
        Email: {`${email}`}
      </div>
      <h4>
        Address
        <button onClick={() => go("address")}>Edit</button>
      </h4>
      <div>
        Address: {`${address}`}
        <br />
        City: {`${city}`}
        <br />
        State: {`${state}`}
        <br />
        PinCode: {`${pinCode}`}
      </div>
      <div>
        <button onClick={() => go("submit")}>Submit</button>
      </div>
    </div>
  );
};

export default Review;