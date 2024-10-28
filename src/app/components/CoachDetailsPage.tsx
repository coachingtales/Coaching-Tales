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

	const stagger = ["80%", "85%", "90%"];

	return (
		<div className="w-screen h-screen relative grid grid-rows-[100px_1fr] bg-[#F5F5F5] overflow-hidden pointer-events-none">
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
			<h1 className="z-50 text-center place-self-center text-6xl font-bold">
				Pick a Tale
			</h1>

			<div className="relative">
				{coachData.details.map((coach, index) => {
					return (
						<>
							<div
								key={coach.name}
								className="w-[1000px] h-[1000px] rounded-full absolute lg:top-[-5%] top-0 transition-all duration-300 ease-in-out shadow-2xl"
								style={{
									right: index === id ? "0%" : `${stagger[index]}`,
									zIndex: `${index + 1 * 5}`,
									background: coach.hex,
								}}
							/>
							<div
								key={coach.name}
								className="fixed w-full h-full grid grid-rows-[25%_75%] lg:grid-rows-1 lg:grid-cols-[50%_50%] transition-all duration-300 ease-in-out"
								style={{
									transform: `${id === index ? "translateX(0)" : "translateX(-100vw)"}`,
									zIndex: `${index + 1 * 6}`,
								}}
							>
								<div className="h-full lg:col-start-1 row-start-2 lg:row-start-1 lg:row-end-2 justify-self-start lg-justify-self-end lg:justify-self-end">
									<Image
										className="rounded-full"
										src={coach.component_1.image_link}
										alt={coach.name}
										width={500}
										height={500}
									/>
								</div>
								<Link
									href={`/${coach.url}/choose_path`}
									className="pointer-events-auto max-w-2 self-end lg:self-center justify-self-start pl-20 lg:p-0 lg:justify-self-start text-7xl font-bold"
								>
									{coach.name}
								</Link>
							</div>
						</>
					);
				})}
			</div>
		</div>
	);
};

export default CoachDetailsPage;
