"use client";

import { useFormStatus } from "react-dom";

export function FormSubmitButton({
  text,
  loadingText,
  classes,
}: {
  text: string;
  loadingText: string;
  classes: string;
}) {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type="submit" className={classes}>
      {pending ? loadingText : text}
    </button>
  );
}
