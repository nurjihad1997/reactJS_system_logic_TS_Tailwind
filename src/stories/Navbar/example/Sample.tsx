import React from "react";
import Navbar from "../../../components/Navbar";
import Button from "../../../components/Button";
import Link from "../../../components/Link";

type Props = {};

function Sample({}: Props) {
  return (
    <Navbar
      cta={
        <>
          <Button state="secondary" className="relative px-8">
            <a>Sign In</a>
          </Button>
          <Button state="primary" className="relative px-8">
            <a>Sign Up</a>
          </Button>
        </>
      }
      pathname="/home"
      className={{ active: "text-blue", idle: "text-darkblue" }}
    >
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
}

export default Sample;
