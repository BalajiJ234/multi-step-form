import React from "react";

const Submit = ({navigation}) => {
    const { go } = navigation;
    return (
        <div>
            <h3>Thank you for submiting</h3>
            New Form - <button onClick={() => go("name")}>New </button>
        </div>
    )
}

export default Submit;