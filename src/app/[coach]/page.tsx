import CoachDetailsPage from "@/app/components/CoachDetailsPage";
import type { Props } from "@/app/interfaces/CoachDetails";

const CoachChoice = ({ params }: Props) => {
	return <CoachDetailsPage params={params} />;
};

export default CoachChoice;
