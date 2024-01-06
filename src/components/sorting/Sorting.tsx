import SortIcon from './assets/sorting-icon.svg?react';
import AngleIcon from '@/assets/angle-icon.svg?react';

const Sorting: React.FC = () => {
  return (
    <button className='flex flex-row flex-nowrap items-center gap-1 font-bold'>
      <SortIcon className='w-6 h-6' />
      По популярности
      <AngleIcon className='w-5 h-5' />
    </button>
  );
};

export default Sorting;
