import React, { useEffect, useState } from "react";
import Generator from "./components/Generator";
import Profile from "./components/Profile";
import { ROUTES } from "./utils/routes";
import { loadData } from "./utils/localStorage";
// import GeneratorTrigger from "./components/GeneratorTrigger";

function App() {
	const [page, setPage] = useState();
	const [resume, setResume] = useState();
	const [openAIKey, setOpenAIKey] = useState();

	useEffect(() => {
		const fetchLocalData = async () => {
			const fetchedResume = await loadData("resume");
			const fetchedOpenAIKey = await loadData("openAIKey");

			setResume(fetchedResume);
			setOpenAIKey(fetchedOpenAIKey);
		};

		fetchLocalData();
	}, []);

	switch (page) {
		case ROUTES.GENERATOR:
			return (
				<Generator setPage={setPage} resume={resume} openAIKey={openAIKey} />
			);
		case ROUTES.PROFILE:
			return (
				<Profile
					setPage={setPage}
					resume={resume}
					setResume={setResume}
					openAIKey={openAIKey}
					setOpenAIKey={setOpenAIKey}
				/>
			);

		default:
			return (
				<Generator setPage={setPage} resume={resume} openAIKey={openAIKey} />
			);
	}
}

export default App;
