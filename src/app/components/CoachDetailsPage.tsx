"use client";
import Image from "next/image";
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
				onClick={previousCoach}
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
				onClick={nextCoachDetails}
			>
				<Image src="/icons/left.png" alt="left arrow" width={48} height={48} />
			</button>
			{coachData.details.map((coach, index) => {
				return (
					<div
						key={coach.name}
						className={
							"w-full h-full z-10 bottom-0 left-0 absolute transition-all duration-300 rounded-t-full shadow-2xl"
						}
						style={{
							background: coach.hex,
							transform: `${id === index ? "translateX(0) translateY(20vh)" : `translateX(-${index * 5 + 85}vw) translateY(20vh)`}`,
						}}
					>
						<div className="w-full h-full grid grid-cols-2 text-[4rem] lg:translate-x-[4vw] lg:text-[5rem]">
							<div className="h-[82%] aspect-[2/3] relative z-30 translate-x-[-8vw] lg:translate-x-0">
								<Image
									src={coach.component_1.image_link}
									alt={coach.name}
									fill
								/>
							</div>
							<h2 className="self-center font-bold lg:translate-x-[-10vw]">
								{coach.name}
							</h2>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CoachDetailsPage;
