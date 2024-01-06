import SearchIcon from './assets/search-icon.svg?react';
import { useState } from 'react';
// import searchIcon from './assets/search-icon.svg';

const Search: React.FC = () => {
  const [focus, setFocus] = useState(false);

  return (
    <div
      className={`w-96 ${
        focus ? 'bg-white text-black' : 'bg-white/10 text-white'
      } rounded-2xl flex flex-row justify-between items-center pr-4 `}
    >
      <input
        className='w-full py-2 px-4'
        placeholder='Поиск'
        style={{ outline: 'none', backgroundColor: 'transparent' }}
        onFocus={() => {
          setFocus(true);
        }}
        onBlur={() => {
          setFocus(false);
        }}
      />
      <button>
        <SearchIcon className='w-4 h-4 fill-grey-200' />
      </button>
    </div>
  );
};

export default Search;
