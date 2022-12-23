import { Fragment } from "react"

const Header = ( ) => {
    return(
        <Fragment>
            <nav>
                <ul className="flex gap-2 text-l font-semibold"> 
                    <li className="text-red-700">
                        Battle
                    </li>
                    <li>
                        Popular
                    </li>
                </ul>
            </nav>
        </Fragment>
    )
}

export default Header;