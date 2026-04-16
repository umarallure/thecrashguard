/*
  Shim for `next/navigation` to make Vite dev possible by mapping Next Navigation hooks to react-router-dom
  This file is used only in Vite dev via alias in vite.config.ts.
*/
import { useLocation, useNavigate } from 'react-router-dom';

interface RouterOptions {
  replace?: boolean;
}

export function useRouter() {
  const navigate = useNavigate();

  return {
    push: (url: string, options?: RouterOptions) => {
      navigate(url, { replace: Boolean(options?.replace) });
    },
    replace: (url: string) => navigate(url, { replace: true }),
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
