function PetProjectsCard({ title, description, url }) {
  return (
    <section className="bg-slate-800 p-6 flex flex-col gap-4 border-2 border-indigo-500 rounded-xl h-full min-h-[330px]">
      <h1 className="text-white text-xl font-semibold">{title}</h1>
      <p className="text-gray-300 text-base flex-1">{description}</p>
      <a
        href={url}
        target="_blank"
        className="mt-auto text-m font-semibold text-indigo-500 hover:underline"
      >
        Learn more &rarr;
      </a>
    </section>
  );
}

export default PetProjectsCard;
