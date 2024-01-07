import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useAuth = () => {
  const [token, setToken] = useState(localStorage.getItem('user_token') || null);
  const [user, setUser] = useState(localStorage.getItem('user_name') || null);
  const [Id, setId] = useState(localStorage.getItem('userId') || null)
  const navigate = useNavigate();
    
  const login = (userToken, userName, userId) => {
    setToken(userToken);
    localStorage.setItem('user_token', userToken);
    
    setUser(userName);
    localStorage.setItem('user_name', userName); 
    
    setId(userId);
    localStorage.setItem('user_id', userId); 
  };

  const logout = () => {
    setToken(null);
    setUser(null);
    localStorage.removeItem('user_token');
    localStorage.removeItem('user_name');
    navigate('/login')
  };
  return { token, user, login, logout };
};

export default useAuth;
