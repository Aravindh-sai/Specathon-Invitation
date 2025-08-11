import Image from 'next/image';

const CollegeLogo = () => {
  return (
    <div className="w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56">
      <Image
        src="/images/collegelogo.png"
        alt="College Logo"
        width={500} // large enough size
        height={500}
        className="w-full h-auto object-contain drop-shadow-[0_0_12px_#3b82f6]"
        priority
      />
    </div>
  );
};

export default CollegeLogo;
