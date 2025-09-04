export const TeamCardItem = ({ img, name, role }) => {
  return (
    <div className="w-[232px] h-[266px] rounded-[12px] bg-white shadow-lg p-4 flex flex-col items-center">
      <img
        src={img}
        alt={name}
        loading="lazy"
        className="w-[124px] h-[124px] object-cover rounded-2xl mb-4"
      />
      <p className="text-sm text-[13px] text-[#3E3232]  mt-6 mb-5">{role}</p>
      <div className="h-[47px] w-[212px] bg-gray-100 rounded-[12px] flex items-center justify-center">
        <p className="mt-2 text-[16px] pb-1.5">{name}</p>
      </div>
    </div>
  );
};

// TODO: Falls unbenutzt, bitte löschen
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
  { img: "/img/meganewsteam/James.svg", name: "James Hoebregts", role: "CEO" },
  { img: "/img/meganewsteam/Jon.svg", name: "Jon Kantner", role: "Financial" },
];
