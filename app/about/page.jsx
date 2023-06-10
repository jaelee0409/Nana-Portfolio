import React from "react";
import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="md:flex h-max">
      <div className="md:w-1/2 mb-2 md:mr-4 md:mb-0">
        <Image
          src="/profile_pic.jpg"
          alt="Profile Picture"
          width={500}
          height={500}
          className="object-scale-down mx-auto"
        />
      </div>
      <div className="md:w-1/2 md:pl-4">
        <h1 className="font-medium text-neutral-950/[.70] my-2">HELLO!</h1>
        <div className="font-tinos text-neutral-950/[.70] md:text-xs space-y-2">
          <p className="leading-relaxed md:leading-loose">
            I’m Nana, a designer, illustrator, and artist living in New York
            City. I have been working as a textile and dinnerware designer at
            different studios for over a decade.
          </p>
          <p className="leading-relaxed md:leading-loose">
            My work has been sold in many major retailers, including Pier 1,
            Anthropologie, Marchesa, Lucky Brand, Hobby Lobby, Target, Big Lots,
            Dollar General, Bed Bath & Beyond, T.J. Maxx, World Market, Neiman
            Marcus, Kirklands, Ross, Walmart, and Burlington Coat Factory. I
            have also done illustration work for Penguin Random House and Oxford
            University Press.
          </p>
          <p className="leading-relaxed md:leading-loose">
            I am always excited to hear about freelance illustration or design
            opportunities! If you would like to connect or say hi, please send
            me an email!
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
