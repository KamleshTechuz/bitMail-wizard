import { useContext } from "react";
import { StyledInputLabel } from ".";
import { EmailContext } from "../hooks/EmailContext";
import { styledInput } from "../lib/interface";

const StyledInput = ({ label, placeholder, isRequired, target }: styledInput) => {
  const { myStates, setMyStates } = useContext(EmailContext);

  const onHandleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMyStates(pre => ({ ...pre, [event.target.name]: event.target.value }));
  };

  return (
    <>
      <StyledInputLabel label={label} isRequired={isRequired} />
      <input
        value={myStates[target] as string}
        onChange={onHandleChange}
        type="text"
        id={target}
        name={target}
        placeholder={placeholder}
        className="styled_input"
      />
    </>
  );
};

export default StyledInput;
