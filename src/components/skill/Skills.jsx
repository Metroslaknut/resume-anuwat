import React from "react";
import { technicalSkillIcons } from "./technicalSkillIcons.jsx";
import person from "../../assets/images/person2.png";

const softSkills = [
  "การสื่อสารและประสานงานกับลูกค้า ทีมงาน และ Vendor",
  "การบริหารโครงการและแก้ไขปัญหาเชิงระบบ",
  "การทำงานเป็นทีมและผลักดันงานให้สำเร็จตามเป้าหมาย",
];

const technicalSkills = [
  "Programming: React, React Native, Flutter, HTML",
  "Database: SQL Server, MySQL, PostgreSQL, MongoDB",
  "Architecture: Software Architecture, Infrastructure Architecture",
  "UX/UI: User Experience & User Interface Design",
  "System: API Integration, Cloud System, Security Testing (Pentest & VA Scan)",
];


const Skills = () => {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8 text-center">Skills</h1>
      {/* Soft Skills Section */}
      <div className="relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4 mb-12">
        <div className="flex max-md:flex-col justify-between items-center gap-6">
          {/* Profile image */}
          <div className="xxl:max-w-106 w-auto h-auto xxl:max-h-126 flex-shrink-0">
            <div className="max-w-106 h-117 object-fill overflow-hidden rounded-xl">
              <img
                className="bg-soft-white h-[120%] object-cover"
                src={person}
                alt="profile"
              />
            </div>
          </div>
          {/* Soft Skills details */}
          <div className="max-sm:w-full w-[33rem]">
            <h2 className={"text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8 text-picto-primary"}>
              Soft Skills
            </h2>
            <div className={"text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600"}>
              {softSkills.map((skill, idx) => (
                <p className={"mb-3"} key={idx}>• {skill}</p>
              ))}
            </div>
          </div>
        </div>
      </div>
      {/* Technical Skills Section */}
      <div className="bg-white rounded-xl shadow-md p-6">
        <h2 className="text-xl font-semibold mb-4 text-picto-primary">Technical Skills</h2>
        <div className="space-y-6">
          {technicalSkillIcons.map((group) => (
            <div key={group.group}>
              <div className="font-semibold text-base mb-2 text-gray-700">{group.group}</div>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-2">
                {group.skills.map((item) => (
                  <div
                    key={item.name}
                    className="flex flex-col items-center justify-center bg-[#F8F6FF] rounded-lg p-4 hover:shadow-lg transition-all duration-300"
                  >
                    <div className="mb-2">{item.svg}</div>
                    <span className="text-sm font-medium text-gray-800 text-center">{item.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
