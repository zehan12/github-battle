import { Fragment, lazy, Suspense, useEffect, useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "../routes/AllRoutes";
import ErrorBoundary from "../error/ErrorBoundary";
import { StateContext } from "../context/store";
import { initialState, stateReducer } from "../reducer";
import 'animate.css';
import Bouncer from "../components/common/Bouncer";

import "../i18next/index"

const LazyHeader = lazy(() => import("../components/common/Header"));
const LazyFooter = lazy(() => import("../components/common/Footer"));




const Main = () => {
    // console.log(I18nextProvider)
    const [state, dispatch] = useReducer(stateReducer, initialState);
    const theme = state.theme;
    useEffect(() => {
        document.querySelector('body').style.background = theme === 'dark' ? `#abb5da` : `rgb(251,250,205)`
    }, [theme])
    return (
        <Fragment>
            <BrowserRouter>
                <StateContext.Provider value={{ state, dispatch }}>
                    <div
                        className={`font-sans mx-40 my-10 `}
                    // ${theme === 'dark' ? `bg-[#BA94D1]` : `bg-amber-200` }`}
                    >
                        <ErrorBoundary>
                            <Suspense fallback={<Bouncer />}>
                                < LazyHeader />
                            </Suspense>
                        </ErrorBoundary>
                        <AllRoutes />
                    </div>
                    <ErrorBoundary>
                        <Suspense fallback={<Bouncer />}>
                            <LazyFooter />
                        </Suspense>
                    </ErrorBoundary>
                </StateContext.Provider>
            </BrowserRouter>
        </Fragment >
    )
}

export default Main