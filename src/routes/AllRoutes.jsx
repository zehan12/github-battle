import { Fragment } from "react";
import { Route, Routes } from "react-router-dom";
import Battle from "../pages/Battle";
import Home from "../pages/Home"
import Result from "../pages/Result";

const AllRoutes = () => {
    return (
        <Fragment>
            <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/battle" element={<Battle />} />
                    <Route path="/battle/result" element={<Result />} />
            </Routes>
        </Fragment>
    )
}

export default AllRoutes;