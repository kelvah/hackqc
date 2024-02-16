import React from "react";
import {
  FormField,
  SecondaryButton,
  TextArea,
} from "@workday/canvas-kit-react";
import { Flex } from "@workday/canvas-kit-react/layout";

interface TopicEditorProps {
  topic: string;
  onChange: (topic: string) => void;
  onDone: () => void;
  onCancel: () => void;
}

const TopicEditor: React.FC<TopicEditorProps> = (props) => {
  const { topic, onChange, onDone, onCancel } = props;
  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    onChange(event.target.value);
  };

  const handleAdd = () => {
    if (topic && topic.length > 0) {
      onDone();
    }
  };

  return (
    <FormField grow={true} label="Enter a topic">
      <Flex flexDirection="row" columnGap="s">
        <Flex.Item flex={2}>
          <TextArea
            value={topic}
            onChange={handleChange}
            resize={TextArea.ResizeDirection.Vertical}
            style={{ width: "100%" }}
          />
        </Flex.Item>
        <Flex.Item flex={1}>
          <Flex
            gap="s"
            alignContent={"flex-end"}
            alignItems={"flex-start"}
            justifyContent={"flex-start"}
          >
            <SecondaryButton onClick={handleAdd}>Add</SecondaryButton>
            <SecondaryButton onClick={onCancel}>Cancel</SecondaryButton>
          </Flex>
        </Flex.Item>
      </Flex>
    </FormField>
  );
};

export default TopicEditor;
