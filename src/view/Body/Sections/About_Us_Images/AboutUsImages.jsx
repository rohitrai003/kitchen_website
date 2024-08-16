import ImageDiv from "../../../../components/image_div/ImageDiv";
import "./AboutUsImages.css";

export default function AboutUsImages() {
  const details = [
    {
      title: "Country Collection",
      subtitle:
        "We will measure your kitchen, ask you questionss and start the actual design process with you.",
      imageUrl:
        "https://images.timesproperty.com/webstories_manage/1675146541_pexels-dominika-roseclay-2208891.jpg",
    },
    {
      title: "Concard Collection",
      subtitle: "",
      imageUrl:
        "https://houseandhome.com/wp-content/uploads/2020/11/crop-redesignhome2.jpg",
    },
    {
      title: "Classic collection",
      subtitle: "",
      imageUrl:
        "https://www.amelialawrencestyle.com/wp-content/uploads/2023/05/kitchenhardware-7-768x1152.jpg",
    },
    {
      title: "Luxor Collection",
      subtitle: "",
      imageUrl:
        "https://foyr.com/learn/wp-content/uploads/2022/06/hang-portraits-and-photographs-kitchen-wall-decor-ideas-1024x1024.jpg",
    },
  ];
  return (
    <div className="about-us-images">
      {details.map((e, index) => (
        <ImageDiv
          key={index}
          title={e.title}
          subtitle={e.subtitle}
          imageUrl={e.imageUrl}
        />
      ))}
    </div>
  );
}
