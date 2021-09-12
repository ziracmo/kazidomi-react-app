const Footer = () => {
  return (
    <footer className="footer bg-green-50 relative pt-1 ">
      <div className="container mx-auto px-6">
        <div className="sm:flex sm:mt-8">
          <div className="mt-8 sm:mt-0 sm:w-full sm:px-8 flex flex-col md:flex-row justify-between">
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mb-2">
                About
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  Gift cards
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  Our brands
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  Our commitments
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Help ?
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700 text-md hover:text-green-500"
                >
                  Delivery
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  CGU
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700 text-md hover:text-green-500"
                >
                  Confidentiality
                </a>
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-gray-700 uppercase mt-4 md:mt-0 mb-2">
                Contact us
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  Contact our support
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  Phone and email
                </a>
              </span>
              <span className="my-2">
                <a
                  href="#"
                  className="text-green-700  text-md hover:text-green-500"
                >
                  Postal Address
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto px-6">
        <div className="mt-16 border-t-2 border-gray-300 flex flex-col items-center">
          <div className="sm:w-2/3 text-center py-6">
            <p className="text-sm text-green-700 font-bold mb-2">
              © 2021 by Alexandre ROUSSANGE
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
