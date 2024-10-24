"use client";
import Image from "next/image";
import Link from "next/link";
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
		<div className="w-full h-full relative bg-[#F5F5F5] overflow-hidden pointer-events-none">
			<button
				type="button"
				className="z-50 absolute bottom-5 right-5 pointer-events-auto"
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
				className="z-50 absolute bottom-5 left-5 pointer-events-auto"
				onClick={nextCoachDetails}
			>
				<Image src="/icons/left.png" alt="left arrow" width={48} height={48} />
			</button>
			{coachData.details.map((coach, index) => {
				return (
					<div
						key={coach.name}
						className="h-screen w-screen fixed grid grid-rows-[100px,1fr]"
					>
						<h1 className="w-full h-fit text-center font-bold text-[9dvw] p-2 z-50">
							Pick a Tale
						</h1>
						<div
							className={
								"w-full pointer-events-none h-full lg:bottom-0 top-[-10%] lg:top-0 left-0 absolute transition-all duration-300 rounded-t-full shadow-2xl"
							}
							style={{
								zIndex: `${index + 1 * 5}`,
								background: coach.hex,
								transform: `${id === index ? "translateX(0) translateY(20vh)" : `translateX(-${index * 5 + 85}vw) translateY(20vh)`}`,
							}}
						/>
						<div
							className={
								"w-screen h-screen grid grid-rows-[100px, 1fr] lg:grid-cols-2 place-items-center text-[7dvw] transition-all duration-300"
							}
							style={{
								transform: `${id === index ? "translateX(0) translateY(0)" : "translateX(-100vw)"}`,
								zIndex: `${index + 1 * 6}`,
							}}
						>
							<Link
								className="w-fit p-6 lg:justify-self-end self-end lg:self-center lg:row-start-1 lg:col-start-2 pointer-events-auto"
								href={`/${coach.url}`}
							>
								<div className="w-fit font-bold text-center lg:text-left">
									{coach.name}
								</div>
							</Link>
							<div className="w-fit h-full lg:justify-self-end lg:row-start-1 lg:col-start-1">
								<Image
									src={coach.component_1.image_link}
									alt={coach.name}
									width={500}
									height={500}
								/>
							</div>
						</div>
					</div>
				);
			})}
		</div>
	);
};

export default CoachDetailsPage;
