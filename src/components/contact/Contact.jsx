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
    <div className="relative -bottom-15 -mt-15 z-10 px-2">
      <div
        className="content p-4 md:p-10 lg:p-22 bg-white rounded-2xl shadow-[0px_0px_90px_9px_rgba(0,_0,_0,_0.1)]"
        id="contact"
      >
        <div className="flex flex-col-reverse lg:gap-5 xl:gap-25.75 lg:flex-row justify-between">
          <div>
            <div>
              <p className="text-[35px] max-lg:hidden font-semibold text-nowrap text-[#132238]">
                ช่องทางการติดต่อ
              </p>
              <p className="text-[12px] xs:text-[14px] sm:text-lg md:text-lg max-lg:text-center pt-4 font-normal text-soft-dark">
                สามารถติดต่อผมได้ผ่านช่องทางต่างๆ ดังนี้ หากต้องการพูดคุยเกี่ยวกับการสมัครงาน
              </p>
            </div>
            <div className="my-8.75 flex flex-row flex-nowrap gap-8 justify-center items-stretch overflow-x-auto px-4" style={{minHeight: '140px'}}>
              {addressData.map((item, index) => (
                <Address item={item} key={index} />
              ))}
            </div>
          </div>
          <div className="w-full overflow-y-scroll py-6.5">
            <p className="text-xl mb-2 xs:text-2xl sm:text-2xl md:text-[38px] font-semibold text-[#132238] lg:hidden text-center">
              ช่องทางการติดต่อ
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
