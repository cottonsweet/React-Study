import React, { useState, useEffect, useReducer, useContext } from "react";

import Card from "../UI/Card/Card";
import classes from "./Login.module.css";
import Button from "../UI/Button/Button";
import AuthContext from "../../store/auth-context";

/**
 * 리듀서 함수는 컴포넌트 함수 바깥에 생성이 되었는데, 이 이유는 리듀서 함수 내부에서는
 * 컴포넌트 함수 내부에서 만들어진 어떤 데이터도 필요하지 않기 때문에
 * 이 리듀서 함수는 이 컴포넌트 함수의 범위 밖에서 만들어질수 있다.
 * */
const emailReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    /**
     * action.type이 "USER_INPUT일 경우엔"
     * value에는 emailChangeHandler이 함수의 e.target.value(state 스냅샷)을 반환
     * 해당 value에는 사용자가 입력한 input value를 반환함
     *
     * isValid에는 email state의 값 안에 "@" 가 있는지 확인 후 true or false를 반환한다.
     * 해당 isValid에는 사용자가 입력한 input value에 "@" 문자열이 있다면 true or false를 반환함
     */
    return { value: action.val, isValid: action.val.includes("@") };
  }
  if ((action.type = "INPUT_BLUR")) {
    /**
     * action.type이 "INPUT_BLUR" 경우엔"
     * 해당 value에는 최신 state 스냅샷을 반환한다.
     * 즉 사용자가 입력한, input value를 반환함
     *
     * 해당 isValid에는 최신 state.value 값 안에 "@"가 있느지 확인 후 true or false를 반환함
     */
    console.log("이게 최신 스냅샷임", state.value);
    console.log("이건 인클루드임", state.value.includes("@"));
    return { value: state.value, isValid: state.value.includes("@") };
  }

  // 해당 리듀서로 오는 *다른 모든 액션에* 대해 아래의 기본 state가 반환 된다.
  return { value: "", isValid: false };
};

const passwordReducer = (state, action) => {
  if (action.type === "USER_INPUT") {
    /**
     * action.type이 "USER_INPUT일 경우엔"
     * value에는 passwordChangeHandler 함수의 e.target.value(state 스냅샷)을 반환
     * 해당 value에는 사용자가 입력한 input value를 반환함
     *
     * 해당 isValid에는 사용자가 입력한 input value의 길이가 6 > 이상인지 검증한다.
     */
    return { value: action.val, isValid: action.val.trim().length > 6 };
  }
  if ((action.type = "INPUT_BLUR")) {
    /**
     * action.type이 "INPUT_BLUR" 경우엔"
     * 해당 value에는 최신 state 스냅샷을 반환한다.
     * 즉 사용자가 입력한, input value를 반환함
     *
     * 해당 isValid에는 사용자가 입력한 input value의 길이가 6 > 이상인지 검증한다.
     */
    return { value: state.value, isValid: state.value.trim().length > 6 };
  }

  // 해당 리듀서로 오는 *다른 모든 액션에* 대해 아래의 기본 state가 반환 된다.
  return { value: "", isValid: false };
};

const Login = (props) => {
  // const [enteredEmail, setEnteredEmail] = useState("");
  // const [emailIsValid, setEmailIsValid] = useState();
  // const [enteredPassword, setEnteredPassword] = useState("");
  // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);

  const [emailState, dispatchEmail] = useReducer(emailReducer, { value: "", isValid: null });
  const [passwordState, dispatchPassword] = useReducer(passwordReducer, { value: "", isValid: null });

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    console.log("EFFECT RUNNING");

    return () => {
      console.log("EFFECT CLEANUP");
    };
  }, []);

  const { isValid: emailIsValid } = emailState;
  const { isValid: passwordIsValid } = passwordState;

  useEffect(() => {
    const identifier = setTimeout(() => {
      console.log("Checking form validity!");
      setFormIsValid(emailIsValid && passwordIsValid);
    }, 500);

    return () => {
      console.log("clean up !");
      clearTimeout(identifier);
    };
  }, [emailIsValid, passwordIsValid]);

  const emailChangeHandler = (event) => {
    dispatchEmail({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(event.target.value.includes("@") && passwordState.isValid);
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({ type: "USER_INPUT", val: event.target.value });
    // setFormIsValid(emailState.isValid && event.target.value.trim().length > 6);
  };

  const validateEmailHandler = () => {
    dispatchEmail({ type: "INPUT_BLUR" });
  };

  const validatePasswordHandler = () => {
    dispatchPassword({ type: "INPUT_BLUR" });
  };

  const submitHandler = (event) => {
    event.preventDefault();
    authCtx.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div className={`${classes.control} ${emailState.isValid === false ? classes.invalid : ""}`}>
          <label htmlFor="email">E-Mail</label>
          <input type="email" id="email" value={emailState.value} onChange={emailChangeHandler} onBlur={validateEmailHandler} />
        </div>
        <div className={`${classes.control} ${passwordState.isValid === false ? classes.invalid : ""}`}>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" value={passwordState.value} onChange={passwordChangeHandler} onBlur={validatePasswordHandler} />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
