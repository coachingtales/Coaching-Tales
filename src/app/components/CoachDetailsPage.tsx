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

	const stagger = ["-96%", "-98%", "-100%"];

	return (
		<div className="w-screen h-screen relative grid grid-rows-[100px_1fr] bg-[#F5F5F5] overflow-hidden pointer-events-none">
			<button
				type="button"
				className="z-50 absolute bottom-10 right-10 w-[10vmin] pointer-events-auto"
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
				className="z-50 absolute bottom-10 left-10 w-[10vmin] pointer-events-auto"
				onClick={nextCoachDetails}
			>
				<Image src="/icons/left.png" alt="left arrow" width={48} height={48} />
			</button>
			<h1 className="z-50 text-center place-self-center text-6xl font-bold">
				Pick a Tale
			</h1>

			<div className="relative">
				{coachData.details.map((coach, index) => {
					const uniqueKey = `coach-${index}`; // Use a clear, consistent unique key

					return (
						<div key={uniqueKey}>
							<div
								className="w-[100vw] h-[100vw] rounded-full absolute scale-125 lg:scale-100 translate-y-[15%] lg:translate-y-0 transition-all duration-300 ease-in-out shadow-2xl"
								style={{
									left: index === id ? "0%" : `${stagger[index]}`,
									zIndex: `${index + 1 * 5}`,
									background: coach.hex,
								}}
							/>
							<div
								className="fixed w-full h-full flex flex-col justify-center items-center lg:flex-row-reverse transition-all duration-300 ease-in-out"
								style={{
									transform: `${id === index ? "translateX(0)" : "translateX(-100vw)"}`,
									zIndex: `${index + 1 * 6}`,
								}}
							>
								<Link
									href={`/${coach.url}/choose_path`}
									className="pointer-events-auto text-4xl font-bold text-center"
								>
									{coach.name}
								</Link>
								<Link
									href={`/${coach.url}/choose_path`}
									className="pointer-events-auto "
								>
									<Image
										className="scale-110"
										src={coach.component_1.image_link}
										alt={coach.name}
										width={500}
										height={500}
										priority
									/>
								</Link>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default CoachDetailsPage;
