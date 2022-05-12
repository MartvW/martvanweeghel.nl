import ErrorPage from '@components/pages/errorPage/ErrorPage';
import { ReactChild } from 'react';
import { Route, Routes } from 'react-router-dom';

type Props = {
    children: ReactChild[] | ReactChild;
};

const RoutesWrapper = ({ children }: Props) => (
    <Routes>
        {children}
        <Route path="*" element={<ErrorPage error={404} />} />
    </Routes>
);

export default RoutesWrapper;