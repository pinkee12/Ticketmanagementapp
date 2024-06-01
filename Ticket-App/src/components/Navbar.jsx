import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { Button, Box } from '@chakra-ui/react';

const Navbar = () => {
    const { isLoggedIn, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <Box display="flex" justifyContent="space-between" p="4" bg="gray.100">
            <Box>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/contact">Contact</Link>
                <Link to="/tickets">Tickets</Link>
            </Box>
            <Box>
                {isLoggedIn ? (
                    <Button onClick={handleLogout}>Logout</Button>
                ) : (
                    <Link to="/login">Login</Link>
                )}
            </Box>
        </Box>
    );
};

export default Navbar;
