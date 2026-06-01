import PetProjectsCard from "../components/PetProjects/PetProjectsCard";
import PetProjectsFooter from "../components/PetProjects/PetProjectsFooter";
import PetProjectsHeader from "../components/PetProjects/PetProjectsHeader";
import MainLayout from "../layout/MainLayout";

function PetProjects() {
  return (
    <MainLayout>
      <PetProjectsHeader />
      <div className="grid grid-cols-3 p-12 gap-12">
        <PetProjectsCard />
        <PetProjectsCard />
        <PetProjectsCard />
        <PetProjectsCard />
        <PetProjectsCard />
        <PetProjectsCard />
      </div>
      <PetProjectsFooter />
    </MainLayout>
  );
}

export default PetProjects;
