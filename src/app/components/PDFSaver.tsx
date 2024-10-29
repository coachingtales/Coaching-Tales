"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import useCoachDetails from "@/app/hooks/useCoachDetails";
import type { Props } from "@/app/interfaces/CoachDetails";
import PdfCreator from "@/app/components/PdfCreator";

const SavePDF = ({ params }: Props) => {
	const { choices, coach, path } = params;
	const { name, color, nextCoach, prevCoach, PDF } = useCoachDetails({
		coach,
		path,
		choices,
	} as {
		coach: string;
		path: string;
		choices: string;
	});

	const componentPathTitle = PDF.component_path?.title || "No title available";
	const componentPathTranscript =
		PDF.component_path?.transcript || "No transcript available";
	const componentChoiceTitle =
		PDF.component_choice?.title || "No title available";
	const componentChoiceTranscript =
		PDF.component_choice?.transcript || "No transcript available";
	const componentChoiceImage = PDF.component_choice?.image_link || "";
	const componentPathImage = PDF.component_path?.image_link || "";

	const [email, setEmail] = useState("");
	const [error, setError] = useState("");

	if (!choices) {
		return <div>Loading...</div>;
	}

	const handleSubmit = async (event: React.FormEvent) => {
		event.preventDefault();
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

		if (!email) {
			setError("Email is required, to send you your PDF.");
			return;
		}

		if (!emailRegex.test(email)) {
			setError("Please enter a valid email address.");
			return;
		}

		setError(""); // Clear any previous errors

		await PdfCreator({
			coachName: name,
			pathTitle: componentPathTitle,
			pathTranscript: componentPathTranscript,
			pathImage: componentPathImage,
			choiceTitle: componentChoiceTitle,
			choiceTranscript: componentChoiceTranscript,
			choiceImage: componentChoiceImage,
			email: email,
		});
	};

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(e.target.value);
	};

	return (
		<div className="w-screen h-screen grid grid-rows-10 grid-cols-10 relative overflow-hidden bg-[#F5F5F5]">
			<div
				className="absolute w-[100vw] h-[100vw] translate-y-[-10%] lg:translate-y-[-10%] lg:translate-x-[-10%] z-10 rounded-full top-0 left-0 shadow-xl scale-125 lg:scale-100"
				style={{
					background: color,
				}}
			/>
			<div
				className="absolute w-[100vw] h-[100vw] translate-y-0 lg:translate-y-[-10%] lg:translate-x-0 z-0 rounded-full top-0 left-0 shadow-xl scale-125 lg:scale-100"
				style={{
					background: prevCoach?.hex,
				}}
			/>
			<div
				className="absolute w-[100vw] h-[100vw] translate-y-[-5%] lg:translate-y-[-10%] lg:translate-x-[-5%] z-0 rounded-full top-0 left-0 shadow-xl scale-125 lg:scale-100"
				style={{
					background: nextCoach?.hex,
				}}
			/>
			<h1 className="lg:col-start-2 lg:row-start-2 lg:col-span-6 lg:row-span-4 row-start-2 col-start-2 row-span-4 col-span-8 z-50 text-4xl">
				{!error
					? `To get your copy of ${name.split(" ")[0]}'s biography enter your email
				address`
					: `${error}`}
			</h1>
			<form
				onSubmit={handleSubmit}
				className="col-start-2 row-start-4 col-span-7  z-50 row-span-4 grid grid-cols-10 grid-rows-2"
			>
				<input
					type="email"
					value={email}
					onChange={handleChange}
					placeholder="Enter your email"
					className="px-4 py-2 border text-3xl border-gray-300 h-fit col-start-1 row-start-1 col-span-10 row-span-1 rounded"
					required
				/>
				<div className="row-start-2 col-span-10 flex items-center justify-center row-span-1">
					<button
						type="submit"
						onClick={handleSubmit}
						className="col-start-1 h-fit w-fit border-2 flex gap-4 items-center font-bold border-slate-100 text-3xl rounded-md shadow-xl px-4 py-2"
					>
						Submit
						<Image
							src={"/icons/whistle.png"}
							width={64}
							height={64}
							alt="whistle icon"
						/>
					</button>
				</div>
			</form>
			<Link
				href={"/"}
				className="absolute bottom-5 right-5 w-[100px] h-[100px] z-50 scale-75 shadow-xl rounded-md p-4"
			>
				<Image src="/icons/next.png" alt="back button" width={64} height={64} />
			</Link>
		</div>
	);
};

export default SavePDF;
