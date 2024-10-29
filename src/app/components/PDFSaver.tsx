"use client";
import Link from "next/link";
import useCoachDetails from "@/app/hooks/useCoachDetails";
import type { Props } from "@/app/interfaces/CoachDetails";
import {
	Document,
	Page,
	pdf,
	StyleSheet,
	Text,
	Image,
	Font,
} from "@react-pdf/renderer";
import { saveAs } from "file-saver";

Font.register({
	family: "Oswald",
	src: "https://fonts.gstatic.com/s/oswald/v13/Y_TKV6o8WovbUd3m_X9aAA.ttf",
});

const SavePDF = ({ params }: Props) => {
	const { choices, coach, path } = params;
	const { name, PDF, born, active, location, color } = useCoachDetails({
		coach,
		path,
		choices,
	} as {
		coach: string;
		path: string;
		choices: string;
	});

	if (!choices) {
		return <div>Loading...</div>;
	}

	const componentPathTitle = PDF.component_path?.title || "No title available";
	const componentPathTranscript =
		PDF.component_path?.transcript || "No transcript available";
	const componentChoiceTitle =
		PDF.component_choice?.title || "No title available";
	const componentChoiceTranscript =
		PDF.component_choice?.transcript || "No transcript available";
	const componentChoiceImage = PDF.component_choice?.image_link || "";
	const componentPathImage = PDF.component_path?.image_link || "";

	const savePDF = async () => {
		const MyDocument = (
			<Document>
				<Page>
					<Text fixed>{name}</Text>
				</Page>
			</Document>
		);

		// Generate and download the PDF as a Blob
		const blob = await pdf(MyDocument).toBlob();
		saveAs(blob, "document_with_image.pdf");
	};

	console.table(PDF.component_choice);

	return (
		<div
			className="w-dvw h-dvh grid place-content-center p-5"
			style={{ background: `${color}` }}
		>
			<h1 className="text-4xl font-bold underline">{name}</h1>
			<ul>
				<li>{born ? `Born: ${born}` : ""}</li>
				<li>{active ? `Active: ${active}` : ""}</li>
				<li>{location ? `Location: ${location}` : ""}</li>
			</ul>
			<h2 className="text-3xl font-bold mt-4">{componentPathTitle}</h2>
			<p>{componentPathTranscript}</p>
			<h2 className="text-3xl font-bold mt-4">{componentChoiceTitle}</h2>
			<p>{componentChoiceTranscript}</p>
			<button type="button" onClick={savePDF}>
				Save PDF
			</button>
			<div className="mt-4">
				<Link href="/">Skip</Link>
			</div>
		</div>
	);
};

export default SavePDF;
