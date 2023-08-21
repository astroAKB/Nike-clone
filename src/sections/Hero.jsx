import Button from "../components/Button";
import {arrowRight} from "../assets/icons"
import { statistics } from "../constants"

const Hero = () => {
  return (
    <section
      id="main"
      className="w-full flex flex-col xl:flex-row justify-center min-h-screen
    gap-10 max-container border-2 "
    >
      <div className="relative xl:w-2/5 flex flex-col justify-center items-start w-full max-xl:padding-x pt-28">
        <p>Our Summer Collection</p>
        <h1><span>The New Arrival</span>
        <br />
        <span>Nike Shoes</span>
        </h1>
        <p>Discover stylish Nike arrivals, quality comfort, and innovation for you active life.</p>
        <Button label="Shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16">
          {statistics.map((stat,index) => (
            <div>
              <p>{stat.value}</p>
              <p>{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
