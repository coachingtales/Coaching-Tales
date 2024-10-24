import CoachPath from "@/app/components/CoachPath";
import type { Props } from "@/app/interfaces/CoachDetails";

const CoachPathChoice = ({ params }: Props) => {
	return <CoachPath params={params} />;
};

export default CoachPathChoice;
