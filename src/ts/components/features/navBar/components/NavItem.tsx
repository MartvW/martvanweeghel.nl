import { Link, useMatch, useResolvedPath } from 'react-router-dom';

type Props = {
    to: string,
    name: string,
};

const NavItem = ({ to, name }: Props) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname });

    return (
        <Link to={to} className={`cursor-pointer text-white text-2xl link-underline ${match ? 'link-underline-active' : null}`}>
            {name}
        </Link>
    );
};

export default NavItem;