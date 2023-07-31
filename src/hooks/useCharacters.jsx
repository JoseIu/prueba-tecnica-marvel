import { useContext } from 'react';
import CharactersContext from '../context/charactersProvider';

const useCharacters = () => {
	return useContext(CharactersContext);
};

export default useCharacters;
