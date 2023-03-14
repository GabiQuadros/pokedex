import { Button } from "@mui/material";
import React from "react";
import SendIcon from "@mui/icons-material/Send";

interface ButtonGitProps {
  link: string;
  name: string;
}

const ButtonGit: React.FC<ButtonGitProps> = ({ link, name }) => {
  return (
    <React.Fragment>
      <Button
        variant="outlined"
        sx={{
          color: "black",
          "&:hover": {
            color: "white",
            backgroundColor: "background.paper",
            borderColor: "background.paper",
          },
          borderColor: "black",
        }}
        endIcon={<SendIcon />}
        href={link}
        target="_blank"
      >
        {name}
      </Button>
    </React.Fragment>
  );
};

export default ButtonGit;
