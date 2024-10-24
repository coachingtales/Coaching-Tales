import PDFSaver from "@/app/components/PDFSaver";
import type { Props } from "@/app/interfaces/CoachDetails";

const PDF = ({ params }: Props) => {
	return <PDFSaver params={params} />;
};

export default PDF;
