"use client";

import React from "react";
import { Stack, Typography } from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useRouter } from "next/navigation";

type Props = {
  title: string;
  backButton?: boolean;
  children?: React.ReactNode | React.ReactNode[];
};

function HeaderContent({ title, children, backButton = false }: Props) {
  const router = useRouter();

  return (
    <Stack
      direction={"row"}
      gap={1}
      marginBottom={"1em"}
      justifyContent={"space-between"}
    >
      <div className="header-content_title-area">
        {backButton && (
          <button className="btn-back" onClick={() => router.back()}>
            <ArrowBackIosIcon sx={{ fontSize: 16 }} />
          </button>
        )}
        <Typography variant="h5">{title}</Typography>
      </div>
      {children && <div className="header-content-controls">{children}</div>}
    </Stack>
  );
}

export default HeaderContent;
