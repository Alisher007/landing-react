import React from 'react';


const footers = [
	{
		title: 'Company',
		description: ['Team', 'History', 'Contact us', 'Locations'],
	},
	{
		title: 'Features',
		description: [
			'Cool stuff',
			'Random feature',
			'Team feature',
			'Developer stuff',
			'Another one',
		],
	},
	{
		title: 'Resources',
		description: [
			'Resource',
			'Resource name',
			'Another resource',
			'Final resource',
		],
	},
	{
		title: 'Auther',
		description: ['Alisher Khalikulov'],
	},
];


const Footer = () =>  {
	return (
	<div className="container">
      <div className="row">
		{footers.map((footer) => (
			<div className="col" key={footer.title}>
				<p>{footer.title}</p>
				<ul>
				{footer.description.map((item) => (
						<li key={item}>
							<a href="#">
								{item}
							</a>
						</li>
					))}
				</ul>
			</div>
		))}
        
        </div>
	</div>
	);
}

export default Footer;
