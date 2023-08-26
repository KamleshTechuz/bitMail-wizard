import { useContext, useEffect, useState } from "react";
import { EmailContext } from "../hooks/EmailContext";
import { emailContentDummy } from "../lib";
import { copyImg, tickImg } from "../assets";
import { replaceEnter } from "../services";

const Home = () => {
  const {
    myStates: { isGenerated, subject, emailContent },
  } = useContext(EmailContext);

  const [activeSubject, setActiveSubject] = useState("BitMail-Wizard");
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    setActiveSubject(subject || "BitMail-Wizard");
  }, [subject, emailContent]);


  const handleCopy = (copyContent: string) => {
    setCopied(true);
    navigator.clipboard.writeText(copyContent);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <main className="w-full lg:w-3/4 min-h-[570px] bg-white p-4 lg:ml-4 my-4 lg:my-0 rounded-lg shadow-md">
      <div className="px-6 py-5 whitespace-pre-line text-gray-400 h-full">
        <div className="w-full">
          <div className="flex items-center">
            <h2 className="text-2xl font-semibold text-[#0dceda]">
              {replaceEnter(activeSubject, '\n', ' ')}
            </h2>
            { isGenerated && <div className='copy_btn' onClick={() => handleCopy(emailContent)}>
              <img
                src={copied ? tickImg : copyImg}
                alt={copied ? "tick_icon" : "copy_icon"}
                className='h-[80%] w-[80%] object-contain'
              />
            </div> }
          </div>
            <div className="mt-2 border-t border-gray-300"></div>  
        </div>
        <div className="mt-[20px] h-[calc(100%-60px)] overflow-y-auto scrollable">
          {isGenerated ? emailContent : emailContentDummy}
        </div>
      </div>
    </main>
  );
};

export default Home;
