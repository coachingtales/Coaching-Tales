import Choices from "@/app/components/Choices";
import type { Props } from "@/app/interfaces/CoachDetails";

const firstChoice = ({ params }: Props) => {
	return <Choices params={params} />;
};

export default firstChoice;
