import style from "./Toggle.module.scss";

export const Toggle = ({ left, right, onChange }) => {
  return (
    <div className={style.frame}>
      <label htmlFor="check" className={style.switchToggle}></label>
      <input
        className={style.checkbox}
        onChange={onChange}
        type="checkbox"
        id="check"
      />
      <label htmlFor="check" className={style.roller}></label>
      <span className={style.leftText}>{left}</span>
      <span className={style.rightText}>{right}</span>
    </div>
  );
};
