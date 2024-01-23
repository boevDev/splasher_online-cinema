import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '@/store/store';
import Preloader from '@/components/preloader/Preloader';
import { useParams } from 'react-router-dom';
import FilmInfo from '@/components/filmInfo/filmInfo';
import { fetchDataFilms } from '@/store/films/films.slice';
import { useEffect } from 'react';

const FilmDetails: React.FC = () => {
  const params = useParams();

  const films = useSelector((state: RootState) => state.dataFilms.data);
  const isLoading = useSelector(
    (state: RootState) => state.dataFilms.isLoading
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchDataFilms());
  }, [dispatch]);

  const movie = films && films.find((el) => el.id === Number(params.id));

  return isLoading ? (
    <div className='flex flex-col justify-center items-center w-full h-[90vh]'>
      <Preloader />
    </div>
  ) : (
    <div className='w-[calc(100%-16px)] max-w-screen-2xl mx-auto px-2'>
      {movie && <FilmInfo {...movie} key={movie.id} />}
    </div>
  );
};

export default FilmDetails;
