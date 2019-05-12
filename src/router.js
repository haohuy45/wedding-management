import React from 'react';
import HomePage from './pages/HomePage/HomePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import ListDatTiecCuoiPage from './pages/ListDatTiecCuoiPage/ListDatTiecCuoiPage'
import DatTiecCuoiActionPage from './pages/DatTiecCuoiActionPage/DatTiecCuoiActionPage';
import HomeActionPage from './pages/HomeActionPage/HomeActionPage';
import HoaDonThanhToanPage from './pages/HoaDonThanhToanPage/HoaDonThanhToanPage';
import HoaDonThanhToanActionPage from './pages/HoaDonThanhToanActionPage/HoaDonThanhToanActionPage';
import BaoCaoDoanhSoPage from './pages/BaoCaoDoanhSoPage/BaoCaoDoanhSoPage';
import BaoCaoDoanhSoActionPage from './pages/BaoCaoDoanhSoActionPage/BaoCaoDoanhSoActionPage';
import Login from './components/Login/Login';
import Signup from './components/Signup/Signup';

const router = [
    {
        path: '/login',
        exact: true, 
        main: () => <Login/>
    },
    {
        path: '/Signup',
        exact: true, 
        main: () => <Signup/>
    },
    {
        path: '/',
        exact: true, 
        main: () => <HomePage/>
    },
    {
        path: '/home/add',
        exact: true, 
        main: () => <HomeActionPage/>
    },
    {
        path: '/hoadonthanhtoan-list',
        exact: true, 
        main: () => <HoaDonThanhToanPage/>
    },
    {
        path: '/hoadonthanhtoan/add',
        exact: true, 
        main: () => <HoaDonThanhToanActionPage/>
    },
    {
        path: '/baocaodoanhso-list',
        exact: true, 
        main: () => <BaoCaoDoanhSoPage/>
    },
    {
        path: '/baocaodoanhso/add',
        exact: true, 
        main: () => <BaoCaoDoanhSoActionPage/>
    },
    {
        path: '/dattieccuoi-list',
        exact: false,
        main: () => <ListDatTiecCuoiPage/>
    },
    {
        path: '/dattieccuoi/add',
        exact: false,
        main: () => <DatTiecCuoiActionPage/>
    },
    {
        path: '/dattieccuoi/:id/edit',
        exact: false,
        main: ({match}) => <DatTiecCuoiActionPage match={match}/>
    },
    {
        path: '',
        exact: false,
        main: ()=> <NotFoundPage/>
    }
];

export default router;