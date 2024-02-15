import {
  BodyText,
  Checkbox,
  FormField,
  SecondaryButton,
  Text,
} from "@workday/canvas-kit-react";
import { useEffect, useState } from "react";
import { Flex } from "@workday/canvas-kit-react/layout";
import { plusIcon } from "@workday/canvas-system-icons-web";

const topics = [
  {
    source: "Quarterly perf",
    text: "John is a high performer engineer that delivers tasks on time.",
  },
  {
    source: "Quarterly perf",
    text: "John received 2 recognitions from leadership this quarter for the impact of his work on the product.",
  },
  {
    source: "Time-sensitive",
    text: "John had his 5th work anniversary",
  },
  {
    source: "Peer review",
    text: "John had a work conflict with his peer Jack. Jack reported difficulties to work with John due to his limited efforts on knowledge sharing and helping colleagues in need. I have observed this behaviour as well in past occasions.",
  },
];

const Topics = () => {
  const [selections, setSelections] = useState<Number[]>([
    ...Array(topics.length).keys(),
  ]);

  useEffect(() => {
    console.log(selections.join(", "));
  }, [selections]);

  return (
    <>
      <Text as="p" typeLevel="body.medium" style={{ marginBottom: "2em" }}>
        Select all the topics that you want to use to generate talking points
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
            <BodyText
              size="medium"
              className={!selections.includes(index) ? "line-through" : ""}
              style={{ marginTop: 0, marginBottom: 0 }}
            >
              {topic.source ? (
                <>
                  <strong>{topic.source}</strong>
                  <br />
                </>
              ) : null}
              {topic.text}
            </BodyText>
          </Flex>
        </FormField>
      ))}
      <FormField>
        <SecondaryButton icon={plusIcon} iconPosition="start">
          Add Topic
        </SecondaryButton>
      </FormField>
    </>
  );
};

export default Topics;
