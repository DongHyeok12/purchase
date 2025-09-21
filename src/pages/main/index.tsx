import React from "react";

const MainPage = () => {
  return (
    <div className="main-container">
      <div className="main-content">
        <button
          className="loginButton"
          onClick={() => (window.location.href = "/login")}
        >
          로그인 하러가기
        </button>
        <button
          className="singUp"
          onClick={() => (window.location.href = "/guestOrder")}
        >
          비회원 주문하기
        </button>
      </div>
    </div>
  );
};

export default MainPage;
