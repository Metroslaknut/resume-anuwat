import {
  faEnvelope,
  faLocationDot,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import Address from "./Address";
import Form from "./Form";
import SocialMedia from "../common/socialMedia/SocialMedia";

const addressData = [
  {
    icon: faLocationDot,
    title: "Address",
    description: "ลาดพร้าว 101 ซ 11 แขวงคลองเจ้าคุณสิงห์ เขตวังทองหลาง กรุงเทพมหานคร 10310",
  },
  {
    icon: faEnvelope,
    title: "Email",
    description: "metroslak.nut.en@gmail.com",
  },
  {
    icon: faPhone,
    title: "Phone/Line",
    description: "081-0496768",
  },
];

const Contact = () => {
  return (
    <div className="relative -bottom-15 -mt-15 z-10 px-2 flex justify-center w-full">
      <div
        className="content max-w-[1200px] w-full p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)] mx-auto"
        id="contact"
      >
        <div className="flex flex-col items-center w-full">
          <p className="text-[35px] font-semibold text-nowrap text-[#132238] text-center mb-2">
            ช่องทางการติดต่อ
          </p>
          <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg text-center pt-4 font-normal text-soft-dark mb-4">
            สามารถติดต่อผมได้ผ่านช่องทางต่างๆ ดังนี้ หากต้องการพูดคุยเกี่ยวกับการสมัครงาน
          </p>
          <div className="my-8.75 flex flex-row flex-nowrap gap-8 justify-center items-stretch overflow-x-auto px-4 w-full">
            {addressData.map((item, index) => (
              <Address item={item} key={index} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
