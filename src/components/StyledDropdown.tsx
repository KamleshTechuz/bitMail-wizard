import { useContext } from "react";
import { StyledInputLabel } from ".";
import { EmailContext } from "../hooks/EmailContext";
import { listData, styledDropdown } from "../lib/interface";

const StyledDropdown = ({ listData, label, isRequired, target }: styledDropdown) => {
  const { myStates, setMyStates } = useContext(EmailContext);

  const onHandleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
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
        className="styled_dropdown"
      >
        {listData.map((opt: listData) => (
          <option key={opt.id} value={opt.name}>
            {opt.name}
          </option>
        ))}
      </select>
    </>
  );
};

export default StyledDropdown;
