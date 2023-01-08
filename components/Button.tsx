import Link from "next/link";
import style from "../styles/Components.module.css";

export const Button = ({ children, link }: any) => {
  return (
    <Link className={style.buttonLink} href={`/${link}`}>
      <span>{children}</span>
      <i></i>
    </Link>
  );
};
