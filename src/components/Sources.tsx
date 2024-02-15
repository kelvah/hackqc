import React, { useState } from "react";
import { Flex } from "@workday/canvas-kit-react/layout";
import { Checkbox, FormField, Text } from "@workday/canvas-kit-react";

const Sources = () => {
  const [selection, setSelection] = useState({
    previousOutcomes: true,
    workAnniversary: true,
    selfAssessment: true,
    peerReviews: true,
  });

  return (
    <Flex flexDirection="column">
      <Text as="p" fontSize={16} fontWeight="regular">
        Standard sources
      </Text>
      <FormField>
        <Checkbox
          checked={selection.previousOutcomes}
          label="Outcome from previous quarters"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSelection((prev) => ({
              ...prev,
              previousOutcomes: event.target.checked,
            }));
          }}
        />
      </FormField>
      <FormField>
        <Checkbox
          checked={selection.workAnniversary}
          label="Work anniversary"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSelection((prev) => ({
              ...prev,
              workAnniversary: event.target.checked,
            }));
          }}
        />
      </FormField>
      <FormField>
        <Checkbox
          checked={selection.selfAssessment}
          label="Performance self assessment"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSelection((prev) => ({
              ...prev,
              selfAssessment: event.target.checked,
            }));
          }}
        />
      </FormField>
      <FormField>
        <Checkbox
          checked={selection.peerReviews}
          label="Feedback from peers"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setSelection((prev) => ({
              ...prev,
              peerReviews: event.target.checked,
            }));
          }}
        />
      </FormField>
    </Flex>
  );
};

export default Sources;
