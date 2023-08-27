import { useContext } from "react";
import { StyledInputLabel } from ".";
import { EmailContext } from "../hooks/EmailContext";

const StyledTextArea = ({ label, placeholder, isRequired, target, rows, maxLength }: any) => {
  const { myStates, setMyStates } = useContext(EmailContext);

  const onHandleChange = (event: any) => {
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
        className="w-full my-2 px-4 py-2 resize-none border rounded-md focus:outline-none focus:border-[#0dceda]"
      ></textarea>
    </>
  );
};

export default StyledTextArea;
