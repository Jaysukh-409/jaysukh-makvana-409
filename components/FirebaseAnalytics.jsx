"use client";

import { useEffect } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { analytics } from "@/lib/firebase";
import { logEvent } from "firebase/analytics";

export default function FirebaseAnalytics() {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  useEffect(() => {
    if (analytics) {
      logEvent(analytics, "page_view", {
        page_path: pathname,
      });
    }
  }, [pathname, searchParams]);

  return null;
}