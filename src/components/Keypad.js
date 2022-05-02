import React from "react";

function KeyPad() {
  return (
    <input
      type="password"
      placeholder="ENTER PASSWORD"
      onChange={() => console.log("Entering password...")}
    />
  );
}

export default KeyPad;
