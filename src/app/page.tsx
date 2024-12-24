import Image from "next/image";
import Deal from "./deal/page";
export default function Home() {
  return (
    <div>
   <div className="image-wrapper">
    <Image src={"/pizza.jpg"} alt={"resturant"} width={1400} height={100} className="image"/>
   <div className="image-text">
   <h1 className="focus-in-expand-fwd">Flavour fusion</h1>
   <h5 className="focus-in-expand-fwd">Pizza perfection,every time!</h5>
   
    </div>
    
   </div>
   <Deal/>
   </div>
  );
}