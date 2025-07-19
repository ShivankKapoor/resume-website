import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { supabase } from "../Services/supabaseClient";

function usePageTracker() {
  const location = useLocation();

  useEffect(() => {
    let isCancelled = false;

    const trackVisit = async () => {
      const page = location.pathname + location.search;
      const deviceInfo = `${navigator.platform}, ${navigator.userAgent}`;

      try {
        const res = await fetch("https://api.ipify.org?format=json");
        if (isCancelled) return;

        const data = await res.json();
        const ip = data.ip;

        const { error } = await supabase.from("page_visits").insert([
          {
            ip_address: ip,
            page_visited: page,
            device_info: deviceInfo,
          },
        ]);

        if (error) {
          console.error("Supabase insert error:", error);
        }
      } catch (err) {
        if (!isCancelled) {
          console.error("IP fetch error:", err);
        }
      }
    };

    trackVisit();

    return () => {
      isCancelled = true;
    };
  }, [location]);
}

export default usePageTracker;
