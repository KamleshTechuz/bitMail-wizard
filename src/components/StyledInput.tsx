import { useContext } from "react";
import { StyledInputLabel } from ".";
import { EmailContext } from "../hooks/EmailContext";

const StyledInput = ({ label, placeholder, isRequired, target }: any) => {
  const { myStates, setMyStates } = useContext(EmailContext);

  const onHandleChange = (event: any) => {
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
        className="w-full my-2 px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500"
      />
    </>
  );
};

export default StyledInput;
