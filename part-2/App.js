const App = () => {
	return (
		<div>
			<Tweet
				name="Robin Birdman"
				username="chirper1"
				date={new Date().toDateString()}
				message="tweet tweet!#imABird"
			/>
			<hr />
			<Tweet
				name="Robin Birdman"
				username="chirper1"
				date={new Date().toDateString()}
				message="chirp chirp!#imABird"
			/>
			<hr />
			<Tweet
				name="Robin Birdman"
				username="chirper1"
				date={new Date().toDateString()}
				message="gobble gobble!#imABird"
			/>
		</div>
	);
};
