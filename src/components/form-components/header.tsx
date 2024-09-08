interface FormHeaderProps {
  title: string;
  text: string;
  cta: string;
}

const FormHeader: React.FC<FormHeaderProps> = ({ title, text, cta }) => (
  <div className="mb-10">
    <h3 className="text-3xl font-extrabold text-trinidad-50">{title}</h3>
    <p className="mt-4 text-sm text-trinidad-50">
      {text}
      <a
        href="#"
        className="ml-1 whitespace-nowrap font-semibold text-trinidad-700 hover:underline"
      >
        {cta}
      </a>
    </p>
  </div>
);

export default FormHeader;
