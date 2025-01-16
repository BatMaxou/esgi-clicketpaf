import style from "./Text.module.scss";

const Text = ({ content }) => {
    return <p className={style.text}>{content}</p>;
}

export default Text;
