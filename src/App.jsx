import ListCharacters from './components/ListCharacters';
import Header from './components/header/Header';
import { CharactersProvider } from './context/charactersProvider';

const App = () => {
	return (
		<>
			<CharactersProvider>
				<Header />
				<ListCharacters />
			</CharactersProvider>
		</>
	);
};

export default App;

// 1f5449b2c0151246078ffa93da5b390f35f8b086eefcfb70e0ce8495e4395417a0a62adaf
// c53015b560e887bef0bad5ff76c1befc;

// const fetchData = async () => {
// 	const data = await conectAPI(URL);
// 	console.log(data);
// };
// fetchData();
