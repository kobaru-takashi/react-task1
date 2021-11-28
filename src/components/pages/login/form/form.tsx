import TextField from "@mui/material/TextField";
import { createTheme, ThemeProvider } from "@mui/material/styles";

type Props = {
  username: string;
  password: string;
  onChangeName: (username: string) => void;
  onChangePass: (password: string) => void;
};

export const Form = (props: Props) => {
  const { username, password, onChangeName, onChangePass } = props;
  const theme = createTheme();
  return (
    <>
      <ThemeProvider theme={theme}>
        <TextField
          margin="normal"
          required
          fullWidth
          id={username}
          label="Username"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={(e) => onChangeName(e.target.value)}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id={password}
          autoComplete="current-password"
          onChange={(e) => onChangePass(e.target.value)}
        />
      </ThemeProvider>
    </>
  );
};

//
// LoginのComponentの中身を記述

// id {id}
// pass {pass}
// Form
//*/}
