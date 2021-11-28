import { Router } from "./router/Router";
import { ConnectedRouter } from "connected-react-router";
import { history } from "./app/store";
import { useState } from "react";
import { HtmlPrac } from "./components/html-prac/html-prac";
import { Form } from "./components/pages/login/form/form";

type Prop = {
  callback: (v: number) => void;
};

const B = ({ callback }: Prop) => {
  const a = 1;

  const onClick = () => {
    callback(a);
  };

  return <button onClick={onClick}>TEST</button>;
};

const A = () => {
  const [state, setState] = useState(0);

  return (
    <div>
      <div>結果 : {state}</div>
      <B callback={(v) => setState((val) => val + v)} />
    </div>
  );
};

const App = () => {
  return (
    <>
      <div className="App">
        {/* <A /> */}
        <ConnectedRouter history={history}>{Router}</ConnectedRouter>
      </div>
    </>
  );
};

export default App;
