import React, { useState } from "react";

const fakeEmailCheck = (email: string) => {
  // 실제로는 서버에 중복 확인 요청
  return email === "test@example.com"; // 이미 사용 중인 이메일 예시
};

const SingUpPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [emailChecked, setEmailChecked] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [pwError, setPwError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneCode, setPhoneCode] = useState("");
  const [sentCode, setSentCode] = useState("");
  const [phoneVerified, setPhoneVerified] = useState(false);

  // 이메일 중복 확인
  const handleEmailCheck = () => {
    if (!email) return;
    if (fakeEmailCheck(email)) {
      setEmailError("이미 사용 중인 이메일입니다.");
      setEmailChecked(false);
    } else {
      setEmailError("");
      setEmailChecked(true);
      alert("사용 가능한 이메일입니다.");
    }
  };

  // 비밀번호 확인
  const handlePwConfirm = (value: string) => {
    setPasswordConfirm(value);
    setPwError(password !== value ? "비밀번호가 일치하지 않습니다." : "");
  };

  // 문자 인증 코드 전송
  const handleSendCode = () => {
    if (!phone) return;
    const code = Math.floor(100000 + Math.random() * 900000).toString();
    setSentCode(code);
    alert(`인증번호가 발송되었습니다: ${code}`); // 실제로는 문자로 발송
  };

  // 인증번호 확인
  const handleVerifyCode = () => {
    if (phoneCode === sentCode) {
      setPhoneVerified(true);
      alert("연락처 인증 완료!");
    } else {
      setPhoneVerified(false);
      alert("인증번호가 올바르지 않습니다.");
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!emailChecked) {
      alert("이메일 중복 확인을 해주세요.");
      return;
    }
    if (pwError || password !== passwordConfirm) {
      alert("비밀번호를 확인해주세요.");
      return;
    }
    if (!phoneVerified) {
      alert("연락처 인증을 완료해주세요.");
      return;
    }
    alert(`회원가입 완료!\n이름: ${name}\n이메일: ${email}`);
    setName("");
    setEmail("");
    setEmailChecked(false);
    setPassword("");
    setPasswordConfirm("");
    setPhone("");
    setPhoneCode("");
    setSentCode("");
    setPhoneVerified(false);
  };

  return (
    <div className="signup-container">
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit}>
        <div className="signup-field">
          <label>
            성함
            <br />
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="signup-input"
            />
          </label>
        </div>
        <div className="signup-field">
          <label>
            이메일
            <br />
            <input
              type="email"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailChecked(false);
                setEmailError("");
              }}
              required
              className="signup-input"
              disabled={emailChecked}
            />
            <button
              type="button"
              className="signup-btn"
              style={{ marginTop: 8 }}
              onClick={handleEmailCheck}
            >
              중복확인
            </button>
            {emailError && (
              <div style={{ color: "red", marginTop: 4 }}>{emailError}</div>
            )}
          </label>
        </div>
        <div className="signup-field">
          <label>
            비밀번호
            <br />
            <input
              type="password"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                setPwError(
                  passwordConfirm && e.target.value !== passwordConfirm
                    ? "비밀번호가 일치하지 않습니다."
                    : ""
                );
              }}
              required
              className="signup-input"
            />
          </label>
        </div>
        <div className="signup-field">
          <label>
            비밀번호 확인
            <br />
            <input
              type="password"
              value={passwordConfirm}
              onChange={(e) => handlePwConfirm(e.target.value)}
              required
              className="signup-input"
            />
            {pwError && (
              <div style={{ color: "red", marginTop: 4 }}>{pwError}</div>
            )}
          </label>
        </div>
        <div className="signup-field">
          <label>
            연락처
            <br />
            <input
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              className="signup-input"
              disabled={phoneVerified}
            />
            <button
              type="button"
              className="signup-btn"
              style={{ marginTop: 8 }}
              onClick={handleSendCode}
              disabled={phoneVerified}
            >
              인증번호 발송
            </button>
          </label>
        </div>
        {sentCode && !phoneVerified && (
          <div className="signup-field">
            <label>
              인증번호 입력
              <br />
              <input
                type="text"
                value={phoneCode}
                onChange={(e) => setPhoneCode(e.target.value)}
                className="signup-input"
              />
              <button
                type="button"
                className="signup-btn"
                style={{ marginTop: 8 }}
                onClick={handleVerifyCode}
              >
                인증하기
              </button>
            </label>
          </div>
        )}
        <button type="submit" className="signup-btn" style={{ marginTop: 16 }}>
          회원가입
        </button>
      </form>
    </div>
  );
};

export default SingUpPage;
