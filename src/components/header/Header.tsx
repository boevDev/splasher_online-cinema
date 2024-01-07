import Profile from '../profile/Profile';
import Search from '../search/Search';
import Logo from './assets/logo-icon.svg?react';
import { NavLink } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header className='w-full bg-primary-200'>
      <div className='w-[calc(100%-16px)] max-w-screen-2xl mx-auto py-4 px-2 flex flex-row justify-between items-center'>
        <div className='flex flex-row justify-between gap-4 items-center'>
          <a href='/'>
            <Logo className='w-64' />
          </a>
          <nav className='flex flex-row gap-1 text-lg justify-between items-center'>
            <NavLink
              className='py-1 px-3 rounded-2xl hover:bg-white/10 transition-all duration-75'
              to='/'
            >
              Главная
            </NavLink>
            <NavLink
              className='py-1 px-3 rounded-2xl hover:bg-white/10 transition-all duration-75'
              to='/films'
            >
              Фильмы
            </NavLink>
            <NavLink
              className='py-1 px-3 rounded-2xl hover:bg-white/10 transition-all duration-75'
              to='/series'
            >
              Сериалы
            </NavLink>
            <NavLink
              className='py-1 px-3 rounded-2xl hover:bg-white/10 transition-all duration-75'
              to='/cartoons'
            >
              Мультфильмы
            </NavLink>
          </nav>
        </div>
        <div className='flex flex-row justify-between gap-4 items-center'>
          <Search />
          <Profile />
        </div>
      </div>
    </header>
  );
};

export default Header;
