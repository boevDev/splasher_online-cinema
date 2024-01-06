import AngleIcon from '@/assets/angle-icon.svg?react';

type TFilterButton = {
  content: string;
};

const FilterButton: React.FC<TFilterButton> = (props) => {
  const { content } = props;

  return (
    <button className='flex-1 flex flex-row flex-nowrap justify-between items-center text-left to-80% bg-gradient-to-br from-white/20 to-white/10 p-4 shadow-md'>
      {content} <AngleIcon className='w-5 h-5' />
    </button>
  );
};

export default FilterButton;
