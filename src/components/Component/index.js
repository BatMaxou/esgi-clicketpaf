import Text from "@/components/Text";
import Image from "@/components/Image";
import TextImg from "@/components/TextImg";
import style from "./Component.module.scss";
import cn from '@/utils/classnames';

const componentsMap = {
    Text,
    Image,
    TextImg,
};

const Component = ({ type, colored = false, ...content }) => {    
    const C = componentsMap[type];

    if (!C) {
        console.error(`Unknown component type: ${type}`);
        return null;
    }

    return <section className={cn(style.section, {[style.colored]: colored})}>
        <C {...content} />
    </section>;
}

export default Component;
