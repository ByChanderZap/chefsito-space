interface RecipeCreatorProps {
  creatorName: string;
}

export const RecipeCreator: React.FC<RecipeCreatorProps> = ({
  creatorName,
}) => (
  <div>
    <h3 className="text-lg font-semibold mb-2 text-trinidad-100">Created by</h3>
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-trinidad-600 flex items-center justify-center text-trinidad-100 font-semibold">
        {creatorName
          .split(" ")
          .map((n) => n[0])
          .join("")}
      </div>
      <span className="ml-2 text-trinidad-100">{creatorName}</span>
    </div>
  </div>
);
