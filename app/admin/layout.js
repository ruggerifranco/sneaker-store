'use client'
import { useAuthContext } from '../context/AuthContext';
import LoginPage from './login/page';

const AdminLayout = ({ children }) => {
    const { user } = useAuthContext()
    console.log(user.logged)


    return (
        <div>
            {
            user.logged ? children : <LoginPage />
            }
        </div>
    );
};

export default AdminLayout;
