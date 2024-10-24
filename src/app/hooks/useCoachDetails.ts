"use client";
import { useEffect, useState } from "react";
import coachData from "@/app/data/coachData.json";
import type {
	CoachComponents,
	ComponentDetails,
	UseCoachDetailsParams,
	UseCoachDetailsResult,
} from "@/app/interfaces/CoachDetails";

const useCoachDetails = ({
	coach,
	path,
	choices,
}: UseCoachDetailsParams): UseCoachDetailsResult => {
	const [details, setDetails] = useState("");
	const [detailsTitle, setDetailsTitle] = useState("");
	const [detailsAudio, setDetailsAudio] = useState("");
	const [detailsImage, setDetailsImage] = useState("");
	const [name, setName] = useState("");
	const [born, setBorn] = useState("");
	const [active, setActive] = useState("");
	const [location, setLocation] = useState("");
	const [color, setColor] = useState("");
	const [PDF, setPDF] = useState<Record<string, ComponentDetails>>({});
	const [prevCoach, setPrevCoach] = useState<CoachComponents | null>(null);
	const [nextCoach, setNextCoach] = useState<CoachComponents | null>(null);
	const [coachImage, setCoachImage] = useState("");

	useEffect(() => {
		if (!coach) return;

		const coachDetails = coachData.details.find(
			(coachURL: CoachComponents) => coachURL.url === coach,
		);

		if (!coachDetails) {
			setDetails("");
			setDetailsTitle("");
			setDetailsAudio("");
			setDetailsImage("");
			setName("");
			setBorn("");
			setActive("");
			setLocation("");
			setPDF({});
			setColor("");
			setPrevCoach(null);
			setNextCoach(null);
			setCoachImage("");
			return;
		}

		setName(coachDetails.name || "");
		setBorn(coachDetails.key_facts.born || "");
		setActive(coachDetails.key_facts.active || "");
		setLocation(coachDetails.key_facts.location || "");
		setColor(coachDetails.hex || "");
		setCoachImage(coachDetails.component_1.image_link || "");

		let selectedDetails: ComponentDetails | undefined;
		let PDF: Record<string, ComponentDetails> = {};

		if (path === "Football") {
			if (choices) {
				selectedDetails =
					choices === "choice_1"
						? coachDetails.component_4
						: coachDetails.component_5;
				PDF =
					choices === "choice_1"
						? {
								component_path: coachDetails.component_2,
								component_choice: coachDetails.component_4,
							}
						: {
								component_path: coachDetails.component_2,
								component_choice: coachDetails.component_5,
							};
			} else {
				selectedDetails = coachDetails.component_2;
				PDF = {
					component_path: coachDetails.component_2,
					component_choice_1: coachDetails.component_4,
					component_choice_2: coachDetails.component_5,
				};
			}
		} else {
			if (choices) {
				selectedDetails =
					choices === "choice_1"
						? coachDetails.component_6
						: coachDetails.component_7;
				PDF =
					choices === "choice_1"
						? {
								component_path: coachDetails.component_3,
								component_choice: coachDetails.component_6,
							}
						: {
								component_path: coachDetails.component_3,
								component_choice: coachDetails.component_7,
							};
			} else {
				selectedDetails = coachDetails.component_3;
				PDF = {
					component_path: coachDetails.component_3,
					component_choice_1: coachDetails.component_6,
					component_choice_2: coachDetails.component_7,
				};
			}
		}

		if (!selectedDetails) {
			setDetails("");
			setDetailsTitle("");
			setDetailsAudio("");
			setDetailsImage("");
			setPDF({});
			return;
		}

		setDetails(selectedDetails.transcript || "");
		setDetailsTitle(selectedDetails.title || "");
		setDetailsAudio(selectedDetails.audio_file || "");
		setDetailsImage(selectedDetails.image_link || "");
		setPDF(PDF);

		// Get the current coach index
		const currentIndex = coachData.details.findIndex(
			(coachItem: CoachComponents) => coachItem.url === coach,
		);

		const totalCoaches = coachData.details.length;

		if (currentIndex !== -1) {
			// Looping logic for previous coach
			const previousIndex = (currentIndex - 1 + totalCoaches) % totalCoaches;
			setPrevCoach(coachData.details[previousIndex]);

			// Looping logic for next coach
			const nextIndex = (currentIndex + 1) % totalCoaches;
			setNextCoach(coachData.details[nextIndex]);
		} else {
			setPrevCoach(null);
			setNextCoach(null);
		}
	}, [coach, path, choices]);

	return {
		details,
		detailsTitle,
		detailsAudio,
		detailsImage,
		name,
		born,
		active,
		location,
		PDF,
		color,
		prevCoach,
		nextCoach,
		coachImage,
	};
};

export default useCoachDetails;
