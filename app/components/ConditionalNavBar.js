'use client';
import { useAuthContext } from '../context/AuthContext';
import AdminNavBar from './admin/AdminNavBar';
import NavBar from './NavBar';

const ConditionalNavBar = () => {
  const { user } = useAuthContext();

  return user && user.logged ? <AdminNavBar /> : <NavBar />;
};

export default ConditionalNavBar;
