import { Title } from "../title/Title";
import { TeamCardItem } from "./../team-card-item/TeamCardItem";

export const TeamSection = () => {
  const TEAM = [
    {
      img: "/img/meganewsteam/Behzad.svg",
      name: "Behzad Pashaei",
      role: "Designer",
    },
    {
      img: "/img/meganewsteam/Cassie.svg",
      name: "Cassie Evans",
      role: "Programmer",
    },
    {
      img: "/img/meganewsteam/Louis.svg",
      name: "Louis Hoebregts",
      role: "Marketing",
    },
    {
      img: "/img/meganewsteam/Patricia.svg",
      name: "Patricia",
      role: "Administrative",
    },
    {
      img: "/img/meganewsteam/James.svg",
      name: "James Hoebregts",
      role: "CEO",
    },
    {
      img: "/img/meganewsteam/Jon.svg",
      name: "Jon Kantner",
      role: "Financial",
    },
  ];

  return (
    <div className="w-[80%] mt-10 m-auto">
      <div>
        <Title title="Mega News Team" className="ml-5" />
      </div>
      <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {TEAM.map((m) => (
          <TeamCardItem key={m.name} img={m.img} name={m.name} role={m.role} />
        ))}
      </div>
    </div>
  );
};
