const Person = ({ name, age, hobbies }) => {
	const ageString = age >= 18 ? 'Please go vote!' : 'you must be 18 to vote!';
	const hobbiesList = hobbies.map((h) => <li>{h}</li>);
	return (
		<div>
			<p>Learn some information about this person</p>
			<ul>
				<li>This person's name is {name.slice(0, 6)}</li>
				<li>This person is {age} years old</li>
				<ul>
					Their hobbies:
					{hobbiesList}
				</ul>
			</ul>
			<h3>{ageString}</h3>
		</div>
	);
};
