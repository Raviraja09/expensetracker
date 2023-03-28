import { Fragment, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ResetPassword } from "./Api";

function ResetPassword() {
  const emailRef = useRef();
  const navigate = useNavigate()

  async function ResetPasswordHandler(e) {
    e.preventDefault();
    const details = {
      requestType: "PASSWORD_RESET",
      email: emailRef.current.value,
    };
    await resetPassword(details);
    navigate('/login')
  }

  return (
    <Fragment>
      <p>Enter Registered Email</p>
      <form onSubmit={ResetPasswordHandler}>
        <input type="email" ref={emailRef} placeholder="Email" />
        <button type="submit">Send Email</button>
      </form>
    </Fragment>
  );
}
export default ResetPassword;