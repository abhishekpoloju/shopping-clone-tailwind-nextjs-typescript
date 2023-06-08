import React from "react";
import MenuItem from "@mui/material/MenuItem";
export const MenuComponent = () => {
  return (
    <div className="absolute top-9 z-50 hidden bg-white group-hover:flex group-hover:flex-col ">
      <MenuItem>
        Indian
      </MenuItem>
      <MenuItem>
        Western  
      </MenuItem>
      <MenuItem>
        Japanese
      </MenuItem>
      <MenuItem>
        GymWear
      </MenuItem>
      <MenuItem>
        FootWear       
      </MenuItem>
    </div>
  );
};
