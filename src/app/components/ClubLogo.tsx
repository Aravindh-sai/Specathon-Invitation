import Image from 'next/image';

const ClubLogo = () => {
  return (
    <div className="relative w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 2xl:w-56 h-auto">
      <Image
        src="/images/clublogo.png"
        alt="Club Logo"
        width={500} // large enough size
        height={500}
        className="object-contain drop-shadow-[0_0_8px_#3b82f6]"
        priority
      />
    </div>
  );
};

export default ClubLogo;
