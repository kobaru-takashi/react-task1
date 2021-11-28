import { useState, useCallback } from "react";
import { Form } from "./form/form";


export const LoginStateVar = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnPressKey = useCallback(() => {
    setUsername(username);
    setPassword(password);
  }, [username, password]);

  return (
    <div>
      {/* Stateをつかってやってみて <br />
      useCallbackをつかってやってみて <br /> */}
      <Form
        username={username}
        onChangeName={handleOnPressKey}
        password={password}
        onChangePass={handleOnPressKey}
      />
    </div>
  );
};
