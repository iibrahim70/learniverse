import Image from "next/image";
import universityData from "../public/university.json";

const University = () => {
  return (
    <div>
      <div className="space-y-2">
        <h2 className="font-bold text-xl">Top University</h2>
        <p className="pb-10">
          Learn from scientists, researchers, and scholars from the top
          institutions of the world.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {universityData.map((item) => (
          <div key={item.id} className="shadow-2xl p-5 rounded-xl">
            <div className="space-y-2">
              <Image
                width={720}
                height={150}
                priority
                src={item.image}
                alt={item.name}
                className="rounded"
              />
              <h3 className="truncate font-semibold text-base">{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default University;
