import S from './Button.module.css';
import { oneOf, node, func } from 'prop-types';

Button.propTypes = {
  buttonColor: oneOf(['buttonBlue', 'buttonDodgerBlue', 'buttonSkyBlue']),
  children: node,
  onClick: func,
};

function Button({ buttonColor, children, onClick }) {
  return (
    <button className={`${S.component} ${S[buttonColor]}`} onClick={onClick}>
      {children}
    </button>
  );
}
export default Button;
