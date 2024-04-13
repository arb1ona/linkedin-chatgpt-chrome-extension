import React from "react";
import { ImProfile } from "react-icons/im";

function Generator() {
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
				<button className="border-2 border-solid p-2 border-gray-500 rounded-md text-gray-500 text-lg ">
					<ImProfile />
				</button>{" "}
			</div>{" "}
			<div className="flex mx-5">
				<textarea
					rows={12}
					className="w-full border-2 border-solid rounded-md p-2"
					placeholder="Generated cover letter"
				/>{" "}
			</div>{" "}
		</div>
	);
}

export default Generator;
