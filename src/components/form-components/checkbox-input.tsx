interface CheckboxInputProps {
  id: string;
  name: string;
  label: string;
}

const CheckboxInput: React.FC<CheckboxInputProps> = ({ id, name, label }) => (
  <div className="flex items-center">
    <input
      // id="remember-me"
      // name="remember-me"
      id={id}
      name={name}
      type="checkbox"
      className="h-4 w-4 rounded border-gray-300 accent-trinidad-500 focus:ring-0"
    />
    <label
      htmlFor="remember-me"
      className="ml-3 block text-sm text-trinidad-50"
    >
      {label}
    </label>
  </div>
);

export default CheckboxInput;
