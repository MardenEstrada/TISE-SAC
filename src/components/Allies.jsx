export default function Allies() {
  return (
    <div className="bg-gradient-to-r from-black to-gray-900 py-28 sm:py-36">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Título con mayor tamaño y animación */}
        <h2 className="text-center text-xl font-semibold text-yellow-400 animate-fade-up">
          Nuestros aliados estratégicos
        </h2>
        <p className="mt-5 text-center text-lg text-gray-300 max-w-2xl mx-auto animate-fade-up">
          Colaboramos con empresas líderes en tecnología para ofrecer soluciones innovadoras y de alto impacto.
        </p>

        <div className="relative overflow-hidden mt-14">
          <div className="mx-auto grid max-w-lg grid-cols-4 items-center gap-x-10 gap-y-12 sm:max-w-xl sm:grid-cols-6 sm:gap-x-12 lg:mx-0 lg:max-w-none lg:grid-cols-5 animate-marquee">
            
            <img
              alt="Google"
              src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg"
              width={180}
              height={56}
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1 transition-transform duration-500 hover:scale-105 hover:brightness-125"
            />
            <img
              alt="AWS"
              src="https://upload.wikimedia.org/wikipedia/commons/9/93/Amazon_Web_Services_Logo.svg"
              width={180}
              height={56}
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1 transition-transform duration-500 hover:scale-105 hover:brightness-125"
            />
            <img
              alt="Microsoft"
              src="https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg"
              width={180}
              height={56}
              className="col-span-2 max-h-16 w-full object-contain lg:col-span-1 transition-transform duration-500 hover:scale-105 hover:brightness-125"
            />
            <img
              alt="IBM"
              src="https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg"
              width={180}
              height={56}
              className="col-span-2 max-h-16 w-full object-contain sm:col-start-2 lg:col-span-1 transition-transform duration-500 hover:scale-105 hover:brightness-125"
            />
            <img
              alt="Oracle"
              src="https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg"
              width={180}
              height={56}
              className="col-span-2 col-start-2 max-h-16 w-full object-contain sm:col-start-auto lg:col-span-1 transition-transform duration-500 hover:scale-105 hover:brightness-125"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
