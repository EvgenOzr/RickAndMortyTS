import {
    BrowserRouter as Router,
    Routes,
    Route,
    useLocation,
} from "react-router-dom";
import { routeConfig } from "./routeConfig";

const AppRouter = () => {
    const NoMatch = () => {
        const location = useLocation();

        return (
            <div>
                <h3>
                    Page not found<code>{location.pathname}</code>
                </h3>
            </div>
        );
    };
    return (
        <Routes>
            {Object.values(routeConfig).map(({ element, path }) => (
                <Route key={path} path={path} element={element} />
            ))}
        </Routes>
    );
};

export default AppRouter;
