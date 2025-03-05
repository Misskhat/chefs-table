import { CiStopwatch } from "react-icons/ci";
import { AiOutlineFire } from "react-icons/ai";

const Receipes = () => {
  return (
    <div className="grid grid-cols-2 gap-6">
      <div className="border-2 rounded-4xl border-amber-100 p-6">
        <img className="h-52" src="" alt="" />
        <h3 className="pt-6 text-2xl font-bold">Spaghetti Bolognese</h3>
        <p className="opacity-70 pt-4 pb-4">Classic Italian pasta dish with savory meat sauce.</p>
        <hr className="opacity-30" />
        <h4 className="pt-6 pb-4 text-xl font-bold">Ingredients: 6</h4>
        <ul className="opacity-70 list-disc list-inside space-y-3 pb-4">
          <li>500g ground beef</li>
          <li>1 onion, chopped</li>
          <li>2 cloves garlic, minced</li>
        </ul>
        <hr className="opacity-30" />
        <div className="pt-6 pb-4 flex items-center space-x-4">
          <div className="flex justify-center items-center space-x-2">
            <CiStopwatch />
            <p className="opacity-60">30 minutes</p>
          </div>
          <div className="flex justify-center items-center space-x-2">
            <AiOutlineFire />
            <p className="opacity-60">600 calories</p>
          </div>
        </div>
        <button className="bg-[#0BE58A] pl-6 pr-6 pt-3 pb-3 rounded-4xl">Want to Cook</button>
      </div>
    </div>
  );
};

export default Receipes;
