import { useSelector } from 'react-redux';

import { isActiveRoute } from 'siteMap/selectors';

export const useActiveSelector = pathname => useSelector(isActiveRoute)(pathname);