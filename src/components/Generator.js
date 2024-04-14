import React, { useEffect, useState } from "react";
import { ImProfile } from "react-icons/im";
import { ROUTES } from "../utils/routes";
import { loadData } from "../utils/localStorage";

function Generator({ setPage }) {
	const [jobDescription, setJobDescription] = useState("");

	useEffect(() => {
		const fetchJobDescription = async () => {
			const fetchedJob = await loadData("jobDescription");
			setJobDescription(fetchedJob);
		};

		fetchJobDescription();
	}, []);

	return (
		<div className="flex flex-col">
			<div className="flex flex-row justify-between mx-5 my-3 items-center">
				<button className="border-2 border-solid p-2 border-blue-500 rounded-md text-blue-500 text-lg ">
					{" "}
					Generate{" "}
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
					value={jobDescription}
				/>{" "}
			</div>{" "}
		</div>
	);
}

export default Generator;
