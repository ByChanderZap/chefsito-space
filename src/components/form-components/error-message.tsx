interface ErrorMessagesProps {
  message?: string | null;
}

const ErrorMessage: React.FC<ErrorMessagesProps> = ({ message }) => (
  <div aria-live="polite" aria-atomic="true" className="">
    {message ? (
      <p className="text-sm text-red-500 text-center">{message}</p>
    ) : null}
  </div>
);

export default ErrorMessage;
