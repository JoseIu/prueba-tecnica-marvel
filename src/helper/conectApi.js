const conectAPI = async (search) => {
	if (search) {
		const URL = `${import.meta.env.VITE_API_URL}nameStartsWith=${search}${
			import.meta.env.VITE_API_HASH
		}`;
		const req = await fetch(URL);
		const data = await req.json();
		return data;
	}
	const URL = `${import.meta.env.VITE_API_URL}${import.meta.env.VITE_API_HASH}`;
	const req = await fetch(URL);
	const data = await req.json();
	return data;
};

export default conectAPI;
