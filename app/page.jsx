import React from "react";
import AboutMe from "./component/about-me";
import { aboutMe, skills, professionalData } from "../data/page-data";
import ProfessionalExperience from "./component/professional-experience";
import Link from "next/link";

const page = () => {
	return (<>
		<div>
			<AboutMe data={aboutMe} skills={skills} />
			<ProfessionalExperience data={professionalData} />
			<div><Link href="www.google.com">Google</Link></div>
		</div>
		
	</>
	);
};

export default page;
