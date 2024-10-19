import UserPorfile from "./UserPorfile";

function NavBar() {
    return (
        <nav>
            <UserPorfile />
            <ul>
                <li>Dashboard</li>
                <li>Nueva Cita</li>
                <li>Promociones</li>

            </ul>
        </nav>
    )

}

export default NavBar;