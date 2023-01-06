import React, { useContext } from "react";
import GitHubButton from "react-github-btn";
import { AiFillHeart } from "react-icons/ai"
import { StateContext } from "../../context/store";
import { useTranslation } from "react-i18next";

const Footer = () => {
    const { t } = useTranslation()
    const { dispatch, state: { theme } } = useContext(StateContext);
    return (
        <footer
            className={`${theme === 'dark' ? "text-gray-300 bg-blue-800" : "text-gray-800 bg-gray-100"
                } w-full flex justify-center items-center p-14`}
        >
            <section className="w-full lg:w-1/2">
                <nav>
                    <ul className="w-full flex flex-wrap justify-between pt-4 pb-6 text-sm">
                        <li>
                            <a
                                className="hover:text-blue-400"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com/zehan12/github-battle"
                            >
                                {t("contribution")}
                            </a>
                        </li>
                        <li>
                            <a
                                className="hover:text-blue-400"
                                target="_blank"
                                rel="noopener noreferrer"
                                href="https://github.com//zehan12/github-battle/issues"
                            >
                                {t("report a bug")}
                            </a>
                        </li>
                        <li>
                            <GitHubButton
                                href="https://github.com/zehan12/github-battle"
                                data-color-scheme={`no-preference: light; light: ${theme === 'dark' ? "dark" : "light"
                                    }; dark: dark;`}
                                data-icon="octicon-star"
                                data-show-count="true"
                                aria-label="Star chaharshivam/Github-Jobs on GitHub"
                            >
                                {t("star")}
                            </GitHubButton>
                        </li>
                    </ul>
                </nav>
                <p className="font-mono text-xs text-center flex justify-center  items-center gap-5">
                    {t("made with")}{" "}
                    <AiFillHeart size={19} color="red" />
                    <a
                        target="_blank"
                        rel="noopener noreferrer"
                        href="https://twitter.com/zehan9211"
                        className={`${theme === 'dark' ? "text-white" : "text-black"}`}
                    >
                        Zehan Khan
                    </a>
                </p>

            </section>
        </footer>
    );
}

export default Footer;