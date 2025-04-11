import { Button } from "@mui/material";
import React, { useState } from "react";

function CopyLinkButton({ url }) {
  const [copied, setCopied] = useState(false);

  const copyLinkToClipboard = async () => {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 5000);
  };

  return (
    <Button onClick={copyLinkToClipboard}>
      {copied ? "Copied to clipboard!" : "Copy Link"}
    </Button>
  );
}

export default CopyLinkButton;
