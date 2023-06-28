import React from 'react';


const DataNotFoundMessage = () => {
	return (
		<div className="flex items-center justify-center">
			<div className="bg-red-600 p-8 rounded shadow-lg">
				<h2 className="text-2xl font-semibold mb-4 text-white text-center">Data Not Found</h2>
				<p className="text-white">Sorry, the requested data could not be found.</p>
			</div>
		</div>
	);
};

export default DataNotFoundMessage;
