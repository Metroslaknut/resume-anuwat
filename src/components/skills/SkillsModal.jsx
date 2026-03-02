import React from "react";
import { technicalSkillIcons } from "../skill/technicalSkillIcons";

const SkillsModal = ({ onClose }) => (
  <div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent">
    <div className="bg-white rounded-xl shadow-2xl p-8 w-full h-full max-w-none relative">
      <button
        className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-3xl"
        onClick={onClose}
        aria-label="Close"
      >
        &times;
      </button>
      <h3 className="text-2xl font-bold mb-6 text-center">Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-gradient-to-br from-gray-50 to-white rounded-xl shadow-lg border border-gray-200 p-6">
          <h4 className="font-semibold mb-2 text-lg">Soft Skills</h4>
          <ul className="mb-4 list-disc list-inside text-base text-gray-700">
            <li>การสื่อสารและประสานงานกับลูกค้า ทีมงาน และ Vendor อย่างมีประสิทธิภาพ</li>
            <li>การบริหารโครงการและการแก้ไขปัญหาเชิงระบบ (Analytical & Problem-Solving Skills)</li>
            <li>การบริหารความขัดแย้งและการเจรจาต่อรอง (Conflict Management & Negotiation)</li>
            <li>การบริหารเวลาและลำดับความสำคัญของงาน (Time & Priority Management)</li>
            <li>การตัดสินใจภายใต้แรงกดดัน (Decision-Making Under Pressure)</li>
            <li>การบริหารผู้มีส่วนได้ส่วนเสีย (Stakeholder Management)</li>
            <li>การทำงานเป็นทีมและผลักดันงานให้สำเร็จตามเป้าหมาย</li>
            <li>การให้คำแนะนำ (Coaching) และถ่ายทอดองค์ความรู้แก่ทีมงาน เพื่อพัฒนาทักษะและยกระดับศักยภาพของทีมอย่างต่อเนื่อง</li>
            <li>การส่งเสริมวัฒนธรรมการเรียนรู้และการพัฒนาตนเองภายในทีม (Continuous Learning & Team Development)</li>
          </ul>
        </div>
        <div className="flex flex-col h-[60vh] rounded-xl shadow-lg border border-gray-200 p-6">
          <h4 className="font-semibold mb-2 text-lg sticky top-0 bg-white z-10 pb-2">Technical Skills</h4>
          <div className="space-y-6 overflow-y-auto">
            {technicalSkillIcons.map((group) => (
              <div key={group.group} className="w-full">
                <div className="font-bold mb-2 text-picto-primary text-base">{group.group}</div>
                <div className="flex flex-wrap gap-x-6 gap-y-6 w-full min-h-0">
                  {group.skills.map((skill) => (
                    <div key={skill.name} className="flex flex-col items-center w-24">
                      <div>{skill.svg}</div>
                      <span className="mt-2 text-xs text-center line-clamp-2 break-words hyphens-auto w-full" title={skill.name}>{skill.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default SkillsModal;
