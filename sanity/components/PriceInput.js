import React from "react";
import PatchEvent, { set, unset } from "part:@sanity/form-builder/patch-event";

function createPatchFrom(value) {
  return PatchEvent.from(value === "" ? unset() : set(Number(value)));
}

const formatMoney = Intl.NumberFormat("en-CA", {
  style: "currency",
  currency: "CAD",
}).format;

export default function PriceInput({ type, value, onChange, inputComponent }) {
  return (
    <div>
      <div style={{ marginBottom: "8px" }}>
        <h2
          style={{
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            margin: "0",
            fontSize: "0.8125rem",
            lineHeight: "1.23077",
            fontWeight: "600",
            color: "#262f3d",
          }}
        >
          {type.title} (Current: {value ? formatMoney(value / 100) : "0"})
        </h2>
        <p
          style={{
            fontFamily:
              "system-ui, -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Droid Sans, Helvetica Neue, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif",
            margin: "0",
            fontSize: "13px",
            fontWeight: "400",
            color: "#66758d",
          }}
        >
          {type.description}
        </p>
      </div>
      <input
        style={{
          appearance: "none",
          border: "1px solid #cad1dc",
          display: "block",
          width: "100%",
          outline: "none",
          font: "inherit",
          lineHeight: "1.25",
          WebkitBoxSizing: "border-box",
          boxSizing: "border-box",
          padding:
            "calc(0.75rem - 3px) calc(0.75rem - 1px) calc(0.75rem - 2px)",
          borderRadius: "2px",
          color: "#262f3d",
          backgroundColor: "#fff",
          WebkitBoxShadow: "none",
          boxShadow: "none",
        }}
        type={type.name}
        value={value}
        onChange={(event) => onChange(createPatchFrom(event.target.value))}
        ref={inputComponent}
      />
    </div>
  );
}

PriceInput.focus = function () {
  this._inputElement.focus();
};
