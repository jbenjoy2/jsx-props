const Tweet = ({ username, name, date, message }) => {
	return (
		<div>
			<span>{name}</span>
			<span>@{username}</span>
			<p>{message}</p>
			<span>{date}</span>
		</div>
	);
};
