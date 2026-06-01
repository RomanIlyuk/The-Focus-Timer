import PetProjectsCard from "../components/PetProjects/PetProjectsCard";
import PetProjectsFooter from "../components/PetProjects/PetProjectsFooter";
import PetProjectsHeader from "../components/PetProjects/PetProjectsHeader";
import MainLayout from "../layout/MainLayout";

import { projectData } from "../data/projects";

function PetProjects() {
  return (
    <MainLayout>
      <PetProjectsHeader />
      <div className="grid grid-cols-3 gap-8 max-w-7xl mx-auto p-12 place-items-stretch">
        {projectData.map((project) => (
          <PetProjectsCard
            key={project.id}
            title={project.title}
            description={project.description}
            url={project.projectUrl}
          />
        ))}
      </div>
      <PetProjectsFooter />
    </MainLayout>
  );
}

export default PetProjects;
//

// grid grid-cols-3  p-12 gap-12
