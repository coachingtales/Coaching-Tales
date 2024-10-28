import Ending from "@/app/components/Ending";
import type { Props } from "@/app/interfaces/CoachDetails";

const final = ({ params }: Props) => {
	return <Ending params={params} />;
};

export default final;
