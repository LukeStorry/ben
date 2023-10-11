import Script from "next/script";

export default function Home() {
  return (
    <main className="bg-purple-700 h-screen">
      <h1 className="text-5xl font-bold text-center text-white p-8">
        Ben Storry
      </h1>

      <h1 className="text-3xl text-center text-white p-8">
        Teacher and Surf Instructor
      </h1>

      <Script src="https://apps.elfsight.com/p/platform.js" />

      <div className="elfsight-app-5ba5ff06-d600-402e-ada0-d8bfe77b47ba text-purple-700"></div>
    </main>
  );
}
