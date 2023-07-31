const Character = ({ name, thumbnail }) => {
	return (
		<li className='characters__character'>
			<img
				className='characters__img'
				src={`${thumbnail.path}.${thumbnail.extension}`}
				alt={name}
			/>
		</li>
	);
};

export default Character;
