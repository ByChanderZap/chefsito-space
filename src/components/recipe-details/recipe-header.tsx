interface RecipeHeaderProps {
  name: string;
  country: string;
}

export const RecipeHeader: React.FC<RecipeHeaderProps> = ({
  name,
  country,
}) => (
  <div className="flex items-center justify-between mb-4">
    <h1 className="text-3xl font-bold text-trinidad-200">{name}</h1>
    <span className="bg-trinidad-100 text-trinidad-950 px-3 py-1 rounded-full text-sm">
      {country}
    </span>
  </div>
);
