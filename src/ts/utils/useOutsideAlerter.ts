import { useEffect } from 'react';

const useOutsideAlerter = (ref: any, callBack: any, callBackValue: any) => {
    useEffect(() => {
        const handleClickOutside = (event: any) => {
            if (ref.current && !ref.current.contains(event.target)) {
                callBack(callBackValue);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ref]);
};

export default useOutsideAlerter;