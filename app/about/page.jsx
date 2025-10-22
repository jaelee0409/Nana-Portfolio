import Image from "next/image";

const AboutPage = () => {
  return (
    <div className="flex flex-col lg:flex-row lg:grow justify-between items-center lg:items-start">
      <div className="flex justify-center md:w-3/4 lg:w-1/2 mb-4 md:mb-8 lg:mr-0 lg:mb-0">
        <Image
          src="/profile_pic.jpg"
          alt="Profile Picture"
          width={669}
          height={729}
          className="rounded-xl shadow-sm w-full h-full object-cover"
        />
      </div>
      <div className="md:w-3/4 lg:w-1/2 lg:px-12 xl:px-16 2xl:pl-24 flex flex-col">
        <h1 className="md:text-lg tracking-[.2em] font-roboto text-[#222222] mb-1">
          HELLO!
        </h1>
        <div className="font-baskervville text-sm md:text-sm text-gray-text space-y-2 md:space-y-4 leading-relaxed md:leading-loose">
          <p>
            I’m Nana, a designer, illustrator, and artist living in New York
            City. I have been working as a textile and dinnerware designer at
            different studios for over a decade.
          </p>
          <p>
            My work has been sold in many major retailers, including Pier 1,
            Anthropologie, Marchesa, Lucky Brand, Hobby Lobby, Target, Big Lots,
            Dollar General, Bed Bath & Beyond, T.J. Maxx, World Market, Neiman
            Marcus, Kirklands, Ross, Walmart, and Burlington Coat Factory. I
            have also done illustration work for Penguin Random House and Oxford
            University Press.
          </p>
          <p>
            I am always excited to hear about freelance illustration or design
            opportunities! If you would like to connect or say hi, please send
            me an email!
          </p>
          <p className="flex flex-col">
            <span>
              Email:{" "}
              <a
                href="mailto:anheinrich22@gmail.com"
                className="underline underline-offset-2 hover:text-[#569E91] text-[#111111]"
              >
                anheinrich22@gmail.com
              </a>
            </span>
            <span>
              Follow on{" "}
              <a
                href="https://www.instagram.com/nanapaintspets/"
                className="underline underline-offset-2 hover:text-[#569E91] text-[#111111]"
              >
                Instagram
              </a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
