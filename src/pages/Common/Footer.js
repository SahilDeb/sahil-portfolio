import Social from "../Contact/Social";
import Contact from '../Contact/Contact';

export default function Footer() {
  return (
    <div className={`flex md:flex-row flex-col justify-between h-40 mb-2`}>
      <Contact />
      <div className={`bg-primary w-1`}></div>
      <Social />
    </div>
  )
}
