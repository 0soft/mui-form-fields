import React from "react";
import { Button } from "@material-ui/core";

export default function ToggleButton({
  text,
  color,
  variant,
  render=function(){},
}) {
  const [active, setActive] = React.useState(false);

  return (
    <div style={{display: "flex", alignItems: "center", justifyContent: "center"}}>
      <Button onClick={() => setActive(!active)} variant={variant} color={color}>
        { text }
      </Button>
      { render(active, setActive) }
    </div>
  );
}
