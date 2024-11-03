"use client";
import { useState } from "react";
import coachData from "@/app/data/coachData.json";

const useCoachNavigation = () => {
	const [id, setId] = useState(0);
	const [transition, setTransition] = useState(false);
	const [loading, setLoading] = useState(false);
	const [firstPage, setFirstPage] = useState(true);

	const coachesUrl = coachData.details[id].url;

	const nextCoachDetails = () => {
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
	};

	const previousCoach = () => {
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
	};

	const chooseCoach = () => {
		setTransition(true);
		setLoading(true);
		setTimeout(() => {
			setFirstPage(false);
			setTransition(false);
			setLoading(false);
		}, 300);
	};

	return {
		id,
		transition,
		loading,
		firstPage,
		coachesUrl,
		nextCoachDetails,
		previousCoach,
		chooseCoach,
	};
};

export default useCoachNavigation;
