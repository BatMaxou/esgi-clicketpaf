import style from './Header.module.scss';

const Header = ({title, children}) => {
    return <header className={style.header}>
        <h1>{title}</h1>
        {children}
    </header>;
}

export default Header;
