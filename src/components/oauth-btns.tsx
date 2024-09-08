import SocialButton from "./btns/social-button";
import DiscordIcon from "./icons/discord";
import GoogleIcon from "./icons/google";
import TwitterIcon from "./icons/twitter";

export default function OauthButtons() {
  return (
    <div className="mt-6 flex justify-center space-x-6">
      <SocialButton icon={<GoogleIcon />} />

      <SocialButton icon={<TwitterIcon />} />

      <SocialButton icon={<DiscordIcon />} />
    </div>
  );
}
