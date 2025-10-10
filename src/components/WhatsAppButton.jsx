import Image from "next/image";
import WappIcon from "@/assets/WappButton.svg";

export default function WhatsAppButton() {
  const whatsappNumber = "50683922295";
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 transition-all duration-300 hover:scale-110 hover:shadow-2xl"
      aria-label="Contact us on WhatsApp"
    >
      <Image
        src={WappIcon}
        alt="WhatsApp"
        width={64}
        height={64}
        className="drop-shadow-lg"
      />
    </a>
  );
}
