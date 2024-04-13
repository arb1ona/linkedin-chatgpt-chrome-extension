import React from "react";
import { IoMdArrowRoundBack } from "react-icons/io";

const Profile = () => {
	return (
		<div className="flex flex-col mx-5 my-5">
			<div className="flex justify-between">
				<h2 className="text-2xl font-bold text-slate-700"> Profile </h2>{" "}
				<button className="border-2 border-solid p-2 border-gray-500 rounded-[100%] text-gray-500 text-lg ">
					<IoMdArrowRoundBack />
				</button>{" "}
			</div>{" "}
			<form className="flex-col">
				<div className="mb-6">
					<label
						htmlFor="openAIKey"
						className="block mb-2 text-sm font-medium text-gray-800 dark:text-white"
					>
						{" "}
						Your Open AI Key{" "}
					</label>{" "}
					<input
						id="openAIKey"
						type="text"
						name="openAIKey"
						className="bg-gray-50 w-full border border-gray-300 text-gray-900 text-sm rounded-lg"
						placeholder="sk-...1234"
						required
					/>
				</div>{" "}
			</form>{" "}
			<div className="mb-6">
				<label
					htmlFor="resume"
					className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
				>
					{" "}
					Your Resume{" "}
				</label>{" "}
				<textarea
					id="resume"
					name="resume"
					rows={8}
					className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border-gray-600"
					placeholder="Paste your resume here...?"
				></textarea>{" "}
				<div className="mb-6 text-center">
					<button
						type="submit"
						className="border-2 border-solid my-5 py-2 px-3 border-blue-500 text-blue-500 text-lg rounded-md"
					>
						Save{" "}
					</button>{" "}
				</div>{" "}
			</div>{" "}
		</div>
	);
};

export default Profile;
