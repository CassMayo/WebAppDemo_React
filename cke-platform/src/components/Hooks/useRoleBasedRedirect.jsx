
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useRoleBasedRedirect = (allowedRoles) => {
    const navigate = useNavigate();
    useEffect(() => {
        const userRole = localStorage.getItem('userRole');
        if (!allowedRoles.includes(userRole)) {
            navigate('/login');
        }
    }, [navigate, allowedRoles]);
};

export default useRoleBasedRedirect;
