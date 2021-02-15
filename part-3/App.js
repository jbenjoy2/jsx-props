const App = () => {
	return (
		<div>
			<Person
				name="Peter Griffen"
				age={42}
				hobbies={[ 'fighting giant chickens', 'drinking at the Clam', 'general hijinx' ]}
			/>
			<hr />
			<Person
				name="Lois Griffen"
				age={42}
				hobbies={[ 'cooking', 'playing piano', 'cleaning up after Peter' ]}
			/>
			<hr />
			<Person
				name="Chris Griffen"
				age={15}
				hobbies={[ 'watching adult films', 'picking his nose', 'forgetting to shower' ]}
			/>
			<hr />
			<Person
				name="Meg Griffen"
				age={18}
				hobbies={[ 'eating', 'eating', 'some more eating' ]}
			/>
			<hr />
			<Person
				name="Stewie Griffen"
				age={1.5}
				hobbies={[
					'plotting world domination',
					'inventing time travel',
					'hanging with Brian (the dog)'
				]}
			/>
		</div>
	);
};
