import { createRoot } from 'react-dom/client';

function Button({ children, status = 'inactive' }) {
  const statusMessage =
    status === 'active' ? '회원가입 버튼 활성화' : '회원가입 버튼 비활성화';

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

const container = document.getElementById('react-app');

function ButtonListPage() {
  const buttonText = '동의하고 시작하기';
  return (
    <div role="group">
      <Button status="active">{buttonText}</Button>
      <Button status="inactive">{buttonText}</Button>
    </div>
  );
}

export default ButtonListPage;
