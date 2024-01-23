import { TFilms } from '@/types';

const FilmDetails: React.FC<TFilms> = (props) => {
  const { image, name } = props;

  return (
    <div>
      <h1>{name}</h1>
      <img src={image} alt='...' />
    </div>
  );
};

export default FilmDetails;
