import React, { useState } from "react";
import Button from "@/components/Button";
import InfoCard from "@/features/SiteMap/InfoCard";
import {
  getWaterRefillStations,
  getShowerStations,
} from "@/lib/api";

type LocationCategory = "all" | "water_refill_stations" | "shower_stations" | "medical_stations" | "accommodations";
type ShowMode = "mapShow" | "listShow";

const CATEGORIES = [
  {
    key: "all",
    name: "全部",
  },
  {
    key: "water_refill_stations",
    name: "加水站",
  },
  {
    key: "shower_stations",
    name: "洗澡點",
  },
  {
    key: "restrooms",
    name: "廁所"
  },
  {
    key: "medical_stations",
    name: "醫療站",
  },
  {
    key: "accommodations",
    name: "住宿",
  },
];

const MAP_URL = "https://guangfu250923-map.pttapp.cc/map.html";
const MAP_HEIGHT = 422;

function getCategoryName(key) {
  for(let i in CATEGORIES) {
    if (CATEGORIES[i].key === key) {
      return CATEGORIES[i].name
    }
  }
}

export default function MapShow() {
  const [showMode, setShowMode] = useState<ShowMode>("mapShow");
  const [selectedCategory, setSelectedCategory] =
    useState<LocationCategory>("all");
  const [dataLists, setDataLists] = useState([])
  
  const handleCategoryClick = async (categoryKey) => {
    setSelectedCategory(categoryKey)
    let response = {}
    switch(categoryKey) {
      case 'all':
        setDataLists([]);
        break;
      case 'water_refill_stations':
        response = await getWaterRefillStations(50, 0);
        setDataLists(response.member);
        break;
      case 'shower_stations':
        response = await getShowerStations(50, 0);
        setDataLists(response.member);
      default:
        setDataLists([]);
    }
  }

  const handleModeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setShowMode(event.target.value as ShowMode);
  };

  return (
    <div>
      <div className="flex my-3">
        <select
          className="bg-gray-100 p-3"
          value={showMode}
          onChange={handleModeChange}
        >
          <option value="mapShow">地圖顯示</option>
          <option value="listShow">列表顯示</option>
        </select>
        {showMode === "listShow" && (
          <div className="ml-4 flex overflow-y-scroll [scrollbar-width:none]">
            {CATEGORIES.map((category) => (
              <Button
                className="ml-2 border-gray-100"
                key={category.key}
                onClick={() => handleCategoryClick(category.key)}
                active={selectedCategory === category.key}
              >
                {category.name}
              </Button>
            ))}
          </div>
        )}
      </div>
      <div>
        {showMode === "mapShow" && (
          <iframe
            src={MAP_URL}
            title="地圖顯示"
            width="100%"
            height={MAP_HEIGHT}
          />
        )}
        {showMode === "listShow" && (
          <div>
            {dataLists.map((data) => (
              <InfoCard
                key={data.id}
                category={getCategoryName(selectedCategory)}
                name={data.name}
                phone={data.phone}
                mapUrl={data.mapUrl}
                contact={data.contact}
                fullData={data}
              />
            ))}
          </div>
        )}
      </div>
      <br />
    </div>
  );
}
