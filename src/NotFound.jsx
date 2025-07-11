import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
	let navigate = useNavigate();

	useEffect(
		() => {
			navigate("/");
		}, []
	);

    return (
    	<div style={{ textAlign: 'center', padding: '50px' }}>
        	<h1>404 - Page Not Found</h1>
        	<p>Sorry, the page you are looking for does not exist.</p>
        	<Link to="/">Go to Home Page</Link>
    	</div>
    );
};

export default NotFound;
