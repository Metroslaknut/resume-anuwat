import { useState } from "react";

const MonoCertifications = ({ data }) => {
  return (
    <div className="overflow-hidden rounded-lg border border-gray-100 hover:shadow-2xl bg-white shadow-gray-300 transition-all duration-300">
      <div className="mt-4 flex flex-row items-start gap-4">
        <iframe
          src={data.pdf}
          width="400px"
          height="200px"
          title="ตัวอย่างไฟล์ PDF"
          style={{ border: '1px solid #ccc', borderRadius: '8px' }}
        />
      </div>
      <div className="m-6">
        <p className="text-[10px] xs:text-[14px] font-normal text-gray-400 ">
          {data?.date} / {data?.comments} Comments
        </p>
        <a
          href={data.pdf}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] xs:text-lg font-medium text-[#333333] hover:text-blue-600 underline"
        >
          {data?.title.length > 40
            ? `${data?.title.slice(0, 40)}...`
            : data?.title}
        </a>
      </div>
    </div>
  );
};

export default MonoCertifications;
