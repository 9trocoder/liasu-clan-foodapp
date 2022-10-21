import React from "react";
import Input from "../../components/input";
import {
  data,
  email,
  facebook,
  information,
  password,
  phone,
} from "../../utility/tools";

function RegisterPage() {
  return (
    <div className="loginpage__cnt">
      <p className="loginpage__title">
        Register <br />
        New account
      </p>

      <Input labelName="Full Name" icon={data} />
      <Input labelName="Email" icon={email} />
      <Input labelName="Phone" icon={phone} />
      <Input labelName="Password" icon={password} />
      <button className="general__btn">Register</button>
      <button className="social__signin">
        {facebook} Sign up with Facebook
      </button>
      <div className="donthaveaccount">
        <p>
          Already have an account? <span> Login</span>
        </p>
      </div>
    </div>
  );
}

export default RegisterPage;
