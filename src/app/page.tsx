"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Button from "./components/ui/Button";
import Link from "next/link";
import GitHubIcon from "./components/icons/GitHubIcon";
import { Canvas } from "@react-three/fiber";
import { Bounds, Cloud, Clouds, PerspectiveCamera } from "@react-three/drei";
import { Tamagochi } from "./components/3d-models/Tamagochi";
import { MeshLambertMaterial } from "three";

export default function Home() {
  const [isCopy, setIsCopy] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const customStyle = {
    background: "none",
    padding: "0",
  };

  const interpolateFunc = (t: number) => 1 - Math.exp(-5 * t) + 0.007 * t;

  const code = `
  // You can copy my email by pressing the button on the side 
  const email = 'santiagosegurado@icloud.com';
  `;

  const handleCopy = () => {
    navigator.clipboard.writeText("santiagosegurado@icloud.com");
    setIsCopy(true);
    setTimeout(() => {
      setIsCopy(false);
    }, 3000);
  };

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <main className="w-full flex items-center justify-center gap-10 relative">
      <div className="absolute bottom-64 left-56 w-52 h-52 bg-[#43d9ac37] blur-3xl"></div>
      <div className="absolute bottom-36 right-44 w-52 h-52 bg-[#4d5cce29] blur-3xl"></div>
      <section className="flex flex-col gap-10 max-w-full p-4 lg:p-0">
        <div className="flex flex-col gap-2">
          <span className="text-secondaryWhite text-lg">Hi all, I am</span>
          <span className="text-secondaryWhite text-6xl">
            Santiago Segurado
          </span>
          <span className="text-accentViolet text-xl lg:text-3xl">
            {" "}
            &gt; Software Developer
          </span>
        </div>
        <div>
          <div className="relative mt-4">
            <SyntaxHighlighter
              language="javascript"
              style={atomOneDark}
              customStyle={customStyle}
            >
              {code}
            </SyntaxHighlighter>
            <button
              onClick={handleCopy}
              className="text-accentViolet absolute -top-3 right-0"
            >
              {isCopy ? (
                <Image
                  src={"/checkline.svg"}
                  alt="check icon"
                  width={25}
                  height={25}
                />
              ) : (
                <span>Copy</span>
              )}
            </button>
          </div>
          <div className="flex flex-row gap-3 relative">
            <Button style="primary">
              <GitHubIcon className="w-5 h-5" />
              <Link
                href={"https://github.com/santiagosegurado"}
                target="_blank"
                rel="noopener noreferrer"
              >
                github
              </Link>
            </Button>
            <Button>
              <Image
                src={"/linkedin.svg"}
                alt="check icon"
                width={18}
                height={18}
                className="fill-secondaryWhite"
              />
              <Link
                href={"https://www.linkedin.com/in/santiago-segurado-frontend/"}
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin
              </Link>
            </Button>
            {/* 3d Object */}
            <section className="w-72 h-60 absolute right-0 hidden md:flex">
              {isLoading ? (
                <div className="flex items-center justify-center h-full">
                  <span className="text-secondaryWhite">Loading...</span>
                </div>
              ) : (
                <Canvas className="h-full w-full">
                  <Bounds
                    fit
                    clip
                    observe
                    margin={1.2}
                    maxDuration={1}
                    interpolateFunc={interpolateFunc}
                  >
                    <PerspectiveCamera makeDefault position={[0, 12, 50]} />
                    <ambientLight intensity={1} />
                    <directionalLight position={[10, 10, 5]} intensity={1} />
                    <pointLight position={[90, 10, 10]} />
                    <Tamagochi />
                    <Clouds material={MeshLambertMaterial}>
                      <Cloud
                        seed={1}
                        scale={2}
                        volume={5}
                        color="#607b96"
                        fade={100}
                      />
                    </Clouds>
                  </Bounds>
                </Canvas>
              )}
            </section>
          </div>
        </div>
      </section>
    </main>
  );
}
