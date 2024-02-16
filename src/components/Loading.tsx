import React from "react";
import { LoadingDots } from "@workday/canvas-kit-react";
import { Flex } from "@workday/canvas-kit-react/layout";

interface LoadingProps {
  height?: string;
}
const Loading: React.FC<LoadingProps> = (props) => {
  const { height = "20em" } = props;
  return (
    <Flex alignItems={"center"} justifyContent={"center"} style={{ height }}>
      <LoadingDots />
    </Flex>
  );
};

export default Loading;
