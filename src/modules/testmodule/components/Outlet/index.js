import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { isFetching } from 'http-redux/selectors';
import SkeletonTemplate from 'components/SkeletonTemplate';

import { fetchTestData } from '../../actions';
import { FETCH_TEST_DATA } from '../../actions/types';
import Index from '../Index';

const Outlet = () => {
    const dispatch = useDispatch();
    const _isFetching = useSelector(isFetching(FETCH_TEST_DATA));

    useEffect(() => {
        dispatch(fetchTestData());
    }, []);

    return (
        <div className="test-module-outlet">
            {
                _isFetching
                ? <SkeletonTemplate type="lines" />
                : <Index />
            }
        </div>
    );
};

export default Outlet;
