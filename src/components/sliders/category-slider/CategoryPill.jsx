import { CategorySlider } from "./CategorySlider";

export const CategoryPill = ({ label, imageUrl }) => {
  return (
    <button className="pl-1">
      <img
        src={imageUrl}
        alt={label}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rounded-[12px]"
      />
      <p className="absolute z-10 text-white font-semibold top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
        {label}
      </p>
    </button>
  );
};
