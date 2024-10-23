"use client";
import Image from "next/image";
import useCoachDetails from "@/app/hooks/useCoachDetails";
import useCoachNavigation from "@/app/hooks/useCoachNavigation";
import coachData from "@/app/data/coachData.json";
import type { Props } from "@/app/interfaces/CoachDetails";

const CoachDetailsPage = ({ params }: Props) => {
	const { coach } = params;
	const { nextCoachDetails, previousCoach, id } = useCoachNavigation();

	if (!coach) {
		return <h1>No Coach Found</h1>;
	}

	console.log(id);

	return (
		<div className="w-full h-full relative bg-[#F5F5F5] overflow-hidden">
			<h1 className="w-full h-fit absolute top-0 left-0 text-center font-bold text-[90px] p-2">
				Pick a Tale
			</h1>
			<button
				type="button"
				className="z-50 absolute bottom-5 right-5"
				onClick={nextCoachDetails}
			>
				<Image
					src="/icons/right.png"
					alt="right arrow"
					width={48}
					height={48}
				/>
			</button>
			<button
				type="button"
				className="z-50 absolute bottom-5 left-5"
				onClick={previousCoach}
			>
				<Image src="/icons/left.png" alt="left arrow" width={48} height={48} />
			</button>
			<div
				className={`w-full h-full bg-[${coachData.details[0].hex}] z-10 bottom-0 left-0 absolute transition-all duration-300 rounded-t-full`}
				style={{
					transform: `${id === 0 ? "translateX(0) translateY(20vh)" : "translateX(-87vw) translateY(20vh)"}`,
				}}
			>
				<div className="w-full h-full grid grid-cols-2 text-[4rem] lg:text-[5rem]">
					<div className="h-[82%] aspect-[2/3] relative z-30">
						<Image
							src={coachData.details[0].component_1.image_link}
							alt={coachData.details[0].name}
							fill
						/>
					</div>
					<h2 className="self-center font-bold translate-x-14">
						{coachData.details[0].name}
					</h2>
				</div>
			</div>
			<div
				className={`w-full h-full bg-[${coachData.details[1].hex}] z-10 bottom-0 left-0 absolute transition-all duration-300 rounded-t-full`}
				style={{
					transform: `${id === 1 ? "translateX(0) translateY(20vh)" : "translateX(-91vw) translateY(20vh)"}`,
				}}
			>
				<div className="w-full h-full grid grid-cols-2 text-[4rem] lg:text-[5rem]">
					<div className="h-[82%] aspect-[2/3] relative z-30">
						<Image
							src={coachData.details[1].component_1.image_link}
							alt={coachData.details[1].name}
							fill
						/>
					</div>
					<h2 className="self-center font-bold translate-x-14">
						{coachData.details[1].name}
					</h2>
				</div>
			</div>
			<div
				className={`w-full h-full bg-[${coachData.details[2].hex}] z-10 bottom-0 left-0 absolute transition-all duration-300 rounded-t-full`}
				style={{
					transform: `${id === 2 ? "translateX(0) translateY(20vh)" : "translateX(-95vw) translateY(20vh)"}`,
				}}
			>
				<div className="w-full h-full grid grid-cols-2 text-[4rem] lg:text-[5rem]">
					<div className="h-[82%] aspect-[2/3] relative z-30">
						<Image
							src={coachData.details[2].component_1.image_link}
							alt={coachData.details[2].name}
							fill
						/>
					</div>
					<h2 className="self-center font-bold translate-x-14">
						{coachData.details[2].name}
					</h2>
				</div>
			</div>
		</div>
	);
};

export default CoachDetailsPage;
