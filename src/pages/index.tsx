import { type NextPage } from "next";
import Image from "next/image"
import Head from "next/head";
import Profile from "~/components/profile/Profile";
import Skills from "~/components/skills/Skills";
import Timeline from "~/components/timeline/Timeline";
import ProfileContextProvider from "~/contexts/ProfileContext";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fachkarriere Tool</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/logo.png" />
      </Head>
      <ProfileContextProvider>
        <header className="mx-8 mt-4 mb-16 flex gap-4 justify-between">
          <Image src="/logo.png" alt="Logo" width="50" height="50"></Image>
          <h1 className="text-3xl">Marc Aumüller</h1>
        </header>
        <main className="mx-8 grid grid-cols-3">
          <div className="col-span-2">
            <Timeline />
          </div>
          <div className="col-span-1">
            <Profile />
          </div>
        </main>
        <footer className="absolute bottom-0 mx-8 my-4">
            <Skills />
        </footer>
      </ProfileContextProvider>
    </>
  );
};

export default Home;
