import { Button, Link, Icon } from "@chakra-ui/react";
import { type IconType } from "react-icons";
import { BsLinkedin, BsGithub } from "react-icons/bs";

const socialMap: Record<string, IconType> = {
  linkedin: BsLinkedin,
  github: BsGithub,
};

interface SocialButtonProps {
  name: string;
  href: string;
}

export default function SocialButton({ name, href }: SocialButtonProps) {
  const icon = socialMap[name];
  return (
    <Link href={href} target="_blank" rel="noopener noreferrer">
      <Button>
        <Icon as={icon} />
      </Button>
    </Link>
  );
}
