import PathChoice from "@/app/components/PathChoice";
import type { Props } from "@/app/interfaces/CoachDetails";

const path = ({ params }: Props) => {
	return <PathChoice params={params} />;
};

export default path;
