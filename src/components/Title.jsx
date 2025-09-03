export const Title = ({ title }) => {
  return (
    <div className="flex items-center gap-1 mb-4">
      <div className="w-[4px] h-[10px] bg-[#F81539] rounded-[12px]"></div>
      <h3 className="text-2xl font-bold">{title}</h3>
    </div>
  );
};
