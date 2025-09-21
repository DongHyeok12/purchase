import React from "react";
import { Input } from "antd";

const LoginPage = () => {
  const [id, setId] = React.useState("");
  const [pw, setPw] = React.useState("");

  return (
    <div className="loginPage">
      <div className="loginInput">
        <label>이메일</label>
        <Input
          placeholder="e-mail"
          onChange={(e) => {
            setId(e.target.value);
          }}
        />
      </div>
      <div className="loginInput">
        <label>비밀번호</label>
        <Input.Password
          placeholder="password"
          onChange={(e) => {
            setPw(e.target.value);
          }}
        />
      </div>
      <div>
        <button
          className="loginButton"
          onClick={() => {
            console.log(id, pw);
          }}
        >
          로그인
        </button>
      </div>
      <div style={{ fontSize: 14, marginTop: 12, color: "#555" }}>
        회원이 아니신가요? &nbsp;
        <a href="/singUp" style={{ color: "#d65d5d", fontWeight: "bold" }}>
          가입하러가기
        </a>
      </div>
      <div>
        <button className="naverLogin">네이버로 로그인하기</button>
      </div>
    </div>
  );
};

export default LoginPage;
