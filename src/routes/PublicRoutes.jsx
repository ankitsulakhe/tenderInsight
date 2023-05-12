import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/public/HomePage.jsx"));
const AboutPage = lazy(() => import("../pages/public/AboutPage.jsx"));
const LoginPage = lazy(() => import("../pages/public/LoginPage.jsx"));
const EprocurementPage = lazy(() => import("../pages/public/EprocurementPage.jsx"));

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/eprocurement' element={<EprocurementPage />} />
            <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
    );
};

export default PublicRoutes;
