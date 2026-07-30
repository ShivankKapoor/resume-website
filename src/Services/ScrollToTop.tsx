import { useEffect } from "react";
import { useLocation } from "react-router";

const ScrollToTop = () => {
    const location = useLocation();

    useEffect(() => {
        window.scrollTo(0, -100);
    }, [location.pathname]);

    return null;
};

export default ScrollToTop;
