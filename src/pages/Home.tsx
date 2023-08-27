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
    <main className="home_main_container">
      <div className="home_main_subdiv">
        <div className="w-full">
          <div className="email_subject_container">
            <h2 className="email_subject">
              {replaceEnter(activeSubject, '\n', ' ')}
            </h2>
            { isGenerated && <div className='copy_btn' onClick={() => handleCopy(emailContent)}>
              <img
                src={copied ? tickImg : copyImg}
                alt={copied ? "tick_icon" : "copy_icon"}
                className='copy_btn_img'
              />
            </div> }
          </div>
            <div className="home_divider"></div>  
        </div>
        <div className="email_content">
          {isGenerated ? emailContent : emailContentDummy}
        </div>
      </div>
    </main>
  );
};

export default Home;
