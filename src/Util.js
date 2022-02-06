import { v4 as uuidv4 } from "uuid";

const Util = () => {
  return [
    {
      name: "In My Head",
      artist: "Misha, NDO, Flozigg",
      cover:
        "https://chillhop.com/wp-content/uploads/2022/01/6881c7456483ab8ea364152a594942a20669a058-1024x1024.jpg",
      id: uuidv4(),
      active: true,
      color: ["#C70138", "#DBBC00"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=28878",
    },
    {
      name: "Soulsounds",
      artist: "Parkbench Epiphany",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/11/4c9682ee612a3b8ef51de286c49b5489408e9257-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#567281", "#F07F77"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=27500",
    },
    {
      name: "Illusions",
      artist: "Idealism",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/5c2d5b05dfc98afb5ed850ca918f732445b8ca1e-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#6DAFA3", "#1D1E4F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8089",
    },
    {
      name: "Forgot It Was Monday",
      artist: "Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/99c90197abcb6c4a16f48ea8f002eac25b9ac1da-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#DD6760", "#096A88"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=7808",
    },
    {
      name: "Space Cadet",
      artist: "Philanthrope, Sleepy Fish",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/07/c85a5f6166a48001820ba3dc7e1da639281e00b3-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#B95A33", "#FA7228"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8841",
    },
    {
      name: "Happy Place",
      artist: "Philanthrope, Sitting Duck, Squeeda",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#5F8E85", "#653F31"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9781",
    },
    {
      name: "Journeys",
      artist: "Sitting Duck, Squeeda",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/08/63d2d2cdabbc5df023603b5f47b2fb97963cb537-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#FFFFFF", "#6ACABC"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=8650",
    },
    {
      name: "Small Town Palm Trees",
      artist: "Mama Aiuto",
      cover:
        "https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#913F1A", "#CAD35F"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=12124",
    },
    {
      name: "Snowstalgia",
      artist: "Invention_",
      cover:
        "https://chillhop.com/wp-content/uploads/2020/10/0e5bb63f838ff92eeac142aae944e9f678df13c9-1024x1024.jpg",
      id: uuidv4(),
      active: false,
      color: ["#455B8E", "#BC922B"],
      audio: "https://mp3.chillhop.com/serve.php/?mp3=24705",
    },
  ];
};

export default Util;
