export interface UseCoachDetailsParams {
	coach?: string | undefined;
	path?: string | undefined;
	choices?: string | undefined;
	nameCoach?: string | undefined;
	urlCoach?: string | undefined;
	color?: string | undefined;
}

export interface Props {
	params: { coach?: string; path?: string; choices?: string };
}

export interface UseCoachDetailsResult {
	details: string;
	detailsTitle: string;
	detailsAudio: string;
	detailsImage: string;
	name: string;
	born: string;
	active: string;
	location: string;
	PDF: Record<string, ComponentDetails>;
	color: string;
	prevCoach: CoachComponents | null;
	nextCoach: CoachComponents | null;
}

export interface CoachComponents {
	name: string;
	hex: string;
	key_facts: KeyFacts;
	url: string;
	component_1?: {
		image_link: string;
	};
	component_2?: {
		transcript: string;
		title: string;
		audio_file: string;
		image_link: string;
	};
	component_3?: {
		transcript: string;
		title: string;
		audio_file: string;
		image_link: string;
	};
	component_4?: {
		transcript: string;
		title: string;
		audio_file: string;
		image_link: string;
	};
	component_5?: {
		transcript: string;
		title: string;
		audio_file: string;
		image_link: string;
	};
	component_6?: {
		transcript: string;
		title: string;
		audio_file: string;
		image_link: string;
	};
	component_7?: {
		transcript: string;
		title: string;
		audio_file: string;
		image_link: string;
	};
}

export interface KeyFacts {
	born?: string;
	active: string;
	location: string;
}

export interface CoachName {
	name: string;
	url: string;
	key_facts: KeyFacts;
}

export interface ComponentDetails {
	transcript: string;
	title: string;
	audio_file: string;
	image_link: string;
}
