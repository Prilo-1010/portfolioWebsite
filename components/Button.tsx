import Link from "next/link";
import style from "../styles/Components.module.css";

export const Button = ({ children, link, rel , target }: any) => {
  return (
    <Link className={style.buttonLink} href={`/${link}`} rel={rel} target={target}>
      <span>{children}</span>
      <i></i>
    </Link>
  );
};
