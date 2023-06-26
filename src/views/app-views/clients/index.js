import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

const Clients = () => {
	return (
		<Routes>
			<Route path="*" element={<Navigate to="mail/inbox" replace />} />
		</Routes>
	)
}

export default Clients;