import AboutCoverSection from "@/components/About/AboutCoverSection";
import Skills from "@/components/About/Skills";
import Link from "next/link";


export const metadata = {
  title: "关于我",
  description: `这里有一些关于我自己的细节`,
};

export default function About() {
  return (
    <>
      <AboutCoverSection />
      <Skills />
      <h2 className="mt-8 text-lg md:text-2xl font-semibold self-start mx-5 xs:mx-10 sm:mx-12 md:mx-16 lg:mx-20 text-dark dark:text-light dark:font-normal">
  拥有项目构想？立即与我联系，携手启航共创未来旅程！
  {/* <Link href="/contact" className="!underline underline-offset-2">联系我</Link> */}
</h2>
    </>
  );
}
