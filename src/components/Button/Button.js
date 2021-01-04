import s from './Button.module.css';

function Button({ onClick }) {
  return (
    <button autoFocus onClick={onClick} type="button" className={s.Button}>
      Load more
    </button>
  );
}

export default Button;
