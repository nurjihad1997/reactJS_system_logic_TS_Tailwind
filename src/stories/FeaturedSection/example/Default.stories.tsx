import React from "react";

import { ComponentMeta } from "@storybook/react";

import FeaturedSection from "../../../components/FeaturedSection";
import Button from "../../../components/Button";

export default {
  title: "Components/FeaturedSection/Example",
  component: FeaturedSection,
} as ComponentMeta<typeof FeaturedSection>;

export const Default = (args: any) => <FeaturedSection {...args} />;
Default.args = {
  badge: {
    title: "Design System",
    content: "create a design system on the application created",
  },
  button: (
    <Button state="secondary">
      <a href="/">Learn More</a>
    </Button>
  ),
  content: {
    preheading: "PROCESS DESIGN SYSTEM",
    heading: "Design System For Developers",
    paragraph:
      "make system designs to facilitate system development carried out by professional programmers",
  },
  image: "/images/image-1.jpg",
  number: { text: "1.", className: "bg-yellow" },
};
