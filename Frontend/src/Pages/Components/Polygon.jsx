import React from 'react';
import '../styles/Polygon.css';

function Polygon(props) {
	return (
		<div className='hexagon'>
			<span>
				{' '}
				<h2 className='hexanum'>
					{props.num}
					<br /> <h3 className='hexacap'>{props.caption}</h3>{' '}
				</h2>{' '}
			</span>
		</div>
	);
}
export default Polygon;
