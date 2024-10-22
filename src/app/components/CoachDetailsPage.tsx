"use client";
import Link from "next/link";
import Image from "next/image";
import useCoachDetails from "@/app/hooks/useCoachDetails";
import useCoachNavigation from "@/app/hooks/useCoachNavigation";
import coachData from "@/app/data/coachData.json";
import type { Props } from "@/app/interfaces/CoachDetails";

const CoachDetailsPage = ({ params }: Props) => {
	const { coach } = params;
	const {
		id,
		transition,
		loading,
		firstPage,
		coachesUrl,
		nextCoach,
		previousCoach,
		chooseCoach,
	} = useCoachNavigation();

	const { name, born, active, location, color } = useCoachDetails({
		coach: coachesUrl,
	} as {
		coach: string;
	});

	if (!coach) {
		return <div>Loading...</div>;
	}

	if (!name) {
		return (
			<div className="text-5xl w-fit h-fit absolute top-1/2 right-1/2 translate-x-1/2 z-10 text-nowrap">
				Loading...
			</div>
		);
	}

	return (
		<div className="w-full h-full flex gap-5 text-slate-100 justify-start items-start flex-col transition-all duration-300 relative bg-slate-800">
			<h2
				className={`${loading ? "opacity-0" : "opacity-100"} transition-all duration-300 text-3xl sm:text-5xl w-fit h-fit absolute top-1/2 right-1/2 translate-x-1/2 z-10 text-nowrap`}
			>
				{name}
			</h2>
			<div className="flex lg:flex-row flex-col h-full w-full">
				<section
					className={`
            rounded-br-full 
            rounded-bl-full 
            lg:rounded-bl-none 
            lg:rounded-r-full 
            text-slate-100 
            p-8
            z-20
            w-full 
			h-full
            ${transition ? "translate-x-[-200vw]" : "translate-x-0"} 
            transition-all 
            duration-300 
            shadow-2xl`}
					style={{ background: `${color}` }}
				>
					<div
						className={`gap-4 ${!firstPage ? "grid grid-cols-2 grid-rows-[1fr-1fr] w-full h-3/4 lg:h-full lg:w-3/4" : "flex flex-col justify-center items-center mt-5 w-full h-full"}`}
					>
						<div
							className={`w-fit h-fit p-5 rounded-3xl flex flex-col gap-4 items-center justify-center ${firstPage ? "border border-slate-50 shadow-lg" : ""} justify-center items-center text-3xl`}
						>
							<div className="w-80 rounded-xl object-cover overflow-hidden">
								<Image
									className="rounded-xl saturate-100"
									src={`${coachData.details[id].component_1.image_link}`}
									alt={`${name} portrait`}
									width={600}
									height={600}
								/>
							</div>
							{name && firstPage && <h1>{name}</h1>}
						</div>
						<div
							className={`${!firstPage ? "h-full w-full flex justify-center items-start p-4" : ""}`}
						>
							{!firstPage && (
								<div className="p-4 h-fit w-fit flex gap-6 flex-col">
									{name && <h1 className="text-3xl">{name}</h1>}
									{born && (
										<div className="flex flex-col gap-1 text-2xl">
											<span>Born:</span> {born}
										</div>
									)}
									{active && (
										<div className="flex flex-col gap-1 text-2xl">
											<span>Active:</span> {active}
										</div>
									)}
									{location && (
										<div className="flex flex-col gap-1 text-2xl">
											<span>Location:</span> {location}
										</div>
									)}
								</div>
							)}
						</div>

						{!firstPage && (
							<div className="w-full h-full col-span-2 flex flex-row gap-4 justify-around items-center">
								<Link
									className="text-slate-100 px-6 py-4 text-xl rounded-xl font-bold w-fit  text-center border-[#ececec] border-4 shadow-lg"
									href={`/${coachesUrl}/Football`}
								>
									Football Coaching
								</Link>
								<Link
									className="text-slate-100 px-6 py-4 text-xl rounded-xl font-bold w-fit  text-center border-[#ececec] border-4 shadow-lg"
									href={`/${coachesUrl}/Culture`}
								>
									Culture and Influence
								</Link>
							</div>
						)}
						{firstPage && (
							<div className="w-full h-full col-span-2 flex flex-row gap-4 justify-around items-center">
								<button
									type="button"
									className="text-slate-100 px-6 py-4 text-xl rounded-xl font-bold w-fit  text-center border-[#ececec] border-4 shadow-lg"
									onClick={chooseCoach}
								>
									Choose Coach
								</button>
							</div>
						)}
					</div>
				</section>
				{firstPage && (
					<div
						className="lg:w-[10%] w-full lg:h-full h-[10%] flex lg:flex-col flex-row gap-4 justify-evenly items-center"
						style={{ filter: "invert(1)" }}
					>
						<button
							className={`rotate-180 ${loading ? "opacity-0" : "opacity-100"} transition-all duration-300`}
							type="button"
							onClick={previousCoach}
						>
							<Image
								src="/icons/icons8-right-arrow-50.png"
								alt="right arrow"
								width={50}
								height={50}
							/>
						</button>
						<button
							type="button"
							onClick={nextCoach}
							className={`${loading ? "opacity-0" : "opacity-100"} transition-all duration-300`}
						>
							<Image
								src="/icons/icons8-right-arrow-50.png"
								alt="right arrow"
								width={50}
								height={50}
							/>
						</button>
					</div>
				)}
			</div>
		</div>
	);
};

export default CoachDetailsPage;
