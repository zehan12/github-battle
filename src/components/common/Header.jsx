import { Fragment, useContext, useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import ReactFlagsSelect from "react-flags-select";
import { Gb } from "react-flags-select";
import { StateContext } from "../../context/store";
import * as actions from "../../action/index";
import { useTranslation } from "react-i18next";



const Header = () => {
    const { t, i18n } = useTranslation()
    const { dispatch, state: { theme } } = useContext(StateContext);
    const [language, setLanguage] = useState(localStorage.getItem('lang'))
    const handleTheme = () => {
        if (theme === "light") dispatch({ type: actions.DARK })
        else dispatch({ type: actions.LIGHT })
    }

    return (
        <Fragment>
            <nav className="flex justify-between items-center">
                <ul className="flex gap-2 text-l font-semibold">
                    <li className="text-red-700 ">
                        <NavLink to="/" className="a-bomb">{t("home")}</NavLink>
                    </li>
                    <li>
                        <NavLink to="/battle">{t("battle")}</NavLink>
                    </li>
                </ul>
                <div className="flex items-center gap-7">
                    <ReactFlagsSelect
                        className="flags"
                        countries={["GB", "ES"]}
                        placeholder={<Gb />}
                        showOptionLabel={false}
                        showSelectedLabel={false}
                        selectedSize={23}
                        selected={language}
                        optionsSize={23}
                        onSelect={
                            (code) => {
                                setLanguage(code)
                                localStorage.setItem('lang', code)
                                i18n.changeLanguage(code)
                            }
                        }
                    />
                    <p
                        onClick={handleTheme}
                        className="text-2xl mb-1 cursor-pointer"
                        style={{ width: "100%" }}
                        title="Theme">
                        {theme === 'dark' ? "🌚" : "🌞"}
                    </p>
                </div>
            </nav>
        </Fragment>
    )
}

export default Header;