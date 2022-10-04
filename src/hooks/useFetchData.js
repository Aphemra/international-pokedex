import { useEffect, useState } from "react";

function useFetchData(apiString, id = "") {
	const [data, setData] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			const response = await fetch(`${apiString}/${id}`);
			const results = await response.json();
			setData(results);
		};
		fetchData();
	}, [apiString, id]);

	return data;
}

export default useFetchData;
