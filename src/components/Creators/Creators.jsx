import SectionTitle from "../Heading/SectionTitle";
import CreatorSlide from "./CreatorSlide";
import Marquee from "react-fast-marquee";

const Creators = () => {
  const creators = [
    {
      creator_img:
        "https://fans.nyc3.cdn.digitaloceanspaces.com/users/avatar/44192a36f5ef47adbb4bac99e59332c4.jpg",
      creator_name: "The Slutty Braniac",
      creator_role: "Zuvlo Creator",
      followers: "81k followers",
    },
    {
      creator_img:
        "https://fans.nyc3.cdn.digitaloceanspaces.com/photos/alexandrawett.png",
      creator_name: "Alexandra Wett",
      creator_role: "Zuvlo Creator",
      followers: "105k followers",
    },
    {
      creator_img:
        "https://fans.nyc3.cdn.digitaloceanspaces.com/photos/crazywifeslut.png",
      creator_name: "CrazyWifeSlut",
      creator_role: "Zuvlo Creator",
      followers: "56k followers",
    },
    {
      creator_img:
        "https://images.pexels.com/photos/839011/pexels-photo-839011.jpeg?auto=compress&cs=tinysrgb&w=600",
      creator_name: "Devy Jonas",
      creator_role: "AI Creator",
      followers: "3M",
    },
    {
      creator_img:
        "https://images.pexels.com/photos/977796/pexels-photo-977796.jpeg?auto=compress&cs=tinysrgb&w=600",
      creator_name: "Jamal Sheikh",
      creator_role: "AI Creator",
      followers: "205k",
    },
    {
      creator_img:
        "https://images.pexels.com/photos/26852336/pexels-photo-26852336/free-photo-of-portrait-of-couple-sitting-together.jpeg?auto=compress&cs=tinysrgb&w=600",
      creator_name: "Marty bliss",
      creator_role: "AI Creator",
      followers: "1M",
    },
  ];

  return (
    <section className=" py-[60px] xl:py-[150px]">
      <SectionTitle>Trusted by the{`world's`} biggest creators</SectionTitle>

      {/* creator slider area */}
      <div className=" pt-[60px] xl:pt-[120px]">
        <Marquee>
          <div className="flex gap-6 xl:gap-12 mr-6 xl:mr-12 xl:h-[612px] creator--holder ">
            {creators.map((singleCreator, index) => (
              <CreatorSlide creator={singleCreator} key={index} />
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default Creators;
