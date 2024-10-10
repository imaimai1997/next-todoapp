import React from "react";

interface PrimaryButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
}

const PrimaryButton = (props: PrimaryButtonProps) => {
  const { children, onClick } = props;
  return (
    <button
      onClick={onClick}
      className="bg-white border-2 mx-1 px-1 rounded cursor-pointer"
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
