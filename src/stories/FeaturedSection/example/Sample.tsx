import React from "react";
import FeaturedSection from "../../../components/FeaturedSection";
import Button from "../../../components/Button";

type Props = {};

function Sample({}: Props) {
  return (
    <div className="my-20 flex flex-col gap-y-28">
      <FeaturedSection
        badge={{
          title: "Design System",
          content: "create a design system on the application created",
        }}
        button={
          <Button state="secondary">
            <a href="/">Learn More</a>
          </Button>
        }
        content={{
          preheading: "PROCESS DESIGN SYSTEM",
          heading: "Design System For Developers",
          paragraph:
            "make system designs to facilitate system development carried out by professional programmers",
        }}
        image="/images/image-1.jpg"
        number={{ text: "1.", className: "bg-yellow" }}
      />

      <FeaturedSection
        badge={{
          title: "Develop System",
          content: "the system development process on the application",
        }}
        button={
          <Button state="secondary">
            <a href="/">Learn More</a>
          </Button>
        }
        content={{
          preheading: "Developer Process",
          heading: "Application System Creation",
          paragraph:
            "After making the system design, the next step is to enter the system development stage",
        }}
        image="/images/image-2.jpg"
        number={{ text: "2.", className: "bg-blue" }}
      />

      <FeaturedSection
        badge={{
          title: "Cyber Security",
          content: "perform security on the system created",
        }}
        button={
          <Button state="secondary">
            <a href="/">Learn More</a>
          </Button>
        }
        content={{
          preheading: "Hosting Process and Cyber Security",
          heading: "High-Level Cyber Security",
          paragraph:
            "performs the hosting process quickly and provides a high level of cyber security on the system that has been created",
        }}
        image="/images/image-3.jpg"
        number={{ text: "3.", className: "bg-green" }}
      />
    </div>
  );
}

export default Sample;
