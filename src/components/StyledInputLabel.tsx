import { styledInputLabel } from "../lib/interface";

const StyledInputLabel = ({ label, isRequired }: styledInputLabel) => {
  return (
    <>
      <label htmlFor="input" className="styled_label">
        {label}
        {isRequired && <span className="text-[#0dceda] ml-1">*</span>}
      </label>
    </>
  );
};

export default StyledInputLabel;
