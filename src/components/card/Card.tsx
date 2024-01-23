import { TFilms } from '@/types';

const Card: React.FC<TFilms> = (props) => {
  const { image, name, rating, released, duration } = props;

  return (
    <div className='flex flex-col w-48 gap-2 p-2 rounded-lg relative hover:scale-105 transition-all'>
      <img className='rounded-lg h-64 object-cover' src={image} alt='img' />
      <div className='font-semibold font-monts  whitespace-nowrap text-ellipsis overflow-hidden'>
        {name}
      </div>
      <div className='absolute top-0 left-0 w-10 h-7 flex flex-row justify-center items-center bg-gradient-to-r from-[#ffdb80] to-[#ac9c71] text-primary-white shadow-md rounded-lg text-center font-extrabold font-monts text-sm'>
        <span className='drop-shadow'>{rating}</span>
      </div>
      <div className='text-sm text-white/50 font-monts font-semibold'>
        {released}, {duration} мин.
      </div>
    </div>
  );
};

export default Card;
