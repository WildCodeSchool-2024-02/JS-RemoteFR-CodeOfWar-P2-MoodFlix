import { useState } from "react";
import eyeOpened from "../../assets/images/visibility.png";
import eyeClosed from "../../assets/images/visibility_off.png";

function PasswordBoxs() {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [visible, setVisible] = useState(false);

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  return (
    <>
      <label htmlFor="password" name="password">
        PASSWORD
      </label>
      <div className="show-password-container">
        <input
          type={visible ? "text" : "password"}
          id="password"
          value={password}
          onChange={handlePassword}
        />

        <button
          type="button"
          className="show-password-img"
          onClick={toggleVisibility}
        >
          <img
            src={visible ? eyeClosed : eyeOpened}
            alt={visible ? "closed eye" : "opened eye"}
          />
        </button>
      </div>

      <label htmlFor="confirm-password" name="password">
        CONFIRM YOUR PASSWORD
      </label>
      <div className="show-password-container">
        <input
          type="password"
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
        <div className="show-password-img">
          <img src={eyeOpened} alt="opened eye" />
        </div>

        <div className="hide-password-img">
          <img src={eyeClosed} alt="closed eye" />
        </div>
      </div>
      {password && confirmPassword && password !== confirmPassword ? (
        <p>INVALID PASSWORD ❌</p>
      ) : null}
    </>
  );
}

export default PasswordBoxs;
