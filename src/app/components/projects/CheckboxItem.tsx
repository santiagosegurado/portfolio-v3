interface CheckboxItemProps {
  checked: boolean;
  handleCheckboxChange: () => void;
  title: string;
}

const CheckboxItem = ({
  checked,
  handleCheckboxChange,
  title,
}: CheckboxItemProps) => {
  return (
    <div className="flex items-center p-2 pl-10">
      <label className="relative flex items-center gap-2 cursor-pointer">
        <input
          type="checkbox"
          checked={checked}
          onChange={handleCheckboxChange}
          className="sr-only"
        />
        <div
          className={`w-4 h-4 flex justify-center items-center rounded-sm ${
            checked
              ? "bg-secondaryGray"
              : "bg-transparent border-2 border-secondaryGray"
          }`}
        >
          {checked && (
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13l4 4L19 7"
              ></path>
            </svg>
          )}
        </div>
        <span className="text-secondaryGray">{title}</span>
      </label>
    </div>
  );
};

export default CheckboxItem;
