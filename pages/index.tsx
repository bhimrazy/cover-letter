import Head from "next/head";
import React, { useState } from "react";
const init_data = {
  domain: "",
  ns1: "",
  ns2: "",
  signature: "Signature",
  name: "",
  address: "",
};
export default function Home() {
  const [data, setData] = useState(init_data);
  const content = {
    title: "Cover Letter Generator",
    date:
      "Date : " +
      new Date().getDate() +
      " " +
      new Date().toLocaleString("en-US", { month: "short" }) +
      " " +
      new Date().getFullYear(),
  };

  return (
    <div className="flex flex-col min-h-screen bg-gray-200">
      <Head>
        <title>{content?.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="py-12 print:hidden">
        <h1 className="font-bold text-center text-6xl text-gray-800">
          {content?.title}
        </h1>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-3 justify-center w-full flex-1 px-20">
        <section className="px-20 py-10 space-y-6 flex flex-col print:hidden">
          <div>
            <label
              htmlFor="domain"
              className="block text-sm font-medium text-gray-700"
            >
              Domain Name
            </label>
            <input
              className="px-4 py-2 mt-1 border border-gray-300 focus:outline-none focus:ring-1  focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm rounded-md"
              value={data?.domain}
              type="text"
              id="domain"
              onChange={(event) => {
                setData({ ...data, domain: event.target.value.toLowerCase() });
              }}
              maxLength={50}
              placeholder="example.com.np"
            />
          </div>
          <div>
            <label
              htmlFor="ns1"
              className="block text-sm font-medium text-gray-700"
            >
              Primary Name Server
            </label>
            <input
              className="px-4 py-2 mt-1 border border-gray-300 focus:outline-none focus:ring-1  focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm rounded-md"
              value={data?.ns1}
              type="text"
              id="ns1"
              onChange={(event) => {
                setData({ ...data, ns1: event.target.value.toLowerCase() });
              }}
              maxLength={50}
              placeholder="ns1.example.com.np"
            />
          </div>
          <div>
            <label
              htmlFor="ns1"
              className="block text-sm font-medium text-gray-700"
            >
              Secondary Name Server
            </label>
            <input
              className="px-4 py-2 mt-1 border border-gray-300 focus:outline-none focus:ring-1  focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm rounded-md"
              value={data?.ns2}
              type="text"
              id="ns2"
              onChange={(event) => {
                setData({ ...data, ns2: event.target.value.toLowerCase() });
              }}
              maxLength={50}
              placeholder="ns2.example.com.np"
            />
          </div>
          <div>
            <label
              htmlFor="ns1"
              className="block text-sm font-medium text-gray-700"
            >
              Signature
            </label>
            <input
              className="px-4 py-2 mt-1 border border-gray-300 focus:outline-none focus:ring-1  focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm rounded-md"
              value={data?.signature}
              type="text"
              id="signature"
              onChange={(event) => {
                setData({ ...data, signature: event.target.value });
              }}
              maxLength={20}
              placeholder="Signature"
            />
          </div>
          <div>
            <label
              htmlFor="ns1"
              className="block text-sm font-medium text-gray-700"
            >
              Name
            </label>
            <input
              className="px-4 py-2 mt-1 border border-gray-300 focus:outline-none focus:ring-1  focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm rounded-md"
              value={data?.name}
              type="text"
              id="name"
              onChange={(event) => {
                setData({ ...data, name: event.target.value });
              }}
              maxLength={50}
              placeholder="Enter your Name"
            />
          </div>
          <div>
            <label
              htmlFor="ns1"
              className="block text-sm font-medium text-gray-700"
            >
              Address
            </label>
            <input
              className="px-4 py-2 mt-1 border border-gray-300 focus:outline-none focus:ring-1  focus:ring-indigo-500 focus:border-indigo-500 w-full shadow-sm sm:text-sm rounded-md"
              value={data?.address}
              type="text"
              id="address"
              onChange={(event) => {
                setData({ ...data, address: event.target.value });
              }}
              maxLength={50}
              placeholder="Enter Your address"
            />
          </div>
          <div className="flex flex-row justify-between">
            <button onClick={()=>{window.print();}} className="px-8 py-3 bg-white shadow-sm rounded-md hover:bg-gray-50 text-gray-900 font-bold border text-sm text-center">
              Print
            </button>
            <button
              className="px-8 py-3 bg-white shadow-sm rounded-md hover:bg-gray-50 text-gray-900 font-bold border text-sm text-center"
              onClick={() => setData(init_data)}
            >
              Clear
            </button>
          </div>
        </section>
        <section className="col-span-2 bg-gray-50 rounded-lg shadow-sm print:shadow-transparent">
          <div className="flex flex-col max-w-2xl mx-auto py-32 font-medium justify-center space-y-8">
            <div className="text-right">
              <span>{content?.date}</span>
            </div>
            <div>
              <p>
                To,
                <br />
                The Hostmaster,
                <br />
                Mercantile Communication Pvt. Ltd.
                <br />
                Durbar Marg, Kathmandu
                <br />
              </p>
            </div>
            <div className="text-center">Subject: NP Domain Registration</div>
            <div>
              Dear Sir/Madam,
              <br /> I am writing this letter to request you to kindly register
              a .np domain for me based on my name. I have provided my personal
              details, and also a scanned copy of my citizenship with this
              letter. Thank you for considering my application!
            </div>
            <div>
              <div>Domain name: {data?.domain} </div>
              <div>Primary Name Server :{data?.ns1} </div>
              <div>Secondary Name Server:{data?.ns2} </div>
            </div>
            <div>
              <div>Sincerely,</div>
              <div className="text-2xl items-center flex h-16 font-signature">
                {data?.signature}
              </div>
              Name: {data?.name}
              <br />
              Address:{data?.address}
            </div>
          </div>
        </section>
      </main>

      <footer className="flex flex-col space-y-2 items-center justify-center w-full h-24 border-t print:hidden">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
        <div className="items-center flex flex-shrink-0 justify-center">
          <span>Made with </span>
          <span className="text-pink-600 px-1">
            <svg
              className="w-6 h-6"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                clipRule="evenodd"
              ></path>
            </svg>
          </span>
          <span className="font-medium text-blue-600 hover:text-blue-700">
            By Bhimraj Yadav
          </span>
        </div>
      </footer>
    </div>
  );
}
