import React, { useEffect, useState } from "react";
import { ImProfile } from "react-icons/im";
import { ROUTES } from "../utils/routes";
import { loadData } from "../utils/localStorage";
import { postChatGPTMessage } from "../utils/chatGPTUtil";

function Generator({ setPage, resume, openAIKey }) {
	const [isLoading, setIsLoading] = useState(false);
	const [jobDescription, setJobDescription] = useState("");
	const [coverLetter, setCoverLetter] = useState("");

	useEffect(() => {
		const fetchJobDescription = async () => {
			const fetchedJob = await loadData("jobDescription");
			setJobDescription(fetchedJob);
		};

		fetchJobDescription();
	}, []);

	const generateCoverLetter = async () => {
		setIsLoading(true);
		try {
			const message = `Generate a cover letter based on the following resume and job description:\n${resume}\n\nJob Description:\n${jobDescription}`;
			const chatGPTResponse = await postChatGPTMessage(message, openAIKey);
			setCoverLetter(chatGPTResponse);
		} catch (error) {
			console.error(error);
		} finally {
			setIsLoading(false);
		}
	};

	return (
		<div className="flex flex-col">
			<div className="flex flex-row justify-between mx-5 my-3 items-center">
				<button
					onClick={() => generateCoverLetter()}
					className="border-2 border-solid p-2 border-blue-500 rounded-md text-blue-500 text-lg "
				>
					{isLoading ? "Generating..." : "Generate"}{" "}
				</button>{" "}
				<h2 className="text-2xl font-bold text-slate-700">
					{" "}
					LinkedIn Cover Letter Generator{" "}
				</h2>{" "}
				<button
					onClick={() => {
						setPage(ROUTES.PROFILE);
					}}
					className="border-2 border-solid p-2 border-gray-500 rounded-md text-gray-500 text-lg "
				>
					<ImProfile />
				</button>{" "}
			</div>{" "}
			<div className="flex mx-5">
				<textarea
					rows={12}
					className="w-full border-2 border-solid rounded-md p-2"
					placeholder="Generated cover letter"
					value={coverLetter}
				/>{" "}
			</div>{" "}
		</div>
	);
}

export default Generator;
