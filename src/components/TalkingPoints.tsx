import { Flex } from "@workday/canvas-kit-react/layout";
import { Text } from "@workday/canvas-kit-react";

import { useEffect, useState } from "react";
import Loading from "./Loading.tsx";

const TalkingPoints = () => {
  const baseStyles = {
    color: "blackPepper500",
    padding: "xs",
  };
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 3000);
      return () => {
        clearTimeout(timer);
      };
    } else {
      document
        .querySelector(".step-3")
        ?.scrollIntoView({ behavior: "smooth", block: "end" });
    }
  }, [loading]);

  return (
    <section style={{ minHeight: "20em" }}>
      {loading ? (
        <Loading height={"20em"} />
      ) : (
        <Flex columnGap="xs">
          <Flex flexDirection="column" rowGap="xxs" flex={1}>
            <Flex.Item {...baseStyles}>
              <Text as="h2">1. Start with Heart</Text>

              <Text as="p" typeLevel="body.small">
                Acknowledge John’s achievements, including quality code,
                leadership recognitions, and 5-year anniversary.
              </Text>
            </Flex.Item>
            <Flex.Item {...baseStyles}>
              <Text as="h2">2. Create Safety</Text>
              <Text as="p" typeLevel="body.small">
                Clarify the goal is constructive feedback, not criticism. Ensure
                John feels valued.
              </Text>
            </Flex.Item>
            <Flex.Item {...baseStyles}>
              <Text as="h2">3. Share Your Facts</Text>
              <Text as="p" typeLevel="body.small">
                Present observations factually: recognitions received, and
                report of conflict with Jack, including not sharing knowledge or
                assisting others.
              </Text>
            </Flex.Item>
            <Flex.Item {...baseStyles}>
              <Text as="h2">4. Tell Your Story</Text>
              <Text as="p" typeLevel="body.small">
                Explain the importance of teamwork and collaboration for team
                success. Express concern about how not sharing knowledge may
                affect team dynamics.
              </Text>
            </Flex.Item>
          </Flex>
          <Flex flexDirection="column" rowGap="xs" flex={1}>
            <Flex.Item {...baseStyles}>
              <Text as="h2">5. Ask for John’s Perspective</Text>
              <Text as="p" typeLevel="body.small">
                Invite John to share his view on the situation and any
                challenges he’s facing in collaborating with others.
              </Text>
            </Flex.Item>
            <Flex.Item {...baseStyles}>
              <Text as="h2">6. Explore Others’ Paths</Text>
              <Text as="p" typeLevel="body.small">
                Discuss any valid points John raises. Address misunderstandings
                or perception gaps.
              </Text>
            </Flex.Item>
            <Flex.Item {...baseStyles}>
              <Text as="h2">7. Move to Action</Text>
              <Text as="p" typeLevel="body.small">
                Develop a plan with specific actions for John to improve
                collaboration. Set clear goals and offer support.
              </Text>
            </Flex.Item>
            <Flex.Item {...baseStyles}>
              <Text as="h2">8. Conclude Positively</Text>
              <Text as="p" typeLevel="body.small">
                Reaffirm confidence in John’s abilities and thank him for
                engaging in the conversation.
              </Text>
            </Flex.Item>
          </Flex>
        </Flex>
      )}
    </section>
  );
};

export default TalkingPoints;
