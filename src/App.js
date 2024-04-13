import React, { useState } from "react";
import Generator from "./components/Generator";
import Profile from "./components/Profile";
import { ROUTES } from "./utils/routes";

function App() {
	const [page, setPage] = useState();

	const [resume, setResume] = useState("resume test");
	const [openAIKey, setOpenAIKey] = useState("test key");

	switch (page) {
		case ROUTES.GENERATOR:
			return <Generator setPage={setPage} />;
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
			return <Generator setPage={setPage} />;
	}
}

export default App;
