import React from "react";

import { ComponentMeta } from "@storybook/react";

import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";
import Link from "../../../components/Link";

export default {
  title: "Components/Navbar/Example",
  component: Navbar,
} as ComponentMeta<typeof Navbar>;

export const Default = (args: any) => (
  <Navbar {...args}>
    <Link href="/home">
      <a>Home</a>
    </Link>
    <Link href="/project">
      <a>Project</a>
    </Link>
    <Link href="/system">
      <a>System</a>
    </Link>
    <Link href="/pricing">
      <a>Pricing</a>
    </Link>
  </Navbar>
);

Default.args = {
  cta: (
    <>
      <Button state="secondary" className="relative px-8">
        <a>Sign In</a>
      </Button>
      <Button state="primary" className="relative px-8">
        <a>Sign Up</a>
      </Button>
    </>
  ),
  pathname: "/program",
  className: { active: "text-blue", idle: "text-darkblue" }
};
