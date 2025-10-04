"use client";

import React, { useEffect, useState } from "react";
import ActionButton from "@/components/ActionButton";
import {
  type Shelter,
  type MedicalStation,
  type MentalHealthResource,
} from "@/lib/api";
import DetailModal from "./DetailModal";

export type DataType = Shelter | MedicalStation | MentalHealthResource;

interface InfoCardProps {
  name: string;
  address?: string;
  type?: string;
  hours?: string;
  contact?: string;
  infoUrl?: string;
  mapUrl?: string;
  className?: string;
  fullData?: DataType;
}

const InfoCard: React.FC<InfoCardProps> = ({
  name,
  address,
  type,
  hours,
  contact,
  mapUrl,
  className = "",
  fullData,
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 處理 modal 打開時鎖定滾動
  useEffect(() => {
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isModalOpen]);

  return (
    <div
      className={`
      bg-white dark:bg-gray-800
      border-b border-gray-200 dark:border-gray-700
      px-1
      py-3
      ${className}
    `}
    >
      <div className="flex flex-col pr-1">
        <h3 className="text-xl font-bold text-[#1E1E1E] dark:text-white mb-1">
          {name}
        </h3>
        {address && (
          <div className="flex items-start gap-1 text-[#1E1E1E] dark:text-gray-200 mb-2">
            <span>{address}</span>
          </div>
        )}
        <div className="flex items-start gap-2 text-[#838383] dark:text-gray-400">
          <div className="font-medium w-10">類型</div>
          <div className="w-[290px]">{type || "未提供"}</div>
        </div>
        <div className="flex items-start gap-2 text-[#838383] dark:text-gray-400 mb-2">
          <div className="font-medium w-10">{hours ? "時段" : "資訊"}</div>
          <div className="w-[290px]">{hours ? hours : contact || "未提供"}</div>
        </div>
      </div>
      <div className="flex gap-2">
        {mapUrl && <ActionButton href={mapUrl}>導航</ActionButton>}
        {fullData && (
          <ActionButton
            variant="secondary"
            icon="/info.svg"
            onClick={() => setIsModalOpen(true)}
          >
            查看資訊
          </ActionButton>
        )}
        {contact && (
          <ActionButton
            variant="secondary"
            icon="/call.svg"
            href={`tel:${contact}`}
          >
            立即聯絡
          </ActionButton>
        )}
      </div>

      {/* 彈窗 */}
      {isModalOpen && (
        <DetailModal
          setIsModalOpen={setIsModalOpen}
          type={type}
          name={name}
          fullData={fullData}
        />
      )}
    </div>
  );
};

export default InfoCard;
