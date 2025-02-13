import Link from "next/link";
import React from "react";
import { Footer } from "../components";
export default function Notfound() {
  return (
    <div>
      {" "}
      <main className="flex flex-col justify-center items-center h-screen bg-white">
        <div className="text-center">
          <h1 className="text-5xl font-extrabold mb-4">
            OOPS !! SOMETHING WENT WRONG
          </h1>
          <p className="text-lg font-medium mb-6">
            The page you&apos;re looking for doesn&apos;t exist.
          </p>
          <Link href="/">
            <p className="px-3 py-3 bg-blue-950 text-white font-bold rounded-lg shadow-md transition duration-300">
              Go Back Home
            </p>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
}
