import React from "react";

interface TopNameProps {
  name: string;
}

const TopName = (name: TopNameProps) => {
  return (
    <div className="TopName">
      <a href="/">
        <div>{name.name}</div>
      </a>
    </div>
  );
};

export default TopName;
