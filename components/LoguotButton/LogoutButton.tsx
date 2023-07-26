import React from "react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "@mui/material";
import { signOut } from "next-auth/react";

function LogoutButton() {
  return (
    <Button onClick={() => signOut()} startIcon={<LogoutIcon />}>
      Signout
    </Button>
  );
}

export default LogoutButton;
