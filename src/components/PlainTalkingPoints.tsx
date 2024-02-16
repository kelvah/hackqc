import React from "react";
import Loading from "./Loading.tsx";

interface PlainTalkingPointsProps {
  talkingPoints: string;
  loading: boolean;
}
const PlainTalkingPoints: React.FC<PlainTalkingPointsProps> = (props) => {
  const { talkingPoints, loading } = props;
  return (
    <section style={{ minHeight: "20em" }}>
      {loading ? <Loading height={"20em"} /> : <span>{talkingPoints}</span>}
    </section>
  );
};

export default PlainTalkingPoints;
