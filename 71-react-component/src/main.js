import React from "https://esm.sh/react";
import { createRoot } from "https://esm.sh/react-dom";

function Button({ children, status = "inactive" }) {
  const statusMessage =
    status === "active" ? "회원가입 버튼 활성화" : "회원가입 버튼 비활성화";

  const label = `${statusMessage}`;

  return (
    <button
      className={`Button Button-${status}`}
      aria-label={label}
      type="button"
    >
      {children}
    </button>
  );
}

const container = document.getElementById("root");

function ButtonListPage() {
  const buttonText = "동의하고 시작하기";
  return (
    <div role="group">
      <Button status="active">{buttonText}</Button>
      <Button status="inactive">{buttonText}</Button>
    </div>
  );
}

if (container) {
  createRoot(container).render(<ButtonListPage />);
} else {
  console.warn('문서에 "#app" 요소가 존재하지 않습니다.');
}
