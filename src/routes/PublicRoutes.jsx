import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";

const HomePage = lazy(() => import("../pages/public/HomePage.jsx"));
const AboutPage = lazy(() => import("../pages/public/AboutPage.jsx"));
const LoginPage = lazy(() => import("../pages/public/LoginPage.jsx"));
const EprocurementPage = lazy(() =>
    import("../pages/public/EprocurementPage.jsx")
);
const ContactUsPage = lazy(() => import("../pages/public/ContactUsPage.jsx"));
const ServicePage = lazy(() => import("../pages/public/ServicePage.jsx"));

const TendersBySectors = lazy(() =>
    import("../pages/tenders/TendersBySectors.jsx")
);
const TendersByRegions = lazy(() =>
    import("../pages/tenders/TendersByRegions.jsx")
);
const TendersByCpvCodes = lazy(() =>
    import("../pages/tenders/TendersByCpvCodes.jsx")
);
const TendersListPage = lazy(() =>
    import("../pages/tenders/TendersListPage.jsx")
);
const TendersDetailsPage = lazy(() =>
    import("../pages/tenders/TendersDetailsPage.jsx")
);

const ProjectsBySectors = lazy(() =>
    import("../pages/projects/ProjectsBySectors.jsx")
);
const ProjectsByRegions = lazy(() =>
    import("../pages/projects/ProjectsByRegions.jsx")
);
const ProjectsListPage = lazy(() =>
    import("../pages/projects/ProjectsListPage.jsx")
);
const ProjectsDetailsPage = lazy(() =>
    import("../pages/projects/ProjectsDetailsPage.jsx")
);

const ContractAwardsListPage = lazy(() =>
    import("../pages/contract_awards/ContractAwardsListPage.jsx")
);
const ContractAwardsDetailsPage = lazy(() =>
    import("../pages/contract_awards/ContractAwardsDetailsPage.jsx")
);

const GrantsListPage = lazy(() =>
    import("../pages/grants/GrantsListPage.jsx")
);
const GrantsDetailsPage = lazy(() =>
    import("../pages/grants/GrantsDetailsPage.jsx")
);

const PublicRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<HomePage />} />
            <Route path='/about' element={<AboutPage />} />
            <Route path='/login' element={<LoginPage />} />
            <Route path='/eprocurement' element={<EprocurementPage />} />
            <Route path='/contact' element={<ContactUsPage />} />
            <Route path='/service' element={<ServicePage />} />
            <Route path='/tenders-by-sectors' element={<TendersBySectors />} />
            <Route path='/tenders-by-regions' element={<TendersByRegions />} />
            <Route
                path='/tenders-by-cpvcodes'
                element={<TendersByCpvCodes />}
            />
            <Route path='/tenders-list' element={<TendersListPage />} />
            <Route path='/tenders/:ref_no' element={<TendersDetailsPage />} />

            <Route path='/projects-by-sectors' element={<ProjectsBySectors />} />
            <Route path='/projects-by-regions' element={<ProjectsByRegions />} />
            <Route path='/projects-list' element={<ProjectsListPage />} />
            <Route path='/projects/:project_id' element={<ProjectsDetailsPage />} />

            <Route path='/contract-awards-list' element={<ContractAwardsListPage />} />
            <Route path='/contract-awards/:ref_no' element={<ContractAwardsDetailsPage />} />

            <Route path='/grants-list' element={<GrantsListPage />} />
            <Route path='/grants/:ref_no' element={<GrantsDetailsPage />} />

            <Route path='*' element={<Navigate replace to='/' />} />
        </Routes>
    );
};

export default PublicRoutes;
