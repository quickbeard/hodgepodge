import { SocialIcon } from 'react-social-icons';
import { HStack } from '@chakra-ui/react';

export default function SocialMediaButtons() {
  return (
    <HStack>
      <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.linkedin.com/company/enduesoftware/about/" bgColor="white" fgColor="transparent" />
      <SocialIcon target="_blank" rel="noopener noreferrer" url="https://www.facebook.com/people/Endue-Software/100089263986189/" bgColor="white" fgColor="transparent" />
    </HStack>
  );
}