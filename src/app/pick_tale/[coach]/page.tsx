"use client";
import { useParams } from "next/navigation";
import Link from "next/link";
import useCoachDetails from "@/app/hooks/useCoachDetails";
import Image from "next/image";

const CoachDetailsPage: React.FC = () => {
	const { coach, path } = useParams();
	const { detailsImage, name, born, active, location } = useCoachDetails({
		coach,
		path,
	} as {
		coach: string;
		path: string;
	});

	if (!coach) {
		return <div>Loading...</div>;
	}

	if (!name) {
		return <div>Coach not found</div>;
	}

	return (
		<div className="w-dvw h-dvh grid place-content-center">
			<h1 className="text-4xl font-bold underline">{name}</h1>
			<ul className="space-y-2">
				<li>{name}</li>
				{born && <li>{born}</li>}
				<li>{active}</li>
				<li>{location}</li>
				<li>
					<Link href={`/pick_tale/${coach}/Football`}>Football</Link>
				</li>
				<li>
					<Link href={`/pick_tale/${coach}/Culture`}>Culture</Link>
				</li>
			</ul>
			{detailsImage && (
				<div className="w-80 object-cover overflow-hidden aspect-square">
					<Image
						src={detailsImage}
						alt="Coach image"
						width={500}
						height={500}
					/>
				</div>
			)}
		</div>
	);
};

export default CoachDetailsPage;
