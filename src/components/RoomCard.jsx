import Image from "next/image";

export default function RoomCard({ room, imageIndex = 1, totalImages = 1 }) {
  return (
    <div className="bg-[#FDFFFC] border border-[#E5E7E4] rounded-[12px] overflow-hidden flex flex-col h-full">
      {/* Image Section */}
      <div className="relative h-64 md:h-72">
        <Image
          src={room.image}
          alt={room.title}
          fill
          className="object-cover"
        />
        {/* Image counter badge */}
        {totalImages > 1 && (
          <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
            {imageIndex}/{totalImages}
          </div>
        )}
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-1 flex-col">
        <div className="flex-1">
          {/* Title */}
          <h3 className="subH2 mb-3">{room.title}</h3>

          {/* Description */}
          <p className="body2 text-darkGrey mb-4">{room.description}</p>

          {/* Features */}
          <div className="flex flex-wrap gap-2 mb-4 ">
            {room.features.map((feature, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1 px-3 py-1 bg-[#FDFFFC] border border-gray-200 rounded-full body3 text-darkGrey"
              >
                <span className="w-4 h-4 flex items-center justify-center">
                  {typeof feature.icon === "string" ? (
                    feature.icon
                  ) : (
                    <Image
                      src={feature.icon}
                      alt=""
                      width={16}
                      height={16}
                      className="w-4 h-4"
                    />
                  )}
                </span>
                {feature.text}
              </span>
            ))}
            {room.additionalFeatures && room.additionalFeatures > 0 && (
              <span className="inline-flex items-center gap-1 px-3 py-1 bg-[#FDFFFC] border border-gray-200 rounded-full body3 text-darkGrey">
                +{room.additionalFeatures} more
              </span>
            )}
          </div>
        </div>

        {/* Book Now Button */}
        <button className="w-full bg-[#5AB012] hover:bg-[#4A950F] text-white font-bold py-3 px-6 rounded-xl transition-colors duration-200">
          Book Now
        </button>
      </div>
    </div>
  );
}
