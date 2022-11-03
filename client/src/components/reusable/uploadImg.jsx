import React, { useState, useEffect } from "react";

import { stylesColor } from "./uploadingConfig";
import IconButton from '@mui/material/IconButton';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

//import { validate } from "../components/Newproduct/errors";

import Button from "@mui/material/Button";

export default function UploadImg({ setInput, input}) {
  const [myWidget, setmyWidget] = useState({});

  useEffect(() => {
    var myWidgetConect = window.cloudinary.createUploadWidget(
      {
        cloudName: "dvzgzgzln",
        uploadPreset: "mago8roq",
        languaje:"en",
        buttonClass: "bg-action",
        styles: stylesColor,
      },
      (error, result) => {
        if (!error && result && result.event === "success") {
          setInput({ ...input, image: result.info.url });
        }
      }
    );
    myWidgetConect.open();
    myWidgetConect.close();
    setmyWidget(myWidgetConect);// eslint-disable-next-line
  }, []);

  async function uploadImage() {
    await myWidget.open();
  }

  return (
    <div>
      <IconButton sx={{ position: 'absolute', top:'30px'}} aria-label="delete" size="large" onClick={() => uploadImage()}>
        <ModeEditIcon fontSize='large' />
      </IconButton>
    </div>
  );
}
