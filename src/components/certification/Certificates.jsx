import img1 from "../../assets/images/blog/blog-1.jpg";
import img2 from "../../assets/images/blog/blog-2.jpg";
import img3 from "../../assets/images/blog/blog-3.jpg";
import img4 from "../../assets/images/blog/blog-4.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import MonoCertifications from "./MonoCertifications";
import "swiper/css";
import "swiper/css/pagination";
import "./cert.css";
import { useState } from "react";

// Breakpoints for swiperJS
const custom_breakpoints = {
  640: {
    slidesPerView: 2,
    spaceBetween: 15,
  },
  768: {
    slidesPerView: 3,
    spaceBetween: 15,
  },
  1220: {
    slidesPerView: 4,
    spaceBetween: 24,
  },
};

const pdfFiles = [
  "10032026161249-001.pdf",
  "Certificate-C-ESG- Management(C-ESG).pdf",
  "Certificate-CE201 การดำเนินธุรกิจตามหลักเศรษฐกิจหมุนเวียน (Circular Business Model).pdf",
  "Certificate-ESG201 การบริหารความเสี่ยง ESG (ESG Risks).pdf",
  "Certificate-Entrepreneurial Mindset-SED1007-TH.pdf",
  "Certificate-S02_1  S02_1 การวิเคราะห์ห่วงโซ่คุณค่า (Value Chain Analysis).pdf",
  "Certificate-Agile Project Management.pdf",
  "Certificate-Complete Project Management-MS001-TH.pdf",
  "Certificate-Data Governance Framework Awareness.pdf",
  "Certificate-ESG_101 ESG 101 พื้นฐานความรู้ด้านความยั่งยืน.pdf",
  "Certificate-Growth Mindset-WMD1036-TH.pdf",
  "Certificate-INTRODUCTION TO DATA ANALYTICS.pdf",
  "Certificate-IT for Knowledge Management.pdf",
  "Certificate-Introduction to Computer Networks and the Internet.pdf",
  "Certificate-MS002-Communicate Effectively.pdf",
  "Certificate-MS003-Recharge Your Creative Capacity.pdf",
  "Certificate-MS004-How to Set Motivating Goals.pdf",
  "Certificate-Planning and Prioritizing-MS005-TH.pdf",
  "Certificate-Software Quality Assurance and Testing.pdf",
  "อนุวัฒน์ กะมะลคร (Advanced).pdf",
  "อนุวัฒน์ กะมะลคร (Fandamental).pdf",
];

const certificationsData = pdfFiles.map((file, idx) => ({
  id: idx + 1,
  image: img1,
  title: file.replace(/\.pdf$/, ""),
  link: "#",
  pdf: `/training-certificate/${file}`,
}));

const columns = 4;
const rows = 3;
const itemsPerRow = columns;
const maxItems = columns * rows;

const Certificates = () => {
  const [showAll, setShowAll] = useState(false);
  const displayData = showAll ? certificationsData : certificationsData.slice(0, maxItems);

  return (
    <div className="content py-25 px-2 relative" id="certifications">
      <div className="max-w-135 text-center mx-auto pb-17.5">
        <p className="section-title pb-6">ประกาศยบัตร</p>
        <p className="text-xs xs:text-[16px] md:text-lg text-gray-400">
        ประกาศนียบัตรที่ได้รับจากการเข้าร่วมอบรมและผ่านการทดสอบในหลักสูตรต่าง ๆ ที่เกี่ยวข้องกับสายงานของฉัน แสดงถึงความมุ่งมั่นในการพัฒนาทักษะและความรู้ในด้านนี้อย่างต่อเนื่อง
        </p>
      </div>
      {Array.from({ length: Math.ceil(displayData.length / itemsPerRow) }).map((_, rowIdx) => (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-10" key={rowIdx}>
          {displayData.slice(rowIdx * itemsPerRow, (rowIdx + 1) * itemsPerRow).map((data) => (
            <MonoCertifications data={data} key={data.id} />
          ))}
        </div>
      ))}
      <div className="flex justify-center mt-4">
        {!showAll && certificationsData.length > maxItems && (
          <button
            className="btn btn-primary px-6 py-2 text-lg font-semibold"
            onClick={() => setShowAll(true)}
          >
            แสดงทั้งหมด
          </button>
        )}
        {showAll && (
          <button
            className="btn btn-outline px-6 py-2 text-lg font-semibold"
            onClick={() => setShowAll(false)}
          >
            อ่านน้อยลง
          </button>
        )}
      </div>
    </div>
  );
};

export default Certificates;
