"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export function RequireAuth({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const checkAuth = () => {
      const token = document.cookie
        .split("; ")
        .find((row) => row.startsWith("sb-token="))
        ?.split("=")[1];

      if (!token) {
        router.push("/staff/login");
        return;
      }

      try {
        const tokenData = JSON.parse(atob(token));
        if (tokenData.exp < Date.now()) {
          // Token expired
          document.cookie = "sb-token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
          router.push("/staff/login");
          return;
        }
        setIsAuthenticated(true);
      } catch (error) {
        console.error("Auth error:", error);
        router.push("/staff/login");
      }
    };

    checkAuth();
  }, [router]);

  if (!isAuthenticated) {
    return null;
  }

  return <>{children}</>;
} 