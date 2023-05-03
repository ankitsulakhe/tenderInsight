import React from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import { isAuth } from "../helpers/cookies.js";
import PublicLayout from "../pages/public/layout/PublicLayout.jsx";

function Index() {

    return (
        <>
            <Router>
                <Routes>
                    {/* {isAuth() ? (
                        <Route path="/*" element={<PublicRoutes />} />
                    ) : ( */}
                        <Route path="/*" element={<PublicLayout />} />
                    {/* )} */}
                    <Route path="*" element={<Navigate replace to="/" />} />
                </Routes>
            </Router>
        </>
    );
}

export default Index;
