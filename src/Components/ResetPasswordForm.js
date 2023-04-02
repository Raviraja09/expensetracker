import { Fragment, useRef } from "react";
import { useNavigate } from "react-router-dom";

function ResetPasswordForm() {
  const emailRef = useRef();
  const navigate = useNavigate()

  async function ResetPasswordHandler(e) {
    e.preventDefault();
    const email = emailRef.current.value;
    try {
      await ResetPasswordForm(email);
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <Fragment>
      <form onSubmit={ResetPasswordHandler}>
        <input type="email" placeholder="Enter your email address" ref={emailRef} />
        <button type="submit">Reset Password</button>
      </form>
    </Fragment>
  );
}

export default ResetPasswordForm;
