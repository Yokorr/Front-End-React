import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {useAuth} from '../contexts/AuthContext';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();
    const { login } = useAuth();

    function handleSubmit(e) {
        e.preventDefault();
        login(email, password).then(() => {
            navigate('/');
            
        }).catch((err) => {
            alert('Login failed: ' + err.message);
        });
    }
    
    return (
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px', width: '300px' }}>
                <h2>Login</h2>
                <input 
                    type="email" 
                    placeholder="Email" 
                    required 
                    value={email} 
                    onChange={(e) => setEmail(e.target.value)} 
                />
                <input 
                    type="password" 
                    placeholder="Password" 
                    required 
                    value={password} 
                    onChange={(e) => setPassword(e.target.value)} 
                />
                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;