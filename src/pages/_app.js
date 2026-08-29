import Navbar from "@/components/Navbar";
import ThemeProvider from "../components/ThemeProvider";
import "../styles/globals.css";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Journey from "@/components/Journey";
import Achievements from "@/components/Achievements";
import Competitions from "@/components/Competitions";
import Education from "@/components/Education";
import AIDemos from "@/components/AIDemos";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function FloatingHireMe() {
  return (
    <a
      href="#contact"
      className="fixed bottom-6 right-6 z-40 px-4 md:px-5 py-2.5 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white text-xs md:text-sm font-semibold shadow-xl shadow-blue-900/40 hover:from-blue-500 hover:to-purple-500 hover:-translate-y-0.5 transition-all"
    >
      Hire Me
    </a>
  );
}

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Navbar />
      <FloatingHireMe />
      <Hero />
      <About />
      <Skills />
      <AIDemos />
      <Projects />
      <Journey />
      <Achievements />
      <Competitions />
      <Education />
      <Contact />
      <Footer />
      {/* If you later use page-level components, you can still render Component below */}
      {/* <Component {...pageProps} /> */}
    </ThemeProvider>
  );
}
