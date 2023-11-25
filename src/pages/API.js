import { useState, useEffect } from "react";

const API = () => {
	const [dogimageURL, setDogURL] = useState("");

	useEffect(() => {
		 fetch("https://dog.ceo/api/breeds/image/random")
			.then((res) => res.json())
			.then((json) => {
				setDogURL(json.message);
			});
	}, []);

	return (
		<>
			<h1>Here is a random dog from the dog api:</h1>
			<img src={dogimageURL} alt="A random dog" width={500}></img>
			<small>if there is no image, please refresh</small>
		</>
	);
};

export default API;
