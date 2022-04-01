import { Link, useMatch, useResolvedPath } from 'react-router-dom';

type Props = {
    to: string,
    icon?: any,
    name: string,
};

const NavItem = ({ to, icon, name }: Props) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname });

    return (
        <Link to={to} className={`flex items-center gap-2 cursor-pointer text-white text-2xl link-underline ${match ? 'link-underline-active' : null}`}>
            {icon}
            {name}
        </Link>
    );
};

export default NavItem;