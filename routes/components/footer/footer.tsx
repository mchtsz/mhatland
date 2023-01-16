import style from "./footer.module.css";

export default function module() {
  return (
    <footer>
      <div class={style.footer}>
        <p>{"&copy;" + new Date().getFullYear() + " Marthin Hatland"}</p>
      </div>
    </footer>
  );
}
