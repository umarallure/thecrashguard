/*
  Shim for `next/navigation` to make Vite dev possible by mapping Next Navigation hooks to react-router-dom
  This file is used only in Vite dev via alias in vite.config.ts.
*/
import { useNavigate, useLocation, useParams } from 'react-router-dom';

export function useRouter() {
  const navigate = useNavigate();
  // simple object mimicking Next router push/replace
  return {
    push: (url: string, options?: { replace?: boolean }) => {
      if (options?.replace) navigate(url, { replace: true } as any);
      else navigate(url as any);
    },
    replace: (url: string) => navigate(url as any, { replace: true } as any),
  };
}

export function useSearchParams() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  return {
    get: (k: string) => params.get(k),
    // for compatibility with `searchParams.get('key')` call usage in components
    has: (k: string) => params.has(k),
  };
}

export function usePathname() {
  const location = useLocation();
  return location.pathname;
}
