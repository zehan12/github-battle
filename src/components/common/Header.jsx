import { Fragment, useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import { Gb } from "react-flags-select";
import { StateContext } from "../../context/store";
import * as actions from "../../action/index";


const Header = () => {

    const { dispatch, state } = useContext(StateContext);
    const [selected, setSelected] = useState("GB");
    const [theme, setTheme] = useState("false");

    const handleTheme = () => {
        setTheme(!theme);
    }

    console.log(`Language:${selected}, Theme:${theme} `, dispatch, state, actions)
    return (
        <Fragment>
            <nav className="flex justify-between items-center">
                <ul className="flex gap-2 text-l font-semibold">
                    <li  className="text-red-700 ">
                        <NavLink to="/" className="a-bomb"> Home </NavLink>
                    </li>
                    <li>
                        <NavLink to="/battle">Battle</NavLink>
                    </li>
                </ul>
                <div className="flex items-center gap-7">
                    <ReactFlagsSelect
                        className="flags"
                        countries={["GB", "ES", "FR", "DE", "IT"]}
                        placeholder={<Gb />}
                        showOptionLabel={false}
                        showSelectedLabel={false}
                        selectedSize={23}
                        selected={selected}
                        optionsSize={23}
                        onSelect={
                            (code) => {
                                // console.log(code) 
                                setSelected(code)
                                //     dispatch({type: "CHANGE_LANGUAGE", language: languageMap(code)});
                            }
                        }
                    />
                    <p
                        onClick={handleTheme}
                        className="text-2xl mb-1 cursor-pointer"
                        style={{ width: "100%" }}
                        title="Theme">
                        {theme ? "🌚" : "🌞"}
                    </p>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header;