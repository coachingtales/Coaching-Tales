"use client";
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

interface PDFProps {
	coachName: string;
	pathTitle: string;
	pathTranscript: string;
	pathImage: string;
	choiceTitle: string;
	choiceTranscript: string;
	choiceImage: string;
	email: string;
}

const PdfCreator = async ({
	coachName,
	pathTitle,
	pathTranscript,
	pathImage,
	choiceTitle,
	choiceTranscript,
	choiceImage,
}: PDFProps) => {
	Font.register({
		family: "Montserrat_Alternates",
		fonts: [
			{
				src: "/fonts/Montserrat_Alternates/MontserratAlternates-Light.ttf",
				fontWeight: 400,
			},
			{
				src: "/fonts/Montserrat_Alternates/MontserratAlternates-Medium.ttf",
				fontWeight: 700,
			},
		],
	});

	const styles = StyleSheet.create({
		page: {
			gap: 10,
			fontFamily: "Montserrat_Alternates",
			padding: 30,
		},
		title: {
			fontSize: 24,
			fontWeight: 700,
			marginBottom: 10,
		},
		subtitle: {
			fontSize: 18,
			fontWeight: 400,
			marginBottom: 10,
		},
		text: {
			fontSize: 12,
			fontWeight: 400,
			marginBottom: 10,
		},
		image: {
			width: 200,
			aspectRatio: 1,
			objectFit: "cover",
			objectPosition: "top",
			alignSelf: "center",
		},
	});

	const MyDocument = (
		<Document>
			<Page style={styles.page}>
				<Text style={styles.title}>{coachName}</Text>
				<Text style={styles.subtitle}>{pathTitle}</Text>
				<Image src={pathImage} style={styles.image} />
				<Text style={styles.text}>{pathTranscript}</Text>
				<Text style={styles.subtitle}>{choiceTitle}</Text>
				<Image src={choiceImage} style={styles.image} />
				<Text style={styles.text}>{choiceTranscript}</Text>
			</Page>
		</Document>
	);

	// Generate and download the PDF as a Blob
	const blob = await pdf(MyDocument).toBlob();
	saveAs(blob, `${coachName.split(" ")[0]}_pathway.pdf`);
};

export default PdfCreator;
