import CloseIcon from './assets/close-icon.svg?react';
import FilterButton from './filterButton/FilterButton';

const Filters: React.FC = () => {
  return (
    <div className='bg-primary-200 mx-auto p-4 shadow-lg'>
      <div className='flex flex-row flex-nowrap justify-between font-bold font gap-6'>
        <FilterButton content='Жанры' />
        <FilterButton content='Страны' />
        <FilterButton content='Годы' />
        <FilterButton content='Рейтинг' />
      </div>
      <button className='flex flex-row items-center gap-1 mt-4'>
        <CloseIcon className='w-5 h-5' />
        Сбросить фильтры
      </button>
    </div>
  );
};
export default Filters;
