import Head from "next/head";
import React, { useState } from "react";
const init_data = {
  domain: "",
  ns1: "",
  ns2: "",
  name: "",
  address: "",
};
export default function Home() {
  const [data, setData] = useState(init_data);
  const content = {
    title: "Cover Letter Generator",
    date: "Date : 15 jan 2022",
  };
  return (
    <div className="flex flex-col min-h-screen py-2">
      <Head>
        <title>{content?.title}</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <header className="py-6">
        <h1 className="font-bold text-center text-6xl">{content?.title}</h1>
      </header>
      <main className="grid grid-cols-1 sm:grid-cols-2 justify-center w-full flex-1 px-20">
        <section className="px-20 py-40 space-y-4">
          <input
            className="px-4 py-2 w-full border rounded-lg "
            value={data?.domain}
            type="text"
            onChange={(event) => {
              setData({ ...data, domain: event.target.value });
            }}
            placeholder="Enter your domain"
          />
          <input
            className="px-4 py-2 w-full border rounded-lg "
            value={data?.ns1}
            type="text"
            onChange={(event) => {
              setData({ ...data, ns1: event.target.value });
            }}
            placeholder="Enter your ns1"
          />
          <input
            className="px-4 py-2 w-full border rounded-lg "
            value={data?.ns2}
            type="text"
            onChange={(event) => {
              setData({ ...data, ns2: event.target.value });
            }}
            placeholder="Enter your ns2"
          />
          <input
            className="px-4 py-2 w-full border rounded-lg "
            value={data?.name}
            type="text"
            onChange={(event) => {
              setData({ ...data, name: event.target.value });
            }}
            placeholder="Enter your name"
          />
          <input
            className="px-4 py-2 w-full border rounded-lg "
            value={data?.address}
            type="text"
            onChange={(event) => {
              setData({ ...data, address: event.target.value });
            }}
            placeholder="Enter your address"
          />
        </section>
        <section className="flex flex-col max-w-xl mx-auto space-y-4">
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
            <br /> I am writing this letter to request you to kiindly register a
            .np domain for me based on my name. I have provided my personal
            details, and also a scanned copy of my citizenship with this letter.
            Thank you for considering my application!
          </div>
          <div>Domain name: {data?.domain} </div>
          <div>Primary Name Server :{data?.ns1} </div>
          <div>Secondary Name Server:{data?.ns2} </div>
          <div>
            Sincerely,
            <br />
            Name: {data?.name}
            <br />
            Address:{data?.address}
          </div>
        </section>
      </main>

      <footer className="flex items-center justify-center w-full h-24 border-t">
        <a
          className="flex items-center justify-center"
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className="h-4 ml-2" />
        </a>
      </footer>
    </div>
  );
}
