import { createContext, useContext,useState,useEffect } from "react";
import{api} from '../lib/api';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const token = localStorage.getItem('token');
        setLoading(false);
        return;
    }, []);

    const login = async (email, password) => {
        const { token } = await api.post('/login', { email, password });
        localStorage.setItem('token', token);
        setUser({ email });
    };

    const logout = () => {
        localStorage.removeItem('token');
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};