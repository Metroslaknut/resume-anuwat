import person from "../../assets/images/person.png";
import "./introduction.css";
import InformationSummary from "./InformationSummary";

// Information summary data
const informationSummaryData = [
  {
    id: 1,
    title: "ประสบการณ์",
    description: "10 ปี",
  },
  {
    id: 2,
    title: "บริหารโครงการ",
    description: "6",
  },
  {
    id: 3,
    title: "ลูกค้าที่พึงพอใจ",
    description: "58",
  },
];

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            อนุวัฒน์ กะมะละคร
            <span className="text-nowrap shrink-0 inline-block w-full text-base xxs:text-lg sm:text-xl xl:text-2xl">
              (Mr.Anuwat Kamalakrol)
            </span>
            <span className="text-nowrap shrink-0 inline-block w-full text-base xxs:text-lg sm:text-xl xl:text-2xl">
              ตำแหน่ง: Project Manager & IT Manager
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            ผมเป็นผู้บริหารโครงการด้านเทคโนโลยีสารสนเทศที่มีประสบการณ์มากกว่า 10 ปี มีความเชี่ยวชาญในการบริหารและขับเคลื่อนโครงการให้สำเร็จตามเป้าหมาย งบประมาณ และระยะเวลาที่กำหนด โดยประสานงานอย่างมีประสิทธิภาพกับลูกค้า ทีมพัฒนา ผู้ใช้งาน และผู้มีส่วนได้ส่วนเสีย
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            ผมมีประสบการณ์ทำงานร่วมกับทั้งภาคเอกชนและหน่วยงานภาคราชการ เข้าใจกระบวนการและข้อกำหนดเฉพาะ เช่น การจัดทำ TOR การบริหารสัญญา และการควบคุมงบประมาณ พร้อมทั้งสามารถบริหารผู้มีส่วนได้ส่วนเสียและสร้างความร่วมมือระหว่างหน่วยงานได้อย่างมีประสิทธิภาพ
          </p>
          <p className="text-xs xxs:text-lg lg:text-[18px] my-6">
            นอกจากนี้ ผมให้ความสำคัญกับการประยุกต์ใช้เทคโนโลยีสมัยใหม่ โดยเฉพาะ AI และ Data Analytics เพื่อเพิ่มประสิทธิภาพการดำเนินงาน สนับสนุนการตัดสินใจเชิงกลยุทธ์ และขับเคลื่อนองค์กรสู่ Digital Transformation อย่างยั่งยืน
          </p>
        </div>
        <div className="mx-auto lg:mx-0 relative">
          <div className="grid max-xxs:grid-flow-col grid-cols-3 w-fit mt-10 gap-1">
            {informationSummaryData.map((item) => (
              <InformationSummary key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      <div
        className={`max-w-134 w-full h-full max-lg:mx-auto aspect-[536/636] relative`}
      >
        <img
          className={`shadow-2xl shadow-gray-200 w-full h-full absolute bottom-0 object-cover bg-white rounded-3xl`}
          src={person}
          alt="person"
        />
      </div>
    </div>
  );
};

export default Introduction;
