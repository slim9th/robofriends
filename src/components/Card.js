import React from 'react';

const Card = ({name, email, id, phone, ws, comp}) => {
	return (
		// <h1>RoboFriends</h1>
		<div className="tc bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5">
			<img alt="robots" src={`https://robohash.org/${id}?200x200`} />
			<div>
				<h2>{name}</h2>
				<p>{email}</p>
				<p>{phone}</p>
				<p>{ws}</p>
				<p>{id}</p>
				<p>{comp}</p>

			</div>
		</div>
		);
}

export default Card;