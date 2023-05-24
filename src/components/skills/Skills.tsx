export default function Skills() {
  return (
    <>
      <div className="my-2 flex items-center gap-2">
        <span>Skills</span>
        <div className="h-[2px] w-full bg-white"></div>
      </div>
      <div className="flex flex-wrap justify-between">
        <span className="badge rounded-3xl">React</span>
        <span className="badge rounded-3xl">Angular</span>
        <span className="badge rounded-3xl">Scrum</span>
        <span className="badge rounded-3xl">java</span>
        <span className="badge rounded-3xl">Full-Stack</span>
        <span className="badge rounded-3xl">Presentation</span>
        <span className="badge rounded-3xl">Coach</span>
      </div>
    </>
  );
}
