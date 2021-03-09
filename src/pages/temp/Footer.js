import Social from "../Contact/Social";
import Contact from '../Contact/Contact';

export default function Footer() {
  return (
    <div className={`flex md:flex-row flex-col justify-between h-40 border border-solid border-primary mb-2`}>
      <Contact />
      <div style={{ border: "1px solid black" }}></div>
      <Social />
    </div>
  )
}
