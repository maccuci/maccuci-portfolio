import { useState } from "react";

import { BsMoonStarsFill } from "react-icons/bs";
import { FaDiscord, FaTwitter, FaInstagram } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

function Index() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <nav className="ml-24 py-4 flex justify-between" >
          <ul className="flex items-center">
            <li><BsMoonStarsFill onClick={() => setDarkMode(!darkMode)} className="cursor-pointer" /></li>
          </ul>
        </nav>

        <div className="container h-screen w-screen mx-auto flex items-center justify-center">
          <div className="flex flex-col bg-slate-100 dark:bg-gray-800 shadow-lg
                       shadow-slate-700 py-4 px-6 mx-4 mb-4 rounded-md">
            <div className=
              "flex flex-row items-center">
              <img className="w-24 rounded-full"
                src="https://www.github.com/maccuci.png" alt="Avatar" />
              <div className="ml-4">
                <h3 className="font-semibold dark:text-slate-100 text-2xl">Antônio Gabriel</h3>
                <h4 className="text-sky-500 dark:text-sky-400 pt-1">Developer and IoT Enthusiast</h4>
              </div>
            </div>
            <div className="mt-6" /*About me*/>
              <h2 className="font-semibold dark:text-slate-100 text-2xl mb-2">Sobre Mim</h2>
              <p className="text-gray-800 dark:text-slate-100 font-light mt-1 max-w-lg text-justify">
                Me chamo Antônio Gabriel e atualmente estou cursando Análise e Desenvolvimento de Sistemas, mas comecei no mundo da programação com os meus 12 anos lá em meados de 2014/2015.
                A partir de 2016, fui aprimorando os meus conhecimentos que eram apenas focado em Java na API Bukkit, para JavaScript, TypeScript, PHP e Ruby.
                Porém criei entusiasmo pelo JS/TS e desenvolvimento web, hoje utilizo Java, JS/TS e React para desenvolver sites e/ou aplicações.
              </p>
            </div>

            <div className="mt-6"  /*Career*/>
              <h2 className="font-semibold dark:text-slate-100 text-2xl mb-2">Carreira</h2>

              <div className="mt-4">
                <h3 className="text-sky-500 dark:text-sky-400 font-medium text-xl mt-1">OursEyes</h3>
                <ul className="list-disc list-inside pl-4">
                  <li className="list-item dark:text-slate-100">CTO</li>
                  <li className="list-item dark:text-slate-100">Blockchain Researcher</li>
                </ul>
              </div>

              <div className="mt-4">
                <h3 className="text-sky-500 dark:text-sky-400 font-medium text-xl mt-1">TVM Consultoria</h3>
                <ul className="list-disc list-inside pl-4">
                  <li className="list-item dark:text-slate-100">Java & NodeJS Developer</li>
                </ul>
              </div>
            </div>

            <div className="mt-6" /*Contact*/>
              <h2 className="font-semibold dark:text-slate-100 text-2xl mb-2">Contato</h2>
              <div className="mx-3 dark:text-slate-100">
                <p>{<HiOutlineMail />}Email: tony@maccuci.studio</p>
                <p>{<FaTwitter />}Twitter: @maccuci</p>
                <p>{<FaDiscord />}Discord: Maccuci#3939</p>
                <p>{<FaInstagram />}Instagram: @tony.glpo</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index;
