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
								className="fixed w-full h-full grid grid-cols-10 grid-rows-10 gap-5 transition-all duration-300 ease-in-out"
								style={{
									transform: `${id === index ? "translateX(0)" : "translateX(-100vw)"}`,
									zIndex: `${index + 1 * 6}`,
								}}
							>
								<div className="row-start-2 col-start-1 lg:col-start-2 row-span-8 col-span-7 lg:col-span-4 relative">
									<Image
										src={coach.component_1.image_link}
										alt={coach.name}
										fill
									/>
								</div>
								<Link
									href={`/${coach.url}/choose_path`}
									className="pointer-events-auto text-5xl lg:col-start-5 lg:row-start-5 flex justify-center items-center font-bold row-start-2 col-start-1 col-span-8 lg:col-span-7"
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
