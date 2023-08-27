import { useContext } from "react";
import { StyledInputLabel } from ".";
import { EmailContext } from "../hooks/EmailContext";
import { styledTextArea } from "../lib/interface";

const StyledTextArea = ({ label, placeholder, isRequired, target, rows, maxLength }: styledTextArea) => {
  const { myStates, setMyStates } = useContext(EmailContext);

  const onHandleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setMyStates((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };

  return (
    <>
      <StyledInputLabel label={label} isRequired={isRequired} />
      <textarea
          maxLength={ maxLength ? 70 : 100 }
        rows={rows}
        value={myStates[target] as string}
        onChange={onHandleChange}
        id={target}
        name={target}
        placeholder={placeholder}
        className="styled_textarea"
      ></textarea>
    </>
  );
};

export default StyledTextArea;
