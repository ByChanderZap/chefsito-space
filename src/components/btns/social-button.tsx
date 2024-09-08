interface SocialButtonProps {
  icon: React.ReactNode;
  size?: string;
  color?: string;
  onClick?: () => void;
}

const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  size = "32px",
  color = "#000",
  onClick,
}) => {
  return (
    <button
      type="button"
      className="border-none outline-none"
      onClick={onClick}
    >
      <div style={{ width: size, height: size, color }}>{icon}</div>
    </button>
  );
};

export default SocialButton;
