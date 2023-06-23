import React, { useState } from "react";
import styles from "./UserForm.module.css";

const UserForm = () => {
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const username = formData.get("username");
    const password = formData.get("password");

    // Username Error
    if (!username || username.trim().length === 0) {
      setError("사용자명을 입력해주세요!");
      setSuccess("");
      return;
    }

    // Password Error
    if (!password || password.trim().length === 0) {
      setError("비밀번호를 입력해주세요!");
      setSuccess("");
      return;
    }

    // Success
    setError("");
    setSuccess("로그인 성공!");
  };

  return (
    <fieldset className={styles.fieldset}>
      <legend>로그인</legend>
      <form onSubmit={submitHandler}>
        <div className={styles.input__container}>
          <label htmlFor="username">사용자명</label>
          <input id="username" type="text" name="username" autoComplete="off" />
        </div>
        <div className={styles.input__container}>
          <label htmlFor="password">비밀번호</label>
          <input
            id="password"
            type="password"
            name="password"
            autoComplete="off"
          />
        </div>
        <div className={styles.input__container}>
          <button type="submit" className={styles.button__login}>
            로그인
          </button>
        </div>
      </form>
      {error ? (
        <p className={`${styles.text__state} ${styles.text__error}`}>{error}</p>
      ) : null}
      {success ? (
        <p className={`${styles.text__state} ${styles.text__success}`}>
          {success}
        </p>
      ) : null}
    </fieldset>
  );
};

export default UserForm;
