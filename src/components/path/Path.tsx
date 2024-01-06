import { Link } from 'react-router-dom';

const Path: React.FC = () => {
  return (
    <div className='flex flex-row flex-nowrap gap-2 text-grey-200 font-bold font-monts text-sm'>
      <Link className='text-white underline' to='/'>
        Главная
      </Link>
      /<div className=''>Фильмы</div>
    </div>
  );
};

export default Path;
