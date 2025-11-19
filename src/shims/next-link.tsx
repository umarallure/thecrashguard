import React, { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type Props = React.ComponentProps<typeof RouterLink> & { href?: string };

// Shim for `next/link` using react-router's Link — used only during Vite dev via alias.
const NextLinkShim = forwardRef<HTMLAnchorElement, Props>(({ href, children, ...props }, ref) => {
  // react-router's Link uses `to`.
  const to = (href ?? (props as any).to) as string;
  return (
    <RouterLink ref={ref as any} to={to} {...props}>
      {children}
    </RouterLink>
  );
});

NextLinkShim.displayName = 'NextLinkShim';
export default NextLinkShim;
