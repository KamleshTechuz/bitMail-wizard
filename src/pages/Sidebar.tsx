import { useContext } from "react";
import { GenearteButton, StyledDropdown, StyledInput, StyledTextArea } from "../components";
import { EmailContext } from "../hooks/EmailContext";
import { vocLevel, vocType } from "../lib";
import { postData } from "../services";

const Sidebar = () => {

  const { myStates, setMyStates } = useContext(EmailContext);

  const onGenerate = async () => {
    setMyStates(pre => ({ ...pre, isLoading: true }));
    const res = await postData(myStates);
    setMyStates(pre => ({
      ...pre, emailContent: res.content,
      isGenerated: true, isLoading: false
    }));
  }

  return (
    <aside className="w-full lg:w-2/5 min-h-[570px] bg-white p-4 rounded-lg shadow-md">
      <div className="flex gap-4">
        <div className="w-1/3 my-2">
          <StyledInput label="Word Limit" placeholder="Ex. 100" isRequired={true} target="wordLimit" />
        </div>
        <div className="w-2/3 my-2">
          <StyledInput label="Working Area" placeholder="Ex. Office, School, University..." isRequired={true} target="workingArea" />
        </div>
      </div>
      <div className="w-full flex gap-4">
        <div className="w-full my-2">
          <StyledDropdown listData={vocLevel} label="Vocabulary Level" isRequired={true} target="vocabularyLevel" />
        </div>
        <div className="w-full my-2">
          <StyledDropdown listData={vocType} label="Vocabulary Type" isRequired={true} target="vocabularyType" />
        </div>
      </div>
      <div className="my-2">
        <StyledTextArea maxLength={true} rows={2} label="Subject" placeholder="Ex. Leave of 3 days..." isRequired={true} target="subject" />
      </div>
      <div className="my-2">
        <StyledTextArea maxLength={false} rows={4} label="Other Details" placeholder="Ex. I have my elder brother wedding..." isRequired={false} target="otherDetails" />
      </div>
      <GenearteButton onClick={onGenerate} />
    </aside>
  );
};

export default Sidebar;

// write an email in official way which fulfill the requirements mentioned below

// subject: Leaves of 3 days for brother's wedding

// details: i want to take 3 days leaves for my brothers wedding.

// word limit: 150

// my working area: office
