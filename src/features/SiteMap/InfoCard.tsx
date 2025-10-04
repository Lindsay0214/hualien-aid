import Button from "@/components/Button";
import ActionButton from "@/components/ActionButton";

interface InfoCardProps {
  category: string;
  name: string;
  address: string;
  phone: string;
  is_free: boolean;
  mapUrl?: string;
  contact?: string;
  fullData?: DataType;
}

const InfoCard: React.FC<InfoCardProps> = ({
  category,
  is_free,
  name,
  address,
  mapUrl,
  contact,
  fullData
}) => {
  return (
    <div className="my-4">
      <div>
        <span className="text-xs p-1 mr-2 bg-gray-200 rounded-lg">{category}</span>
        {is_free ? (<div>eee</div>) : (<span className="text-xs p-1 bg-green-100 text-green-600 rounded-lg">免費</span>)}
      </div>
      <div className="text-lg">{name}</div>
      {address}
      <div>
        <div className="flex gap-2">
          {(
            <div>
              <ActionButton href={mapUrl}>導航</ActionButton>
            </div>
          )}
          {fullData && (
            <div>
              <ActionButton
                variant="secondary"
                icon="/info.svg"
                onClick={() => setShowModal(true)}
              >
                查看資訊
              </ActionButton>
            </div>
          )}
          {(
            <div>
              <ActionButton
                variant="secondary"
                icon="/call.svg"
                href={`tel:${contact}`}
              >
                立即聯絡
              </ActionButton>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default InfoCard;