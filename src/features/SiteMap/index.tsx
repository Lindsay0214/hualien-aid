"use client";

import { useState } from "react";
import MapShow from "@/features/SiteMap/MapShow";

export default function SiteMap() {
  const [showWarningModal, setShowWarningModal] = useState(false);

  return (
    <div>
      {/* 跑馬燈 */}
      <div
        className="bg-[#FFF4E6] dark:bg-orange-900/30 border-l-4 border-[#C96319] dark:border-orange-500 p-4 overflow-hidden cursor-pointer hover:bg-[#FFE8C8] dark:hover:bg-orange-900/50 transition-colors"
        onClick={() => setShowWarningModal(true)}
      >
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 mt-0.5">
            <svg
              className="w-5 h-5 text-[#C96319] dark:text-orange-400"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="flex-1 overflow-hidden">
            <div className="whitespace-nowrap">
              <span className="inline-block animate-marquee text-[#C96319] dark:text-orange-300 font-medium">
                現場隨時有溢流風險，點此詳讀避難守則，警報響起請往高處避難
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                現場隨時有溢流風險，點此詳讀避難守則，警報響起請往高處避難
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 警告視窗 */}
      {showWarningModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div
            className="fixed inset-0 bg-black bg-opacity-20 backdrop-blur-sm"
            onClick={() => setShowWarningModal(false)}
          />
          <div className="relative bg-[#2D2D2D] dark:bg-gray-900 rounded-2xl max-w-md w-full p-6 shadow-2xl">
            {/* 關閉按鈕 */}
            <button
              onClick={() => setShowWarningModal(false)}
              className="absolute top-4 right-4 text-white hover:text-gray-300 text-2xl w-8 h-8 flex items-center justify-center"
            >
              ✕
            </button>

            {/* 標題 */}
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              避難守則
            </h2>

            {/* 內容 */}
            <div className="space-y-4 text-white">
              <p className="text-lg font-medium text-center text-red-400">
                堰塞湖隨時有溢流風險
              </p>
              <p className="text-xl font-bold text-center text-red-400">
                若警報響起，請儘速往
                <br />
                高處或高樓層避難
              </p>

              {/* 警報說明 */}
              <div className="bg-gray-800 dark:bg-gray-950 rounded-lg p-4 space-y-3">
                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11 5v8.59l6.29 6.3 1.42-1.42L13 12.76V5h-2zm6 14c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v14z" />
                  </svg>
                  <div className="flex-1">
                    <p className="font-bold">海嘯警報（無語音）</p>
                    <p className="text-sm text-gray-300">鳴5秒、停5秒</p>
                    <p className="text-sm text-gray-300">重複9遍，共85秒</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <svg
                    className="w-8 h-8 text-white"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M11 5v8.59l6.29 6.3 1.42-1.42L13 12.76V5h-2zm6 14c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2V5c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v14z" />
                  </svg>
                  <div className="flex-1">
                    <p className="font-bold">解除警報</p>
                    <p className="text-sm text-gray-300">一長聲90秒</p>
                  </div>
                </div>
              </div>

              <p className="text-sm text-center text-gray-300">
                如未聽到警報，請勿誤信錯誤訊息！
                <br />
                並請大家協助轉傳正確資訊
              </p>
            </div>
          </div>
        </div>
      )}

      <MapShow />
    </div>
  );
}
