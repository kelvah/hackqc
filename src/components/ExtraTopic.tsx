import React, { useState } from "react";
import { FormField, SecondaryButton } from "@workday/canvas-kit-react";
import { plusIcon } from "@workday/canvas-system-icons-web";
import TopicEditor from "./TopicEditor.tsx";

interface ExtraTopicProps {
  topic: string | null;
  setExtraTopic: (topic: string | null) => void;
}
const ExtraTopic: React.FC<ExtraTopicProps> = (props) => {
  const { topic, setExtraTopic } = props;
  const [isEditing, setIsEditing] = useState(false);

  const handleAdd = () => {
    setIsEditing(true);
    setExtraTopic("");
  };

  const handleCancel = () => {
    setIsEditing(false);
    setExtraTopic(null);
  };

  const handleDone = () => {
    // setIsEditing(false);
  };

  return (
    <>
      {topic !== null ? (
        <>
          {isEditing ? (
            <TopicEditor
              topic={topic}
              onCancel={handleCancel}
              onChange={setExtraTopic}
              onDone={handleDone}
            />
          ) : (
            <span></span>
          )}
        </>
      ) : (
        <FormField>
          <SecondaryButton
            icon={plusIcon}
            iconPosition="start"
            onClick={handleAdd}
          >
            Add Topic
          </SecondaryButton>
        </FormField>
      )}
    </>
  );
};

export default ExtraTopic;
