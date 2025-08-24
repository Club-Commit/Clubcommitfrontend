import onboarding1 from "@/assets/images/onboarding/happy_couple.png";
import onboarding2 from "@/assets/images/onboarding/commit_on_smartphone.png";
import onboarding3 from "@/assets/images/onboarding/2_people_chatting.png";

export const images = {
  onboarding1,
  onboarding2,
  onboarding3,
}

export const onboardingItems = [
  {
    id: 1,
    title: "Welcome to Commit",
    description:
      "Discover meaningful connections in a community built on trust, love, and real commitment.",
    image: onboarding1, 
    prompt:
      "A modern flat illustration of a happy couple walking hand-in-hand, surrounded by a warm gradient background (coral red #FF6B6B to soft pink #FFB6B9). Minimal, vector-style, with smooth rounded shapes and a subtle glowing heart or infinity symbol. Mobile onboarding illustration, 1080x1440, portrait orientation.",
  },
  {
    id: 2,
    title: "Discover Your Match",
    description:
      "Swipe with intention. Meet people who share your values, passions, and long-term goals.",
    image: onboarding2, 
    prompt:
      "A minimal vector illustration of a smartphone showing a dating app interface with glowing profile cards and a heart icon. Use Commit’s brand gradient (coral red to soft pink). Flat, modern, premium look. Mobile onboarding illustration, 1080x1440, portrait orientation.",
  },
  {
    id: 3,
    title: "Start Something Real",
    description:
      "Chat, connect, and take the first step toward a lasting relationship.",
    image: onboarding3, 
    prompt:
      "A flat illustration of two people happily chatting on their phones, with floating hearts forming a subtle infinity loop between them. Coral red and soft pink gradient background. Clean, minimal, vector-style. Mobile onboarding illustration, 1080x1440, portrait orientation.",
  },
];
