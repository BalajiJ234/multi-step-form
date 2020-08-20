import React from "react";

const FormItem = ({ label, type="text", ...otherProps }) => {
    return(
        <div>
          <>
            <label>{label}</label>
            <input type={type} {...otherProps} />
          </>  
        </div>
    )
}

export default FormItem;