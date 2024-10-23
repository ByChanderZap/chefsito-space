"use client";

import { useFormStatus } from "react-dom";

interface FormSubmitButtonProps {
  text: string;
  loadingText: string;
  extraClasses?: string;
}

const FormSubmitButton: React.FC<FormSubmitButtonProps> = ({
  text,
  loadingText,
  extraClasses,
}) => {
  const { pending } = useFormStatus();

  return (
    <button
      type="submit"
      className={`w-full rounded-md bg-trinidad-500 px-4 py-2.5 text-sm tracking-wide text-white shadow-xl hover:bg-trinidad-700 focus:outline-none ${extraClasses}`}
      disabled={pending}
    >
      {pending ? loadingText : text}
    </button>
  );
};

export default FormSubmitButton;
