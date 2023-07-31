import useCharacters from '../hooks/useCharacters';
import Character from './Character';

import './ListCharacters.scss';

const ListCharacters = () => {
	const { characters } = useCharacters();
	const charactersRendered = characters.map((character) => (
		<Character key={character.id} {...character} />
	));
	console.log(characters);

	return <ul className='characters wrapper'>{charactersRendered}</ul>;
};

export default ListCharacters;
