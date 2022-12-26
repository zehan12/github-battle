import { Fragment, lazy, Suspense, useReducer } from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "../routes/AllRoutes";
import ErrorBoundary from "../error/ErrorBoundary";
import { StateContext } from "../context/store";
import { initialState, stateReducer } from "../reducer";
import 'animate.css';
const LazyHeader = lazy(() => import("../components/common/Header"));


const Main = () => {
    const [state, dispatch] = useReducer(stateReducer, initialState);
    return (
        <Fragment>
            <BrowserRouter>
                <StateContext.Provider value={{ state, dispatch }}>
                    <ErrorBoundary>
                        <Suspense fallback={<div>Loading header...</div>}>
                            <LazyHeader />
                        </Suspense>
                    </ErrorBoundary>
                    <AllRoutes />
                </StateContext.Provider>
            </BrowserRouter>
        </Fragment>
    )
}

export default Main