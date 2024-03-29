import Header from '@/components/header/Header';
import { Routes, Route } from 'react-router-dom';
import Main from './pages/main/Main';
import Films from './pages/films/Films';
import FilmDetails from './pages/filmDetails/FilmDetails';

export default function App() {
  return (
    <div className='w-full h-full text-white font-nunito'>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='films' element={<Films />} />
        <Route path='/films/:id' element={<FilmDetails />} />
      </Routes>
    </div>
  );
}
