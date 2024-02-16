import React from "react";
import { BodyText, Checkbox, FormField, Text } from "@workday/canvas-kit-react";
import { Flex } from "@workday/canvas-kit-react/layout";
import Loading from "./Loading.tsx";

interface TopicsProps {
  topics: Array<{ source: string; text: string }>;
  loading: boolean;
  selections: Array<number>;
  setSelections: React.Dispatch<React.SetStateAction<number[]>>;
}

const Topics: React.FC<TopicsProps> = (props) => {
  const { topics, loading, selections, setSelections } = props;

  return (
    <section style={{ minHeight: "20em" }}>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Text as="p" typeLevel="body.medium" style={{ marginBottom: "2em" }}>
            Select all the topics that you want to use to generate talking
            points
          </Text>
          {topics.map((topic, index) => (
            <FormField key={`topic-${index}`}>
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
          {/*<FormField>*/}
          {/*  <SecondaryButton icon={plusIcon} iconPosition="start">*/}
          {/*    Add Topic*/}
          {/*  </SecondaryButton>*/}
          {/*</FormField>*/}
        </>
      )}
    </section>
  );
};

export default Topics;
