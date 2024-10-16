import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";

interface SocialButtonProps {
  icon: React.ReactNode;
  size?: string;
  color?: string;
  providerName: "google" | "discord" | "github";
}

const SocialButton: React.FC<SocialButtonProps> = ({
  icon,
  size = "32px",
  color = "#000",
  providerName,
}) => {
  const signOnClick = (provider: "google" | "discord" | "github") => {
    signIn(provider, {
      callbackUrl: DEFAULT_LOGIN_REDIRECT,
    });
  };

  return (
    <button
      type="button"
      className="border-none outline-none"
      onClick={() => signOnClick(providerName)}
    >
      <div style={{ width: size, height: size, color }}>{icon}</div>
    </button>
  );
};

export default SocialButton;
