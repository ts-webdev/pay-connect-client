import React from "react";

const Faq = () => {
  return (
    <div className="bg-linear-to-br from-[#081c15] to-black">
      <div className="py-28 container w-9/12 mx-auto">
        <div className="flex justify-center ">
          <h2 className="text-2xl  py-2 px-6 rounded-full bg-[#245501] text-white">
            FAQ
          </h2>
        </div>
        <p className="text-center mt-5 text-lg">
          Got Questions? We’ve Got Answers.
        </p>
        <div className="mt-10">
          <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
            <li>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <p className="font-mono italic">01</p>
                <div className="text-lg font-bold text-gray-500 mb-1">
                  What is the main purpose of this website?
                </div>
                This system helps users view, manage, and pay their monthly
                utility bills such as Electricity, Gas, Water, and Internet —
                all in one place, quickly and securely.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10">
                <p className="font-mono italic">02</p>
                <div className="text-lg font-bold text-gray-500 mb-1">
                  Can I pay previous month’s bills?
                </div>
                No, you can only pay the current month’s bills. The “Pay” button
                will be disabled for previous months.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <p className="font-mono italic">03</p>
                <div className="text-lg font-bold text-gray-500 mb-1">
                  Where is my payment information stored after I pay a bill?
                </div>
                Once your payment is successful, it will appear in your “My Pay
                Bills” page, where you can view, update, or delete your paid
                bills anytime.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end md:mb-10">
                <p className="font-mono italic">04</p>
                <div className="text-lg font-bold text-gray-500 mb-1">
                  Can I download my bill payment report?
                </div>
                Yes, you can browse all bills on the Bills page. However, to
                view details or make payments, you must log in first.
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-start mb-10 md:text-end">
                <p className="font-mono italic">05</p>
                <div className="text-lg font-bold text-gray-500 mb-1">
                  Can I view bills without logging in?
                </div>
                Yes, you can browse all bills on the Bills page. However, to
                view details or make payments, you must log in first.
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Faq;
