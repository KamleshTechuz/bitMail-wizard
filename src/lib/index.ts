import { listData } from "./interface";

export const vocLevel: listData[] = [
  { id: 1, name: "Simple" },
  { id: 2, name: "Moderate" },
  { id: 3, name: "Complex" },
];

export const vocType: listData[] = [
  { id: 1, name: "Academic" },
  { id: 2, name: "Business" },
  { id: 3, name: "Legal" },
  { id: 4, name: "Medical" },
  { id: 5, name: "Professional" },
  { id: 6, name: "Technical" },
];

export const emailContentDummy: string = `Welcome to BitMail-Wizard - Your AI Email Generator 📧

Generating personalized emails for you...

Our AI is crafting the perfect message for your needs. Whether it's a business proposal, a friendly message, or a formal letter, we've got you covered.

Sit tight while we work our magic! ✨`;

export const defaultPrompt: string = `write an email which fulfill the requirements mentioned below

subject: <subject>
<otherDetails>
word limit: <wordLimit>

my working area: <workingArea>

vocabulary level: <vocabularyLevel>

vocabulary type: <vocabularyType>


`