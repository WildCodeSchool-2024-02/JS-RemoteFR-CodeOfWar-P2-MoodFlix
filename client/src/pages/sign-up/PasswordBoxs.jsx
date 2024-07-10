import { useState } from "react";
import openedEye from "../../assets/images/visibility.png";
import closedEye from "../../assets/images/visibility_off.png";

function PasswordBoxs() {
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);

  const handlePassword = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPassword = (event) => {
    setConfirmPassword(event.target.value);
  };

  const toggleVisibility = () => {
    setVisible(!visible);
  };

  const toggleConfirmVisibility = () => {
    setConfirmVisible(!confirmVisible);
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
            src={visible ? closedEye : openedEye}
            alt={visible ? "Closed eye" : "Opened eye"}
          />
        </button>
      </div>

      <label htmlFor="confirm-password" name="password">
        CONFIRM YOUR PASSWORD
      </label>
      <div className="show-password-container">
        <input
          type={confirmVisible ? "text" : "password"}
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
        />
        <button
          type="button"
          className="show-password-img"
          onClick={toggleConfirmVisibility}
        >
          <img
            src={confirmVisible ? closedEye : openedEye}
            alt={confirmVisible ? "Closed eye" : "Opened eye"}
          />
        </button>
      </div>
      {password && confirmPassword && password !== confirmPassword ? (
        <p>INVALID PASSWORD ❌</p>
      ) : null}
    </>
  );
}

export default PasswordBoxs;
