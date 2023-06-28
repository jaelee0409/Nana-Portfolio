import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:flex-grow h-max justify-between">
      <div className="flex justify-center lg:w-1/2 mb-4 lg:mr-4 lg:mb-0">
        <Image
          src="/profile_pic.jpg"
          alt="Profile Picture"
          width={669}
          height={729}
        />
      </div>
      <div className="lg:w-1/2 m-1 lg:pl-8">
        <h1 className="font-medium md:text-xl my-2 lg:my-0 lg:mb-4">HELLO!</h1>
        <div className="font-tinos text-base space-y-2 md:space-y-4">
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
