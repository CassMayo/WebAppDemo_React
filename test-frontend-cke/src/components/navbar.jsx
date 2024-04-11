import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (

        <>

            <div style={{ width: "100px", height: "100px" }}>
                <nav>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </nav>
            </div>

            <div style={{ width: "100px", height: "100px" }}>
                <nav>
                    <NavLink to="/create">
                        Create
                    </NavLink>
                </nav>
            </div>
        </>

    )
}