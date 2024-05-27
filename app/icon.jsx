import { ImageResponse } from "next/og";
export const runtime = "edge";
export const size = {
  height: 32,
  width: 32,
};
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 20,
          background: "black",
          width: "100%",
          height: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
        }}
      >
        MJ
      </div>
    ),
    { ...size }
  );
}
