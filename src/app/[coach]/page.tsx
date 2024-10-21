"use client";
import { useParams } from "next/navigation";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import useCoachDetails from "@/app/hooks/useCoachDetails";
import coachData from "@/app/data/coachData.json";

const CoachDetailsPage: React.FC = () => {
	const { coach } = useParams();
	const [id, setId] = useState(0);
	const [transition, setTransition] = useState(false);
	const [loading, setLoading] = useState(false);

	const coachesUrl = coachData.details[id].url;

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

	function nextCoach() {
		setTransition(true);
		setLoading(true);
		setTimeout(() => {
			if (id === coachData.details.length - 1) {
				setId(0);
			} else {
				setId(id + 1);
			}
			setTransition(false);
			setLoading(false);
		}, 300);
	}

	function previousCoach() {
		setTransition(true);
		setLoading(true);
		setTimeout(() => {
			if (id === 0) {
				setId(coachData.details.length - 1);
			} else {
				setId(id - 1);
			}
			setTransition(false);
			setLoading(false);
		}, 300);
	}

	return (
		<div
			className="w-dvw h-dvh flex gap-10 text-slate-100 justify-start items-start flex-col overflow-hidden transition-all duration-300 relative"
			style={{ background: `${color}` }}
		>
			<h2 className="text-5xl w-fit h-fit absolute top-1/2 right-1/2 translate-x-1/2 z-10 text-nowrap">
				{name}
			</h2>
			<div className="flex lg:flex-row flex-col h-full w-full">
				<section
					className={`bg-slate-800
						rounded-br-full 
						rounded-bl-full 
						lg:rounded-bl-none 
						lg:rounded-r-full 
						text-slate-100 
						p-6
						z-20 
						lg:w-[90%] 
						w-full 
						h-[90%] 
						lg:h-full 
						${transition ? "translate-x-[-200vw]" : "translate-x-0"} 
						transition-all 
						duration-300 
						shadow-2xl`}
					style={{ background: `${color}` }}
				>
					<div className="w-full h-[80%] lg:h-full lg:w-[80%]  grid grid-cols-2 grid-rows-[1fr-1fr]">
						<div className="w-80 rounded-xl object-cover overflow-hidden">
							<Image
								className="rounded-xl saturate-100"
								src={`${coachData.details[id].component_1.image_link}`}
								alt={`${name} portrait`}
								width={600}
								height={600}
							/>
						</div>
						<div>
							{name && (
								<h1 className="p-2 text-nowrap text-3xl font-bold">{name}</h1>
							)}
							<div className="p-4 h-full w-full flex gap-4 flex-col">
								{born && (
									<div className="flex flex-col gap-1 text-xl">
										<span>Born:</span> {born}
									</div>
								)}
								{active && (
									<div className="flex flex-col gap-1 text-xl">
										<span>Active:</span> {active}
									</div>
								)}
								{location && (
									<div className="flex flex-col gap-1 text-xl">
										<span>Location:</span> {location}
									</div>
								)}
							</div>
						</div>

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
					</div>
				</section>
				<div
					className="lg:w-[10%] w-full lg:h-full h-[10%] flex lg:flex-col flex-row gap-4 justify-evenly items-center"
					style={{ filter: "invert(1)" }}
				>
					<button className="rotate-180" type="button" onClick={previousCoach}>
						<Image
							src="/icons/icons8-right-arrow-50.png"
							alt="right arrow"
							width={50}
							height={50}
						/>
					</button>
					<button type="button" onClick={nextCoach}>
						<Image
							src="/icons/icons8-right-arrow-50.png"
							alt="right arrow"
							width={50}
							height={50}
						/>
					</button>
				</div>
			</div>
		</div>
	);
};

export default CoachDetailsPage;
