
import React from 'react';


const Header = ( {message} ) => {
	return (
		<div>
			<h2 className="Header text-center">
				{message}
			</h2>
			<div>
				...
			</div>
		</div>
	);
};

Header.propTypes = {
	message: React.PropTypes.string
};

export default Header;

