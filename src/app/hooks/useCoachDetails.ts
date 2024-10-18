// hooks/useCoachDetails.ts
import { useEffect, useState } from "react";
import coachData from "@/app/data/coachData.json";
import type {
	CoachComponents,
	ComponentDetails,
} from "@/app/interfaces/CoachDetails";

interface UseCoachDetailsParams {
	coach: string | undefined;
	path: string | undefined;
	choices?: string | undefined;
}

interface UseCoachDetailsResult {
	details: string;
	detailsTitle: string;
	detailsAudio: string;
	detailsImage: string;
}

const useCoachDetails = ({
	coach,
	path,
	choices,
}: UseCoachDetailsParams): UseCoachDetailsResult => {
	const [details, setDetails] = useState("");
	const [detailsTitle, setDetailsTitle] = useState("");
	const [detailsAudio, setDetailsAudio] = useState("");
	const [detailsImage, setDetailsImage] = useState("");

	useEffect(() => {
		if (!coach) return;

		const coachDetails = coachData.details.find(
			(coachURL: CoachComponents) => coachURL.url === coach,
		);

		if (!coachDetails) {
			setDetails("Coach not found");
			setDetailsTitle("");
			setDetailsAudio("");
			setDetailsImage("");
			return;
		}

		let selectedDetails: ComponentDetails | undefined;

		if (path === "Football") {
			if (choices) {
				selectedDetails =
					choices === "choice_1"
						? coachDetails.component_4
						: coachDetails.component_5;
			} else {
				selectedDetails = coachDetails.component_2;
			}
		} else {
			if (choices) {
				selectedDetails =
					choices === "choice_1"
						? coachDetails.component_6
						: coachDetails.component_7;
			} else {
				selectedDetails = coachDetails.component_3;
			}
		}

		if (!selectedDetails) {
			setDetails("No details found");
			setDetailsTitle("");
			setDetailsAudio("");
			setDetailsImage("");
			return;
		}

		setDetails(selectedDetails.transcript || "");
		setDetailsTitle(selectedDetails.title || "");
		setDetailsAudio(selectedDetails.audio_file || "");
		setDetailsImage(selectedDetails.image_link || "");
	}, [coach, path, choices]);

	return { details, detailsTitle, detailsAudio, detailsImage };
};

export default useCoachDetails;
