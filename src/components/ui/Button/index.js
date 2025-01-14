'use client';

import { useRouter } from 'next/navigation';
import './button.scss';
import cn from '@/utils/classnames';

const Button = ({ children, className, main = false, href = null, ...props }) => {
    const router = useRouter();

    return <button
        onClick={href !== null ? (() => router.push(href)) : (() => {})}
        className={cn('button', className, {
            ['button--main']: main,
        })}
        {...props}
    >
        {children}
    </button>;
}

export default Button;
