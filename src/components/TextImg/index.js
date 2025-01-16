import Image from "../Image";
import Text from "../Text";
import cn from "@/utils/classnames";
import style from "./TextImg.module.scss";

const TextImg = ({ src, alt, content, left = false }) => {
    return <div className={cn(style.textImg, {
        [style['textImg--left']]: left,
    })}>
        <Text content={content} />
        <Image src={src} alt={alt} />
    </div>
}

export default TextImg;
