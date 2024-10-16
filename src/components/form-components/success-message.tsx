interface SuccessMessagesProps {
  message?: string | null;
}

const SuccessMessage: React.FC<SuccessMessagesProps> = ({ message }) => (
  <div aria-live="polite" aria-atomic="true" className="w-full my-4">
    {message ? (
      <p className="mt-2 text-sm text-green-500 text-center">{message}</p>
    ) : null}
  </div>
);

export default SuccessMessage;
