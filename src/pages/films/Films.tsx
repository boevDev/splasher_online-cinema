import { api } from '@/api';
import Card from '@/components/card/Card';
import Filters from '@/components/filters/Filters';
import Path from '@/components/path/Path';
import Preloader from '@/components/preloader/Preloader';
import Sorting from '@/components/sorting/Sorting';
import { TFilms } from '@/types';
import { useEffect, useState } from 'react';

const Films: React.FC = () => {
  const [films, setFilms] = useState<null | TFilms[]>(null);

  useEffect(() => {
    api
      .get('/films?_sort=released&_order=desc')
      .then((response) => {
        setFilms(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return films ? (
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
  ) : (
    <div className='flex flex-col justify-center items-center w-full h-[90vh]'>
      <Preloader />
    </div>
  );
};

export default Films;
