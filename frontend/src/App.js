import logo from './logo.svg';
import './App.css';
import Header from './components/Header/Header';
import AppRoutes from './AppRoutes';
import HomePage from './pages/Home/HomePage';
import { Route, Routes } from 'react-router-dom';
import { useLoading } from './hooks/useLoading';
import { setLoadingInterceptor } from './interceptors/loadingInterceptor';
import { useEffect } from 'react';
import Loading from './components/Loading/Loading';



function App() {
    const { showLoading, hideLoading } = useLoading();

    useEffect(() => {
      setLoadingInterceptor({ showLoading, hideLoading });
    }, []);
    
    return (
        <div>
            <Loading/>
            <Header/>
             <AppRoutes/>
        </div>
    )
}

export default App;
