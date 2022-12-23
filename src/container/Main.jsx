import { Fragment, lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import AllRoutes from "../routes/AllRoutes";
import ErrorBoundary from "../error/ErrorBoundary";
const LazyHeader = lazy(() => import("../components/common/Header"));


const Main = () => {
    return (
        <Fragment>
            <BrowserRouter>
                <ErrorBoundary>
                    <Suspense fallback={<div>Loading header...</div>}>
                        <LazyHeader />
                    </Suspense>
                    <AllRoutes />
                </ErrorBoundary>
            </BrowserRouter>
        </Fragment>
    )
}

export default Main