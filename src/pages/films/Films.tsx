import Card from '@/components/card/Card';
import Filters from '@/components/filters/Filters';
import Path from '@/components/path/Path';
import Preloader from '@/components/preloader/Preloader';
import Sorting from '@/components/sorting/Sorting';
import { fetchDataFilms } from '@/store/films/films.slice';
import { AppDispatch, RootState } from '@/store/store';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Films: React.FC = () => {
  const films = useSelector((state: RootState) => state.dataFilms.data);
  const isLoading = useSelector(
    (state: RootState) => state.dataFilms.isLoading
  );
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(fetchDataFilms());
  }, [dispatch]);

  return isLoading ? (
    <div className='flex flex-col justify-center items-center w-full h-[90vh]'>
      <Preloader />
    </div>
  ) : (
    <div className='w-[calc(100%-16px)] max-w-screen-2xl mx-auto px-2'>
      <div className='mt-4'>
        <Path />
      </div>
      <div className='mt-4'>
        <Sorting />
      </div>
      <div className='mt-4'>
        <Filters />
      </div>
      <div className='mt-4 bg-primary-200 flex flex-row justify-center p-4 rounded-2xl shadow-lg'>
        <div className='w-full mx-auto grid grid-cols-[repeat(auto-fit,minmax(192px,1fr))] grid-flow-row gap-x-4 gap-y-6 place-items-center align-top'>
          {films &&
            films.map((item) => {
              return <Card {...item} key={item.id} />;
            })}
        </div>
      </div>
    </div>
  );
};

export default Films;
