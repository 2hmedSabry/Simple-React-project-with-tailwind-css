import { useState } from "react";
import FeatureBox from "./FeatureBox";
function Features() {
  const [items] = useState([
    {
      icon: "icon-access-anywhere.svg",
      title: "Acces your files,anyWhere",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusp",
    },
    {
      icon: "icon-security.svg",
      title: "Security you can trust",
      desc: "lorem ipsum dolor sit amet, consectur adipicing elit. Ut sed beatae labo",
    },
    {
      icon: "icon-collaboration.svg",
      title: "Real -time collaboration",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusp",
    },
    {
      icon: "icon-any-file.svg",
      title: "Store any type of file",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusp",
    },
  ]);
  return (
    <section className="pb-[150px]">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px] w-[865px] mx-auto max-w-full">
          {items.map((item) => (
            <FeatureBox
              key={item.title}
              icon={item.icon}
              title={item.title}
              desc={item.desc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
