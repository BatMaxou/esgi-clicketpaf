import BaseImage from "next/image";
import style from "./Image.module.scss";
import cn from "@/utils/classnames";

const Image = ({ src, alt }) => {
    return <div className={cn('imageSection', style.imageContainer)}>
        <BaseImage
            src={src}
            alt={alt}
            width={0}
            height={0}
            className={style.image}
            unoptimized
        />
    </div>;
}

export default Image;
