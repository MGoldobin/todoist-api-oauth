import React, { useEffect, useState } from 'react'
import { AUTH_URL } from '../vendor/constants'

const PublicPage = () => {
	return (
		<div>
			<h1>PublicPage</h1>
			<a href={AUTH_URL}>Auth</a>
		</div>
	)
}

export default PublicPage