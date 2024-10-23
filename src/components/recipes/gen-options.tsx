export default function GenerateUnitsOptions() {
  const units = ["g", "kg", "oz", "tsp", "tbsp", "pz", "cup"];
  return units.map((unit) => (
    <option key={unit} value={unit} className="bg-trinidad-400">
      {unit}
    </option>
  ));
}
