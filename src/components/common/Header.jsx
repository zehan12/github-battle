import { Fragment } from "react"
import { NavLink } from "react-router-dom";

const Header = () => {
    return (
        <Fragment>
            <nav>
                <ul className="flex gap-2 text-l font-semibold">
                    <li className="text-red-700">
                        <NavLink to="/"> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/battle">Battle</NavLink>
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Header;