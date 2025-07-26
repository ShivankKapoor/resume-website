import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function usePageTracker() {
  const location = useLocation();

  useEffect(() => {
    let isCancelled = false;

    const trackVisit = async () => {
      // Check if the environment variable is defined
      if (!process.env.REACT_APP_LOG_API_URL) {
        console.warn("Page tracking disabled: REACT_APP_LOG_API_URL environment variable not configured");
        return;
      }

      const page = location.pathname + location.search;
      const deviceInfo = `${navigator.platform}, ${navigator.userAgent}`;

      try {
        if (isCancelled) return;

        const response = await fetch(process.env.REACT_APP_LOG_API_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            pageVisited: page,
            deviceInfo: deviceInfo,
          }),
        });

        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status} - ${response.statusText}`);
        }

        // Optional: Log successful tracking in development
        if (process.env.NODE_ENV === 'development') {
          console.log(`Page tracked: ${page}`);
        }

      } catch (err) {
        if (!isCancelled) {
          console.error("Page tracking error:", err);
          
          // Optional: You could implement fallback tracking here
          // or send errors to an error reporting service
        }
      }
    };

    // Add a small delay to avoid rapid-fire requests during navigation
    const timeoutId = setTimeout(trackVisit, 100);

    return () => {
      isCancelled = true;
      clearTimeout(timeoutId);
    };
  }, [location]);
}

export default usePageTracker;