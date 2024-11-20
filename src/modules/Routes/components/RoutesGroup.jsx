import { Route } from "react-router-dom";
import { ROUTES } from "../const.jsx";

export function RoutesGroup () {
    const basePath = '/';
    return (
        <>
            {ROUTES.map(({ path, element }, index) => (
                <Route key={index} path={`${basePath}${path}`} element={element} />
            ))}
        </>
    );
}
