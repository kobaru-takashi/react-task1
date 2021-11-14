import { useState, useCallback } from "react";
import { Form } from "./form/form";

type Props = {
  usernameState: string;
  passwordState: string;
};

export const LoginStateVar = () => {
  // const { usernameState, passwordState} = props;

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleOnPressKey = useCallback(() => {}, [username, password]);

  return (
    <div>
      Stateをつかってやってみて <br />
      useCallbackをつかってやってみて <br />
      <Form
        username={username}
        onChangeName={handleOnPressKey}
        password={password}
        onChangePass={handleOnPressKey}
      />
      {/* <Form /> */}
    </div>
  );
};
