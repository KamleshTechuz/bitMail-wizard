import { useContext } from "react";
import { EmailContext } from "../hooks/EmailContext";
import { checkValidation } from "../services";

const GenearteButton = ({ onClick }: any) => {

  const { myStates } = useContext(EmailContext);

  const currentClasses = myStates.isGenerated
    ? "text-[#0dceda] border border-[#0dceda] outline-none focus:ring-0 hover:text-[#0aa0aa] hover:border-[#0aa0aa]"
    : "bg-[#0dceda] text-white shadow-md hover:bg-[#0aa0aa] ";
  return (
    <button
      className={
        "w-full h-[41px] py-2 rounded-md " +
        currentClasses +
        " transform transition-transform hover:scale-95"
      }
      onClick={!checkValidation(myStates) ? onClick : undefined}
    >
      <span className="flex justify-center items-center">
        {/* <img src={stars} className="mr-2" /> */}
        {!myStates.isGenerated ? "Generate" : "Regenerate"}
      </span>
    </button>
  );
};

export default GenearteButton;
