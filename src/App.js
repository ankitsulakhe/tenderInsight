import React, { Suspense, lazy } from "react";
import Routes from "./routes";

const FullScreenLoadingGrow = lazy(() => import("./components/common/FullScreenLoadingGrow"));

class App extends React.Component {

    render() {
        return (
            <Suspense fallback={<FullScreenLoadingGrow />}>
                <Routes />
            </Suspense>
        );
    }
}

export default App;