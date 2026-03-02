import React from "react";

// Custom scrollbar-hide style for cross-browser support
const scrollbarHideStyle = {
  scrollbarWidth: "none", // Firefox
  msOverflowStyle: "none", // IE 10+
};
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/card-1.png";
import card2 from "../../assets/images/portfolio-images/card-2.png";
import card3 from "../../assets/images/portfolio-images/card-3.png";
import card4 from "../../assets/images/portfolio-images/card-4.png";
import card5 from "../../assets/images/portfolio-images/card-5.png";
import card6 from "../../assets/images/portfolio-images/card-6.png";
import card7 from "../../assets/images/portfolio-images/card-7.png";
import card8 from "../../assets/images/portfolio-images/card-8.png";
import card9 from "../../assets/images/portfolio-images/card-9.png";
import card10 from "../../assets/images/portfolio-images/card-10.png";
import card11 from "../../assets/images/portfolio-images/card-11.png";
import card12 from "../../assets/images/portfolio-images/card-12.png";

const projectData = [
  {
    id: 1,
    image: card1,
    category: "โครงการพัฒนาระบบคลาวด์กลางด้านสาธารณสุขของประเทศไทย",
    title: "ระบบสารสนเทศสำหรับโรงพยาบาลส่งเสริมสุขภาพตำบล",
    description:
      "ระบบสารสนเทศสำหรับโรงพยาบาลส่งเสริมสุขภาพตำบล (รพ.สต.) คือแพลตฟอร์มดิจิทัลที่พัฒนาในรูปแบบ Web Application เพื่อทดแทนและยกระดับจากระบบเดิมที่ติดตั้งใช้งานแบบ On-Premise โดยมีเป้าหมายให้ รพ.สต. ทั่วประเทศสามารถใช้งานแพลตฟอร์มมาตรฐานเดียวกันระบบมีการจัดเก็บและประมวลผลข้อมูลการเข้ารับการรักษาไว้ที่ คลาวด์กลางด้านสาธารณสุข ช่วยเพิ่มประสิทธิภาพในการบริหารจัดการข้อมูล ลดภาระด้านเทคนิคในระดับพื้นที่ และอำนวยความสะดวกในการปฏิบัติงานของเจ้าหน้าที่สาธารณสุขอย่างมีนัยสำคัญ\n\nคุณลักษณะเด่นของระบบ\n\n1. สถาปัตยกรรมแบบ Web Application บนคลาวด์\nใช้งานผ่านเว็บเบราว์เซอร์ ไม่ต้องติดตั้งโปรแกรมที่เครื่องลูกข่าย\nจัดเก็บข้อมูลแบบศูนย์กลางบนคลาวด์ด้านสาธารณสุข\n\n2. รองรับการใช้งานพร้อมกันจำนวนมาก (High Concurrency)\nออกแบบมาเพื่อรองรับการเข้าใช้งานของเจ้าหน้าที่มากกว่า 10,000 คนพร้อมกัน\nรองรับการใช้งานในระดับประเทศได้อย่างมีเสถียรภาพ\n\n3. การจัดการข้อมูลหลักแบบศูนย์รวม (Centralized Master Data)\nบริหารจัดการข้อมูล Master Data กลางให้เป็นมาตรฐานเดียวกัน\nรองรับการใช้งานร่วมกันของ รพ.สต. ทั้ง 4,507 แห่งทั่วประเทศ\n\n4. การเชื่อมโยงและแลกเปลี่ยนข้อมูล (Interoperability)\nรองรับการส่งออกข้อมูลตามมาตรฐานด้านสาธารณสุข\nเชื่อมต่อกับระบบแลกเปลี่ยนข้อมูลสุขภาพกลางและหน่วยบริการอื่น ๆ",
    link: "#!",
  },
  {
    id: 2,
    image: card2,
    category: "โครงการพัฒนาระบบคลาวด์กลางด้านสาธารณสุขของประเทศไทย",
    title: "ระบบการแลกเปลี่ยนข้อมูลสุขภาพทั่วประเทศ",
    description:
      "ระบบแลกเปลี่ยนข้อมูลสุขภาพระดับประเทศ (MOPH Exchange Gateway) เป็นแพลตฟอร์มกลางสำหรับการแลกเปลี่ยนข้อมูลประวัติการรักษาของผู้ป่วย โดยเชื่อมโยงข้อมูลระหว่างคลาวด์กลางด้านสาธารณสุขของกระทรวงสาธารณสุข และโรงพยาบาลในโครงข่ายระบบ Health Link ทั่วประเทศ ระบบดังกล่าวช่วยให้แพทย์และบุคลากรทางการแพทย์สามารถเข้าถึงข้อมูลประวัติการรักษาของผู้ป่วยได้อย่างครบถ้วนและต่อเนื่อง ไม่จำกัดสถานพยาบาล เพิ่มความสะดวก รวดเร็ว และความแม่นยำในการวินิจฉัยและรักษา พร้อมทั้งรองรับมาตรการด้านความมั่นคงปลอดภัยของข้อมูลและการคุ้มครองข้อมูลส่วนบุคคลในระดับสูง\n\nคุณลักษณะเด่นของระบบ\n\n1. การเชื่อมโยงข้อมูลมาตรฐานแบบไร้รอยต่อเชื่อมโยงข้อมูลสุขภาพทั้ง 13 เขตสุขภาพ ด้วยมาตรฐานข้อมูลสุขภาพปฐมภูมิ 1 และมาตรฐาน 43 แฟ้มพลัสรองรับการแลกเปลี่ยนข้อมูลกับโรงพยาบาลนอกสังกัด สป.สธ. ผ่าน Central Data Exchange Service (HL7)ใช้เทคโนโลยี FHIR Gateway และ MOPH Gateway ที่ทันสมัย\n\n2. ประสิทธิภาพสูงด้วยกลไก On-Demand Service ไม่ต้องสำรองข้อมูลทั้งหมดไว้ที่ส่วนกลาง ลดความซ้ำซ้อนดึงข้อมูลจากแหล่งต้นทางเมื่อมีการร้องขอมีระบบ Caching เพื่อเพิ่มความรวดเร็ว\n\n3. ระบบ API มาตรฐานเพื่อการขยายผลรองรับการดึงข้อมูลข้ามเขตหลายระดับรองรับการดึงข้อมูลแบบรายรายการ และ Batchสามารถ Export ข้อมูลไปยังระบบอื่นของ สธ.\n\n4. การบริหารจัดการและความปลอดภัยขั้นสูงWeb Application สำหรับผู้ดูแลระบบกำหนดสิทธิ์การเข้าถึงข้อมูลได้ละเอียดถึงระดับแฟ้มมี Log File และ Dashboard สรุปสถิติการใช้งาน\n\n5. สนับสนุนข้อมูลเพื่อการตัดสินใจจัดส่งข้อมูลสรุปอย่างน้อย 10 ชุดข้อมูลสู่คลาวด์กลางโดยอัตโนมัติสนับสนุนการตัดสินใจของผู้บริหารระดับสูง",
    link: "#!",
  },
  {
    id: 3,
    image: card3,
    category: "โครงการพัฒนาระบบคลาวด์กลางด้านสาธารณสุขของประเทศไทย",
    title: "ระบบการเชื่อมโยงและแลกเปลี่ยนข้อมูลกลาง",
    description:
      "เพื่อพัฒนาศูนย์กลางการแลกเปลี่ยนข้อมูลสุขภาพระดับประเทศ ที่เชื่อมโยงข้อมูลระหว่างกระทรวงสาธารณสุข (ผ่าน MOPH Exchange Gateway) กับหน่วยบริการสุขภาพนอกสังกัด (ผ่าน Health Link) และกระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม (MDES) รองรับการแลกเปลี่ยนประวัติการรักษาส่วนบุคคล (Personal Health Record: PHR) เพื่อให้ข้อมูลสุขภาพเชื่อมโยงถึงกันทั่วประเทศอย่างมีมาตรฐาน\n\nคุณลักษณะเด่นของระบบ\n\n1. ศูนย์กลางการเชื่อมโยงข้อมูลสุขภาพแห่งชาติเชื่อมโยงข้ามสังกัด: ทำหน้าที่เป็นสะพานเชื่อมระหว่าง MOPH Exchange Gateway และระบบ Health Link บูรณาการภาครัฐ: เชื่อมโยงข้อมูลประวัติการรักษาระหว่างกระทรวงสาธารณสุข และกระทรวงดิจิทัลเพื่อเศรษฐกิจและสังคม (MDES) มาตรฐานสากล: ใช้มาตรฐาน HL7 FHIR ในการแลกเปลี่ยนข้อมูลสุขภาพและ PHR \n\n2. ประสิทธิภาพสูงแบบ On-Demand ไม่เก็บข้อมูลซ้ำซ้อน: เป็นเพียงช่องทางผ่านข้อมูล ไม่จัดเก็บข้อมูลสุขภาพถาวรรวดเร็ว: ใช้ระบบ Caching เพื่อเพิ่มความเร็วในการแลกเปลี่ยนข้อมูลเสถียรภาพ: รองรับ Traffic สูงด้วยกลไก Rate-limit \n\n3. ความยืดหยุ่นในการเข้าถึงข้อมูลผ่าน API รองรับการดึงข้อมูลแบบรายบุคคล รายโรงพยาบาล รายประเภทข้อมูล และแบบ Batch รองรับ REST API และ FHIR Operations มาตรฐาน เช่น $everything, $document \n\n4. การบริหารจัดการนักพัฒนาและความปลอดภัย Developer Portal: บริหารจัดการ API Key และ IP Address ควบคุมสิทธิขั้นสูง: กำหนดสิทธิ์การเข้าถึงข้อมูลในระดับ Resource ตรวจสอบได้: มีระบบ Log การใช้งานและตรวจสอบย้อนหลัง\n\n5. การแสดงผลและติดตามระบบมี Dashboard แสดงสถิติการใช้งานระบบในมิติต่าง ๆใช้ติดตามประสิทธิภาพและความพร้อมใช้งานของระบบกลาง",
    link: "#!",
  },
  {
    id: 4,
    image: card4,
    category: "โครงการพัฒนาระบบคลาวด์กลางด้านสาธารณสุขของประเทศไทย",
    title: "ระบบบูรณาการคลังข้อมูล (Big Data)",
    description:
      "ระบบบูรณาการคลังข้อมูลขนาดใหญ่ (Public Health Big Data Integration System) ทำหน้าที่เป็น “สมองกลาง” ในการจัดเก็บ รวบรวม และประมวลผลข้อมูลสุขภาพที่มีปริมาณมหาศาล และมีความซับซ้อนสูง เช่น ชุดข้อมูลมาตรฐาน 43 แฟ้มพลัส บนระบบคลาวด์กลางด้านสาธารณสุขระบบช่วยเปลี่ยนข้อมูลดิบให้เป็นสารสนเทศที่มีคุณค่า สนับสนุนการวิเคราะห์เชิงลึก การคาดการณ์แนวโน้มสุขภาพในอนาคต และเพิ่มประสิทธิภาพการดำเนินงานด้านสาธารณสุขในทุกระดับ\n\nคุณลักษณะเด่นของระบบ\n\n1. การวิเคราะห์ข้อมูลหลายมิติ (Flexible Data Mart) สามารถสร้าง Data Mart ได้หลากหลายตามภารกิจและความต้องการใช้งานทำงานบนคลาวด์กลางด้านสาธารณสุข เข้าถึงและประมวลผลข้อมูลได้อย่างรวดเร็วรองรับข้อมูลขนาดใหญ่และการประมวลผลเชิงซับซ้อน\n\n2. รายงานมาตรฐานที่เชื่อถือได้ (Standardized Reporting) สนับสนุนรายงานสำคัญ เช่น รายงานผู้ป่วยนอกแยกโรคประจำวัน และรายงานผู้ป่วยในแยกโรคอ้างอิงตามมาตรฐานข้อมูลสุขภาพปฐมภูมิ 1 และมาตรฐาน 43 แฟ้มพลัสช่วยให้การรายงานข้อมูลมีความถูกต้อง เป็นมาตรฐานเดียวกันทั่วประเทศ\n\n3. พร้อมต่อยอดการวิเคราะห์ขั้นสูง (Advanced Analytics & AI Ready) เชื่อมต่อระบบ Business Intelligence (BI) ได้อย่างสะดวกรองรับการทำ Data Mining, Machine Learning และ AI ช่วยคาดการณ์แนวโน้มสุขภาพและสนับสนุนการวางแผนนโยบายเชิงรุกการแสดงผลข้อมูลและระบบ Dashboard \n\n1. Dashboard สถิติสุขภาพประชาชนแสดงตัวชี้วัดและสถิติทางสาธารณสุขในรูปแบบเดียวกับระบบ HDC ช่วยให้ผู้บริหารและบุคลากรติดตามสถานการณ์สุขภาพประชาชนได้อย่างใกล้ชิด\n\n2. Dashboard สถิติการแลกเปลี่ยนข้อมูลติดตามการไหลเวียนของข้อมูลสุขภาพทั่วประเทศแสดงปริมาณการแลกเปลี่ยนข้อมูลภายในและภายนอกสังกัดกระทรวงสาธารณสุขสนับสนุนการวางแผนและการบริหารจัดการระบบข้อมูลระดับประเทศ",
    link: "#!",
  },
  {
    id: 5,
    image: card5,
    category: "โครงการพัฒนาระบบคลาวด์กลางด้านสาธารณสุขของประเทศไทย",
    title: "ระบบบริหารผู้ใช้งานระบบคลาวด์กลาง Single Sign-On",
    description:
      "ระบบบริหารจัดการผู้ใช้งานบนคลาวด์กลางด้านสาธารณสุข ทำหน้าที่เป็นศูนย์กลางในการควบคุมสิทธิ์การเข้าถึง (Access Control) และยืนยันตัวตนผู้ใช้งาน (Authentication) แบบรวมศูนย์ ผ่านระบบ Single Sign-On (SSO) ช่วยให้บุคลากรสามารถเข้าใช้งานหลายระบบด้วยบัญชีเดียว เพิ่มความสะดวก ปลอดภัย และเป็นไปตามมาตรฐานความมั่นคงปลอดภัยสารสนเทศคุณลักษณะเด่นของระบบ\n\nคุณลักษณะเด่นของระบบ\n\n1. การยืนยันตัวตนแบบรวมศูนย์ (Centralized Authentication & SSO)•	เข้าใช้งานหลายระบบด้วยบัญชีเดียว (One Account, Multiple Systems)•	รองรับมาตรฐาน OAuth 2.0 / OpenID Connect / SAML•	รองรับ Multi-Factor Authentication (MFA) เพื่อเพิ่มความปลอดภัย\n\n2. การบริหารสิทธิ์และบทบาท (Role-Based Access Control: RBAC)•	กำหนดสิทธิ์การเข้าถึงตามบทบาท หน่วยงาน และระดับความรับผิดชอบ•	รองรับโครงสร้างองค์กรแบบลำดับชั้น (Hierarchy-Based Access)•	ตรวจสอบและปรับสิทธิ์การใช้งานได้แบบ Real-time\n\n3. ความมั่นคงปลอดภัยและการตรวจสอบย้อนหลัง (Security & Audit Trail)•	บันทึกประวัติการเข้าใช้งาน (Access Log) และกิจกรรมสำคัญของผู้ใช้•	ตรวจจับพฤติกรรมผิดปกติ (Anomaly Detection) •	รองรับการปฏิบัติตามมาตรฐานความปลอดภัยและข้อกำหนดภาครัฐ\n\n4. รองรับการเชื่อมต่อระบบภายนอก (Integration Ready)•	เชื่อมต่อกับระบบภายในและภายนอกองค์กร•	รองรับ API สำหรับการเชื่อมต่อ Application ต่าง ๆ•	รองรับการขยายตัวในระดับประเทศ",
    link: "#!",
  },
  {
    id: 6,
    image: card6,
    category: "โครงการพัฒนาระบบคลาวด์กลางด้านสาธารณสุขของประเทศไทย",
    title: "ระบบ Monitoring และแจ้งเตือนการทำงานของระบบคลาวด์กลาง",
    description:
      "ระบบติดตาม ตรวจสอบ และแจ้งเตือนสถานะการทำงานของโครงสร้างพื้นฐานและบริการบนคลาวด์กลาง ทำหน้าที่เป็น “ศูนย์ควบคุมเสถียรภาพระบบ” เพื่อให้บริการมีความต่อเนื่อง (High Availability) และลดความเสี่ยงจาก Downtime\n\nคุณลักษณะเด่นของระบบ\n\n1. การติดตามสถานะโครงสร้างพื้นฐาน (Infrastructure Monitoring)•	ตรวจสอบสถานะ Server, VM, Container, Database และ Network•	วัดค่า CPU, Memory, Disk, Bandwidth และ Response Time แบบ Real-time•	รองรับ Hybrid / Multi-Cloud Environment\n\n2. การติดตาม Application และ Service (Application Performance Monitoring: APM)•	วิเคราะห์ประสิทธิภาพของ Application และ API•	ตรวจสอบ Error Rate, Latency และ Transaction Flow•	ระบุจุดคอขวดของระบบ (Bottleneck Analysis)\n\n3. ระบบแจ้งเตือนอัตโนมัติ (Intelligent Alerting System)•	แจ้งเตือนผ่าน Email, SMS, LINE, หรือ Dashboard กลาง•	กำหนด Threshold และเงื่อนไขการแจ้งเตือนได้ตาม SLA•	จัดลำดับความสำคัญของเหตุการณ์ (Incident Severity Level)\n\n4. Dashboard และรายงานเชิงวิเคราะห์•	แสดงภาพรวมสถานะระบบแบบ Real-time Monitoring Dashboard•	รายงาน SLA, Uptime และ Incident Report•	สนับสนุนการวิเคราะห์แนวโน้มปัญหา (Predictive Maintenance)\n\n5. ความพร้อมต่อการขยายระบบ (Scalability & Resilience)•	รองรับการขยายตัวของปริมาณผู้ใช้งานและปริมาณข้อมูล•	สนับสนุนระบบสำรอง (Failover / Redundancy)•	เพิ่มเสถียรภาพและความต่อเนื่องของบริการระดับประเทศ",
    link: "#!",
  },
  {
    id: 7,
    image: card7,
    category: "Smart Farm",
    title: "Smart Farm System",
    description:
      "ระบบบริหารจัดการฟาร์มอัจฉริยะ (Smart Farm) ที่เชื่อมโยงข้อมูลการเพาะปลูก การจัดการทรัพยากร และการติดตามผลผลิตแบบครบวงจร โดยใช้เทคโนโลยี IoT, Cloud และ Data Analytics เพื่อเพิ่มประสิทธิภาพ ลดต้นทุน และสนับสนุนการตัดสินใจเชิงข้อมูลของเกษตรกรและผู้บริหาร\n\nคุณลักษณะเด่นของระบบ\n\n1. การติดตามข้อมูลแบบ Real-time•	เก็บข้อมูลสภาพอากาศ ความชื้น ดิน น้ำ และปัจจัยแวดล้อมผ่าน IoT•	แสดงผลผ่าน Dashboard กลางบน Cloud\n\n2. การวิเคราะห์และคาดการณ์ผลผลิต•	วิเคราะห์ข้อมูลการเพาะปลูกย้อนหลัง•	รองรับการทำ Predictive Analytics เพื่อวางแผนการผลิต\n\n3. การบริหารจัดการทรัพยากร•	ควบคุมการใช้น้ำ ปุ๋ย และแรงงาน•	ลดต้นทุนและเพิ่มผลผลิตอย่างยั่งยืน",
    link: "#!",
  },
  {
    id: 8,
    image: card8,
    category: "Smart Farm",
    title: "GPS Tracking System",
    description:
      "ระบบติดตามยานพาหนะและทรัพย์สินแบบ Real-time ผ่านเทคโนโลยี GPS และ Cloud Platform ช่วยเพิ่มประสิทธิภาพการบริหารจัดการขนส่ง ความปลอดภัย และการควบคุมต้นทุน\n\nคุณลักษณะเด่นของระบบ\n\n1. Real-time Tracking•	แสดงตำแหน่งรถบนแผนที่แบบทันที•	ตรวจสอบเส้นทางย้อนหลัง (Playback)\n\n2. การแจ้งเตือนอัตโนมัติ•	แจ้งเตือนเมื่อออกนอกเส้นทาง (Geo-Fence)•	แจ้งเตือนความเร็วเกินกำหนด\n\n3. รายงานและวิเคราะห์ข้อมูล•	รายงานการใช้งานรถ ระยะทาง และพฤติกรรมการขับขี่•	สนับสนุนการวางแผนเส้นทางและลดต้นทุนเชื้อเพลิง",
    link: "#!",
  },
  {
    id: 9,
    image: card9,
    category: "Restaurant",
    title: "Restaurant Application",
    description:
      "ระบบบริหารจัดการร้านอาหารแบบครบวงจร ครอบคลุม POS, Stock, Kitchen Display และรายงานยอดขาย รองรับการทำงานทั้งหน้าร้านและ Mobile Application\n\nคุณลักษณะเด่นของระบบ\n\n1. ระบบขายหน้าร้าน (POS)•	รองรับการชำระเงินหลายรูปแบบ•	เชื่อมต่อเครื่องพิมพ์ใบเสร็จและอุปกรณ์หน้าร้าน\n\n2. ระบบจัดการสต็อก•	ตัดสต็อกอัตโนมัติ•	แจ้งเตือนสินค้าใกล้หมด\n\n3. Dashboard•	รายงานยอดขายแบบ Real-time•	วิเคราะห์เมนูยอดนิยมและกำไรขั้นต้น",
    link: "#!",
  },
  {
    id: 10,
    image: card10,
    category: "Sugar",
    title: "SAP ERP Integration System",
    description:
      "ระบบเชื่อมต่อข้อมูลระหว่างระบบภายในองค์กรกับ SAP ERP เพื่อให้ข้อมูลทางการเงิน บัญชี ซัพพลายเชน และการดำเนินงานเป็นหนึ่งเดียว (Single Source of Truth) ลดความซ้ำซ้อนของข้อมูล เพิ่มความถูกต้อง และสนับสนุนการบริหารจัดการองค์กรในระดับเชิงกลยุทธ์\n\nคุณลักษณะเด่นของระบบ\n\n1. Data Integration•	เชื่อมต่อข้อมูลผ่าน API / Middleware / Web Service•	รองรับการเชื่อมโยงข้อมูลแบบ Real-time และ Batch Processing•	ลดการป้อนข้อมูลซ้ำ และลด Human Error2. ความถูกต้องและความสอดคล้องของข้อมูล•	ตรวจสอบความครบถ้วนของข้อมูลก่อนทำการ Sync (Data Validation)•	รองรับกระบวนการ Reconciliation ทางบัญชี•	จัดการ Error Handling และ Log Monitoring อย่างเป็นระบบ\n\n3. รองรับการขยายตัวองค์กร•	รองรับการทำงานหลายบริษัท (Multi-Company) และหลายสาขา (Multi-Branch)•	รองรับปริมาณข้อมูลธุรกรรมจำนวนมาก•	สนับสนุนการวิเคราะห์ข้อมูลทางการเงินเชิงลึกผ่าน SAP Module ต่าง ๆ\n\nการเชื่อมโยงระบบหลัก (Core Business Integration)\n\n4. การเชื่อมโยงกับระบบ Sugar Management System•	ส่งข้อมูลรับซื้ออ้อย ต้นทุนการผลิต และสต็อกสินค้าเข้าสู่ SAP•	บันทึกบัญชีต้นทุนการผลิต (Costing) และการบริหารคลังสินค้าแบบอัตโนมัติ•	สนับสนุนการวิเคราะห์ต้นทุนต่อหน่วยและกำไรขั้นต้น\n\n5. การเชื่อมโยงกับระบบ Sugar Loan System•	บันทึกข้อมูลสินเชื่อเกษตรกรเข้าสู่ระบบบัญชีลูกหนี้ (Accounts Receivable)•	ติดตามยอดคงค้าง ดอกเบี้ย และการชำระเงินแบบ Real-time•	สนับสนุนการวิเคราะห์ความเสี่ยงด้านเครดิตและกระแสเงินสด (Cash Flow Management)\n\n6. การเชื่อมโยงข้อมูลด้านบัญชีและการเงิน•	รวมข้อมูลรายได้ ต้นทุน และค่าใช้จ่ายเข้าสู่ระบบบัญชีหลัก•	สนับสนุนการจัดทำงบการเงินอัตโนมัติ•	เพิ่มความโปร่งใส ตรวจสอบย้อนหลังได้ และสอดคล้องกับมาตรฐานทางบัญชี",
    link: "#!",
  },
  {
    id: 11,
    image: card11,
    category: "Sugar",
    title: "Sugar Management System",
    description:
      "ระบบบริหารจัดการอุตสาหกรรมน้ำตาล ครอบคลุมกระบวนการรับอ้อย การชั่งน้ำหนัก การคำนวณคุณภาพ และการบริหารสต็อกน้ำตาล\n\nคุณลักษณะเด่นของระบบ\n\n1. ระบบรับซื้อและชั่งอ้อย•	เชื่อมต่อเครื่องชั่งอัตโนมัติ•	คำนวณคุณภาพและราคาแบบ Real-time\n\n2. ระบบบริหารคลังสินค้า•	ติดตามปริมาณน้ำตาลคงคลัง•	รายงานการผลิตและการกระจายสินค้า\n\n3. รายงานเชิงบริหาร•	วิเคราะห์ประสิทธิภาพโรงงาน•	สนับสนุนการตัดสินใจเชิงกลยุทธ์",
    link: "#!",
  },
  {
    id: 12,
    image: card12,
    category: "Sugar",
    title: "Sugar Loan System",
    description:
      "ระบบบริหารจัดการสินเชื่อสำหรับเกษตรกรผู้ปลูกอ้อย รองรับการอนุมัติ การติดตาม และการชำระเงินแบบครบวงจร\n\nคุณลักษณะเด่นของระบบ\n\n1. ระบบจัดการคำขอสินเชื่อ•	บันทึกข้อมูลเกษตรกรและวงเงิน•	กระบวนการอนุมัติหลายระดับ\n\n2. การติดตามสถานะและการชำระเงิน•	แจ้งเตือนกำหนดชำระ•	รายงานสถานะหนี้คงค้าง\n\n3. การเชื่อมต่อข้อมูลกับระบบหลัก•	เชื่อมต่อกับระบบบัญชีและระบบรับซื้ออ้อย•	สนับสนุนการวิเคราะห์ความเสี่ยงด้านเครดิต",
    link: "#!",
  },
];

const Portfolio = () => {
  const [modalData, setModalData] = React.useState(null);
  const [showAll, setShowAll] = React.useState(false);
  return (
    <div>
      <div
        className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
        id="portfolio"
      >
        <div className="xl:mb-17.5 mb-5">
          <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
            <p className="section-title ">
              ประสบการณ์พัฒนาระบบและบริหารโครงการ
            </p>
            <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
              นี่คือประสบการณ์ด้านการ Software
              ที่ผมมีโอกาสบริหารและขับเคลื่อนโครงการทั้งในภาคเอกชนและหน่วยงานภาครัฐ
              โดยรับผิดชอบตั้งแต่การพัฒนาระบบ
              บริหารโครงการและนำระบบขึ้นใช้งานจริง (Go-Live)
            </p>
          </div>
        </div>
        <div className="mx-auto flex justify-center">
          <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
            {(showAll ? projectData : projectData.slice(0, 6)).map((data, index) => (
              <div key={index}>
                <button
                  className="w-full text-left"
                  onClick={() => setModalData(data)}
                >
                  <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
                    <img src={data?.image} alt={`${data?.title} image`} />
                    <div className="p-4 xs:p-8">
                      <p className="text-gray-400 text-xs font-medium">
                        {data?.category}
                      </p>
                      <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
                        {data?.title}
                      </p>
                      <p
                        style={{ lineHeight: "20px", letterSpacing: "0%" }}
                        className="text-gray-600 text-xs xxs:text-[14px] text-wrap line-clamp-3"
                      >
                        {data?.description}
                      </p>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        </div>
        <div className="text-center">
          {!showAll && (
            <button
              className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
              onClick={() => setShowAll(true)}
            >
              แสดงทั้งหมด
            </button>
          )}
          {showAll && (
            <button
              className="btn btn-secondary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
              onClick={() => setShowAll(false)}
            >
              แสดงน้อยลง
            </button>
          )}
        </div>
        {/* Modal for project details */}
        {modalData && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
            <div
              className="bg-white rounded-xl p-8 w-[70vw] max-w-[70vw] shadow-2xl relative overflow-y-auto max-h-[90vh]"
              style={scrollbarHideStyle}
            >
              <button
                className="absolute top-2 right-2 text-gray-500 hover:text-gray-800"
                onClick={() => setModalData(null)}
              >
                ปิด
              </button>
              <div className="flex flex-col items-center">
                <img
                  src={modalData.image}
                  alt={modalData.title}
                  className="w-32 h-32 object-cover rounded mb-4"
                />
                <p className="font-bold text-xl mb-2">{modalData.title}</p>
                <p className="text-gray-400 text-xs font-medium mb-2">
                  {modalData.category}
                </p>
                {/* Custom rendering for description with Key Features */}
                {modalData.id === 1 ? (
                  <div className="w-full max-w-2xl">
                    {/* Main description for id 1 */}
                    <p className="text-gray-700 text-base mb-6">
                      ระบบสารสนเทศสำหรับโรงพยาบาลส่งเสริมสุขภาพตำบล (รพ.สต.)
                      คือแพลตฟอร์มดิจิทัลที่พัฒนาในรูปแบบ Web Application
                      เพื่อทดแทนและยกระดับจากระบบเดิมที่ติดตั้งใช้งานแบบ
                      On-Premise โดยมีเป้าหมายให้ รพ.สต.
                      ทั่วประเทศสามารถใช้งานแพลตฟอร์มมาตรฐานเดียวกันระบบมีการจัดเก็บและประมวลผลข้อมูลการเข้ารับการรักษาไว้ที่
                      คลาวด์กลางด้านสาธารณสุข
                      ช่วยเพิ่มประสิทธิภาพในการบริหารจัดการข้อมูล
                      ลดภาระด้านเทคนิคในระดับพื้นที่
                      และอำนวยความสะดวกในการปฏิบัติงานของเจ้าหน้าที่สาธารณสุขอย่างมีนัยสำคัญ
                    </p>
                    <div className="mb-4">
                      <p className="font-bold text-lg text-picto-primary mb-2">
                        คุณลักษณะเด่นของระบบ
                      </p>
                      <div className="grid gap-4">
                        <div className="bg-gray-50 rounded-lg shadow p-4">
                          <p className="font-semibold text-picto-primary mb-1">
                            1. สถาปัตยกรรมแบบ Web Application บนคลาวด์
                          </p>
                          <ul className="list-disc ml-5 text-gray-700">
                            <li>
                              ใช้งานผ่านเว็บเบราว์เซอร์
                              ไม่ต้องติดตั้งโปรแกรมที่เครื่องลูกข่าย
                            </li>
                            <li>
                              จัดเก็บข้อมูลแบบศูนย์กลางบนคลาวด์ด้านสาธารณสุข
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow p-4">
                          <p className="font-semibold text-picto-primary mb-1">
                            2. รองรับการใช้งานพร้อมกันจำนวนมาก (High
                            Concurrency)
                          </p>
                          <ul className="list-disc ml-5 text-gray-700">
                            <li>
                              ออกแบบมาเพื่อรองรับการเข้าใช้งานของเจ้าหน้าที่มากกว่า
                              10,000 คนพร้อมกัน
                            </li>
                            <li>
                              รองรับการใช้งานในระดับประเทศได้อย่างมีเสถียรภาพ
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow p-4">
                          <p className="font-semibold text-picto-primary mb-1">
                            3. การจัดการข้อมูลหลักแบบศูนย์รวม (Centralized
                            Master Data)
                          </p>
                          <ul className="list-disc ml-5 text-gray-700">
                            <li>
                              บริหารจัดการข้อมูล Master Data
                              กลางให้เป็นมาตรฐานเดียวกัน
                            </li>
                            <li>
                              รองรับการใช้งานร่วมกันของ รพ.สต. ทั้ง 4,507
                              แห่งทั่วประเทศ
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow p-4">
                          <p className="font-semibold text-picto-primary mb-1">
                            4. การเชื่อมโยงและแลกเปลี่ยนข้อมูล
                            (Interoperability)
                          </p>
                          <ul className="list-disc ml-5 text-gray-700">
                            <li>
                              รองรับการส่งออกข้อมูลตามมาตรฐานด้านสาธารณสุข
                            </li>
                            <li>
                              เชื่อมต่อกับระบบแลกเปลี่ยนข้อมูลสุขภาพกลางและหน่วยบริการอื่น
                              ๆ
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                ) : modalData.id === 2 ? (
                  <div className="w-full max-w-2xl">
                    {/* Main description for id 2 */}
                    <p className="text-gray-700 text-base mb-6">
                      ระบบแลกเปลี่ยนข้อมูลสุขภาพระดับประเทศ (MOPH Exchange
                      Gateway)
                      เป็นแพลตฟอร์มกลางสำหรับการแลกเปลี่ยนข้อมูลประวัติการรักษาของผู้ป่วย
                      โดยเชื่อมโยงข้อมูลระหว่างคลาวด์กลางด้านสาธารณสุขของกระทรวงสาธารณสุข
                      และโรงพยาบาลในโครงข่ายระบบ Health Link ทั่วประเทศ
                      ระบบดังกล่าวช่วยให้แพทย์และบุคลากรทางการแพทย์สามารถเข้าถึงข้อมูลประวัติการรักษาของผู้ป่วยได้อย่างครบถ้วนและต่อเนื่อง
                      ไม่จำกัดสถานพยาบาล เพิ่มความสะดวก รวดเร็ว
                      และความแม่นยำในการวินิจฉัยและรักษา
                      พร้อมทั้งรองรับมาตรการด้านความมั่นคงปลอดภัยของข้อมูลและการคุ้มครองข้อมูลส่วนบุคคลในระดับสูง
                    </p>
                    <div className="mb-4">
                      <p className="font-bold text-lg text-picto-primary mb-2">
                        คุณลักษณะเด่นของระบบ
                      </p>
                      <div className="grid gap-4">
                        <div className="bg-gray-50 rounded-lg shadow p-4">
                          <p className="font-semibold text-picto-primary mb-1">
                            1. การเชื่อมโยงข้อมูลมาตรฐานแบบไร้รอยต่อ
                          </p>
                          <ul className="list-disc ml-5 text-gray-700">
                            <li>
                              เชื่อมโยงข้อมูลสุขภาพทั้ง 13 เขตสุขภาพ
                              ด้วยมาตรฐานข้อมูลสุขภาพปฐมภูมิ 1 และมาตรฐาน 43
                              แฟ้มพลัส
                            </li>
                            <li>
                              รองรับการแลกเปลี่ยนข้อมูลกับโรงพยาบาลนอกสังกัด
                              สป.สธ. ผ่าน Central Data Exchange Service (HL7)
                            </li>
                            <li>
                              ใช้เทคโนโลยี FHIR Gateway และ MOPH Gateway
                              ที่ทันสมัย
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow p-4">
                          <p className="font-semibold text-picto-primary mb-1">
                            2. ประสิทธิภาพสูงด้วยกลไก On-Demand Service
                          </p>
                          <ul className="list-disc ml-5 text-gray-700">
                            <li>
                              ไม่ต้องสำรองข้อมูลทั้งหมดไว้ที่ส่วนกลาง
                              ลดความซ้ำซ้อน
                            </li>
                            <li>ดึงข้อมูลจากแหล่งต้นทางเมื่อมีการร้องขอ</li>
                            <li>มีระบบ Caching เพื่อเพิ่มความรวดเร็ว</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow p-4">
                          <p className="font-semibold text-picto-primary mb-1">
                            3. ระบบ API มาตรฐานเพื่อการขยายผล
                          </p>
                          <ul className="list-disc ml-5 text-gray-700">
                            <li>รองรับการดึงข้อมูลข้ามเขตหลายระดับ</li>
                            <li>รองรับการดึงข้อมูลแบบรายรายการ และ Batch</li>
                            <li>สามารถ Export ข้อมูลไปยังระบบอื่นของ สธ.</li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow p-4">
                          <p className="font-semibold text-picto-primary mb-1">
                            4. การบริหารจัดการและความปลอดภัยขั้นสูง
                          </p>
                          <ul className="list-disc ml-5 text-gray-700">
                            <li>Web Application สำหรับผู้ดูแลระบบ</li>
                            <li>
                              กำหนดสิทธิ์การเข้าถึงข้อมูลได้ละเอียดถึงระดับแฟ้ม
                            </li>
                            <li>
                              มี Log File และ Dashboard สรุปสถิติการใช้งาน
                            </li>
                          </ul>
                        </div>
                        <div className="bg-gray-50 rounded-lg shadow p-4">
                          <p className="font-semibold text-picto-primary mb-1">
                            5. สนับสนุนข้อมูลเพื่อการตัดสินใจ
                          </p>
                          <ul className="list-disc ml-5 text-gray-700">
                            <li>
                              จัดส่งข้อมูลสรุปอย่างน้อย 10
                              ชุดข้อมูลสู่คลาวด์กลางโดยอัตโนมัติ
                            </li>
                            <li>สนับสนุนการตัดสินใจของผู้บริหารระดับสูง</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  ) : (
                    <div className="w-full max-w-2xl">
                      {/* Render description and key features for remaining projects */}
                      <p className="text-gray-700 text-base mb-6 whitespace-pre-line">
                        {modalData.description.split("\n\nคุณลักษณะเด่นของระบบ")[0]}
                      </p>
                      {modalData.description.includes("คุณลักษณะเด่นของระบบ") && (
                        <div className="mb-4">
                          <p className="font-bold text-lg text-picto-primary mb-2">
                            คุณลักษณะเด่นของระบบ
                          </p>
                          <div className="grid gap-4">
                            {modalData.description
                              .split("\n\nคุณลักษณะเด่นของระบบ")[1]
                              .split(/\n\n\d+\./)
                              .filter(Boolean)
                              .map((feature, idx) => {
                                // Extract feature title and details
                                const match = feature.match(/^(.*?)(\n|•)/);
                                const title = match ? match[1].trim() : `คุณลักษณะเด่นข้อ ${idx + 1}`;
                                const details = feature.replace(title, "").trim();
                                // Split details into bullet points
                                const bullets = details
                                  .split(/\n|•/)
                                  .map((b) => b.trim())
                                  .filter((b) => b.length > 0);
                                return (
                                  <div key={idx} className="bg-gray-50 rounded-lg shadow p-4">
                                    <p className="font-semibold text-picto-primary mb-1">
                                      {`${idx + 1}. ${title}`}
                                    </p>
                                    <ul className="list-disc ml-5 text-gray-700">
                                      {bullets.map((b, i) => (
                                        <li key={i}>{b}</li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              })}
                          </div>
                        </div>
                      )}
                    </div>
                  )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Portfolio;
