import React, { forwardRef } from 'react';
import { Link as RouterLink } from 'react-router-dom';

type RouterLinkProps = React.ComponentPropsWithoutRef<typeof RouterLink>;
type Props = Omit<RouterLinkProps, 'to'> & {
  href?: RouterLinkProps['to'];
  to?: RouterLinkProps['to'];
};

// Shim for `next/link` using react-router's Link — used only during Vite dev via alias.
const NextLinkShim = forwardRef<HTMLAnchorElement, Props>(
  ({ href, to: toProp, children, ...props }, ref) => {
    const to = href ?? toProp ?? '/';
    return (
      <RouterLink ref={ref} to={to} {...props}>
        {children}
      </RouterLink>
    );
  }
);

NextLinkShim.displayName = 'NextLinkShim';
export default NextLinkShim;
