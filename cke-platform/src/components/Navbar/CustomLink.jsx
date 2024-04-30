import { Link, useMatch, useResolvedPath } from "react-router-dom"

export default function CustomLink({to, children, ...props}){

    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end: true})

    return (
        <li className={isActive ? "active" : ""} style={{listStyle:"none", margin: "0", height: "100%", display: "flex", alignItems: "center"}}>
            <Link to={to} {...props}>
                {children}
            </Link>
        </li>
    )
}
