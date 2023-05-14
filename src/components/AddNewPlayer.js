import {useState} from 'react';

const AddNewPlayers = (props) => {

	const [newPlayer, setNewPlayer] = useState('');

	const handleSubmit = (event) => {
		event.preventDefault()
		props.newPlayer(newPlayer)
		setNewPlayer('')
	};

	return(
		<form onSubmit={(event) => handleSubmit(event)}>
			<input type="text" placeholder="Enter a player's name" value={newPlayer} onChange={e => setNewPlayer(e.target.value)} />
			<input type="submit" value="Add Player" />
		</form>
	);
};

export default AddNewPlayers;