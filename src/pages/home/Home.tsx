import React, { useState } from "react";
import "./Home.scss";
// import { Hello } from "../../components/hello/hello";
import { Button } from "../../components/button/Button";
import { Input } from "../../components/input/Input";
import { useHistory } from "react-router-dom";

interface FormError {
  isEmpty?: boolean;
  isInvalid?: boolean;
}

interface UserFormError {
  firstname: FormError;
  lastname: FormError;
}

export const Home: React.FunctionComponent = () => {
  const [userInfo, setUserInfo] = useState<{
    firstname: string;
    lastname: string;
  } | null>(null);

  const history = useHistory();

  const changeHandler = (field: string, value: string) => {
    console.log(field, value);
    const newVal = {
      ...userInfo,
      [field]: value,
    };

    setUserInfo(newVal as any);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();
    console.log(userInfo);
    if (userInfo?.firstname) {
      history.push("/chat");
    }
  };

  return (
    <div className="Home">
      <div className="wrapper">
        <form onSubmit={submitHandler}>
          <div className="form-group">
            <Input
              name="firstname"
              placeholder="Enter your first name"
              required={true}
              onChange={(value) => changeHandler("firstname", value)}
              chat={false}
            />
          </div>
          <div className="form-group">
            <Input
              name="lastname"
              placeholder="Enter your last name"
              required={false}
              onChange={(value) => changeHandler("lastname", value)}
              chat={false}
            />
          </div>
          <Button className="App-login-btn" type="submit" text="Log in" />
        </form>
      </div>
    </div>
  );
};
