import { useContext } from "react";
import { StyledInputLabel } from ".";
import { EmailContext } from "../hooks/EmailContext";

const StyledDropdown = ({ listData, label, isRequired, target }: any) => {
  const { myStates, setMyStates } = useContext(EmailContext);

  const onHandleChange = (event: any) => {
    setMyStates((pre) => ({ ...pre, [event.target.name]: event.target.value }));
  };

  return (
    <>
      <StyledInputLabel label={label} isRequired={isRequired} />
      <select
        id={target}
        value={myStates[target] as string}
        onChange={onHandleChange}
        name={target}
        className="w-full my-2 px-4 py-2 border rounded-md bg-white text-gray-800 focus:outline-none focus:border-blue-500"
      >
        {listData.map((opt: any) => (
          <option key={opt.id} value={opt.name}>
            {opt.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default StyledDropdown;
