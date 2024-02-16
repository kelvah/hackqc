import React from "react";
import Loading from "./Loading.tsx";
import { BodyText } from "@workday/canvas-kit-react";

interface PlainTalkingPointsProps {
  talkingPoints: string;
  loading: boolean;
}
const PlainTalkingPoints: React.FC<PlainTalkingPointsProps> = (props) => {
  const { talkingPoints, loading } = props;
  return (
    <section style={{ minHeight: "20em" }}>
      {loading ? (
        <Loading height={"20em"} />
      ) : (
        <BodyText size="medium" style={{ whiteSpace: "pre-wrap" }}>
          {talkingPoints}
        </BodyText>
      )}
    </section>
  );
};

export default PlainTalkingPoints;
