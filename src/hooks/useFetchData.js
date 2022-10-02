import { useEffect, useState } from "react";

function useFetchData(apiString) {
	const [data, setData] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(apiString);
			const results = await response.json();
			setData(results);
		};
		fetchData();
	}, []);

	return data;
}

export default useFetchData;
