import Image from "next/image";
import imgTemp from '@/public/assets/birthday.webp'

interface SingleFeatureProps {
  title: string;
  description: string;
  active: boolean;
  onClick?: () => void;
}

const SingleFeature = ({
  title,
  description,
  active,
  onClick,
}: SingleFeatureProps) => {
  return (
    <>
      <div className="flex flex-col flex-[0.4]">
        <div
          onClick={onClick}
          className={`${
            active
              ? "border border-gray-300 rounded-tl-2xl bg-gray-500/20 text-white py-7 gap-y-3 rounded-bl-2xl flex flex-col px-5 cursor-pointer"
              : "text-white py-7 gap-y-3 rounded-bl-2xl flex flex-col px-5 cursor-pointer"
          }`}
        >
          <h1 className="font-semibold text-xl">{title}</h1>
          <span>{description}</span>
        </div>
      </div>
      <div className="flex-[0.6]">
        <Image
          className="w-[95%] h-[70%]"
          src={imgTemp}
          width={600}
          height={500}
          alt="Feature Image"
        />
      </div>
    </>
  );
};

export default SingleFeature;
