import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (

        <div style={{display: "flex", gap: "10px"}}>

            <div style={{ backgroundColor:"white", padding:"20px ", borderRadius: "23px"}}>
                <nav>
                    <NavLink to="/">
                        Home
                    </NavLink>
                </nav>
            </div>

            <div style={{ backgroundColor:"white", padding:"20px ", borderRadius: "23px"}}>
                <nav>
                    <NavLink to="/create">
                        Create
                    </NavLink>
                </nav>
            </div>
        </div>

    )
}