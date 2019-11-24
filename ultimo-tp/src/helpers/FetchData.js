const item = {
	grant_type: 'client_credentials',
	client_id: '6m2HxnAKyt3JYwyAMueRfmjsSKFGHmzg',
	client_secret: 'asyxAGKM6hxOO3nz'
}

const toUrlEncoded = (obj) =>
	Object.keys(obj).map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(obj[k])).join('&')

const FetchData = ({iataOrigin, iataDest, fromDate, toDate, adults}) => {
	return fetch('https://test.api.amadeus.com/v1/security/oauth2/token', {
		method: 'post',
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		},
		body: toUrlEncoded(item)
	})
		.then((res) => res.json())
		.then((data) => {
			const accessToken = data.access_token
			return fetch(
				`https://test.api.amadeus.com/v2/shopping/flight-offers?originLocationCode=${iataOrigin}&destinationLocationCode=${iataDest}&departureDate=${fromDate}&returnDate=${toDate}&adults=${adults}&max=50`,
				{
					headers: {
						Authorization: `Bearer ${accessToken}`
					}
				}
			)
				.then((res) => res.json())
				.then((data) => {
					return data
				})
		})
}

export default FetchData