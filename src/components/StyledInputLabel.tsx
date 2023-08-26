interface styledInputLabel {
  label: string;
  isRequired: boolean;
}

const StyledInputLabel = ({ label, isRequired }: styledInputLabel) => {
  return (
    <>
      <label htmlFor="input" className="block font-bold text-gray-700 px-1">
        {label}
        {isRequired && <span className="text-[#0dceda] ml-1">*</span>}
      </label>
    </>
  );
};

export default StyledInputLabel;
