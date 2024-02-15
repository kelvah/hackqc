import { FormField, SecondaryButton, Text } from "@workday/canvas-kit-react";
import { Flex } from "@workday/canvas-kit-react/layout";
import { plusIcon } from "@workday/canvas-system-icons-web";

const ExternalSources = () => {
  return (
    <Flex flexDirection="column">
      <FormField>
        <Text as="p" fontSize={16} fontWeight="regular">
          Other sources
        </Text>
        <Flex flexDirection="row" columnGap={"s"}>
          <SecondaryButton icon={plusIcon} iconPosition="start">
            Add File
          </SecondaryButton>
          <SecondaryButton icon={plusIcon} iconPosition="start">
            Add URL
          </SecondaryButton>
          <SecondaryButton icon={plusIcon} iconPosition="start">
            Add Transcript
          </SecondaryButton>
        </Flex>
      </FormField>
    </Flex>
  );
};

export default ExternalSources;
