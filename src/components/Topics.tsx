import { BodyText, Checkbox, FormField, Text } from "@workday/canvas-kit-react";
import { useEffect, useState } from "react";
import { Flex } from "@workday/canvas-kit-react/layout";

const Topics = () => {
  const topics = [
    "Matteo is a high performer engineer that delivers tasks on time.",
    "Matteo received 2 recognitions from leadership this quarter for the impact of his work on the product.",
    "Matteo had his 5th work anniversary",
    "Matteo had a work conflict with his peer Jack. Jack reported difficulties to work with John due to his limited efforts on knowledge sharing and helping colleagues in need. I have observed this behaviour as well in past occasions.",
  ];
  const [selections, setSelections] = useState<Number[]>([]);

  useEffect(() => {
    console.log(selections.join(", "));
  }, [selections]);

  return (
    <>
      <Text as="p" typeLevel="body.medium" style={{ marginBottom: "2em" }}>
        Select all the topics that you want to use to generate the talking
        points
      </Text>
      {topics.map((topic, index) => (
        <FormField>
          <Flex flexDirection="row" columnGap="s">
            <Checkbox
              checked={selections.includes(index)}
              onChange={() => {
                setSelections((prev) => {
                  return prev.includes(index)
                    ? prev.filter((item) => item != index)
                    : [...prev, index];
                });
              }}
            />
            <BodyText size="medium" style={{ marginTop: 0 }}>
              {selections.includes(index) ? topic : <s>{topic}</s>}
            </BodyText>
          </Flex>
        </FormField>
      ))}
    </>
  );
};

export default Topics;
