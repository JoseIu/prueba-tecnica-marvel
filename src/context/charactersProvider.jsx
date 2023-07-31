import { createContext, useEffect, useState } from 'react';
import conectAPI from '../helper/conectApi';

const CharactersContext = createContext();

export const CharactersProvider = ({ children }) => {
	const [characters, setCharacters] = useState([]);
	const [search, setSearch] = useState('');

	const getCharacters = async () => {
		const datas = await conectAPI();
		const { results } = datas.data;
		setCharacters(results);
	};
	const searchCharter = async (searchs) => {
		const datas = await conectAPI(searchs);
		const { results } = datas.data;
		setCharacters(results);
	};

	useEffect(() => {
		getCharacters();
	}, []);

	return (
		<CharactersContext.Provider
			value={{ characters, searchCharter, search, setSearch }}
		>
			{children}
		</CharactersContext.Provider>
	);
};

export default CharactersContext;
