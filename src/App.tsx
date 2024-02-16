import { useState } from "react";
import { AppHeader } from "./components/GlobalHeader.tsx";
import RedBanner from "./components/RedBanner.tsx";
import { Card, Heading, PrimaryButton } from "@workday/canvas-kit-react";
import AssociateAndRange from "./components/AssociateAndRange.tsx";
import { Flex } from "@workday/canvas-kit-react/layout";
import Sources from "./components/Sources.tsx";
import ExternalSources from "./components/ExternalSources.tsx";
import Topics from "./components/Topics.tsx";
// import TalkingPoints from "./components/TalkingPoints.tsx";
import { useTopics } from "./hooks/useTopics.ts";
import "./App.css";
import ExtraTopic from "./components/ExtraTopic.tsx";
import { useExtraTopic } from "./hooks/useExtraTopic.ts";
import { useTalkingPoints } from "./hooks/useTalkingPoints.ts";
import PlainTalkingPoints from "./components/PlainTalkingPoints.tsx";
import { useAssociateConfig } from "./hooks/useAssociateConfig.ts";
import { associatesData, periodsData } from "./data.ts";

function App() {
  const [step, setStep] = useState(0);

  const { period, changePeriod, associate, changeAssociate } =
    useAssociateConfig(periodsData);

  const {
    topics,
    topicsLoading,
    setTopicsSelection,
    topicsSelection,
    loadTopics,
  } = useTopics();

  const { extraTopic, changeExtraTopic } = useExtraTopic();

  const { talkingPoints, loadingTalkingPoints, loadTalkingPoints } =
    useTalkingPoints();

  const handleLoadTalkingPoints = () => {
    const topicsList = topics
      .filter((_topic, index) => topicsSelection.includes(index))
      .map((item) => item.text);
    loadTalkingPoints(topicsList);
  };

  const goToStep = (step: number) => {
    setStep(step);
    setTimeout(() => {
      document.querySelector(`.step-${step}`)?.scrollIntoView({
        behavior: "smooth",
        block: "end",
      });
    }, 50);
  };

  return (
    <>
      <AppHeader />
      <RedBanner />
      <section className="main-content">
        <Heading size="large">Quarterly Connections</Heading>
        <Flex flexDirection="column" rowGap="m">
          <Card className="step step-0">
            <Card.Heading>Associate and date range selection</Card.Heading>
            <Card.Body>
              <AssociateAndRange
                associates={associatesData}
                onChangeAssociate={changeAssociate}
                selectedAssociateId={associate}
                periods={periodsData}
                onChangePeriod={changePeriod}
                selectedPeriodId={period}
              />
              <PrimaryButton type="button" onClick={() => goToStep(1)}>
                Start
              </PrimaryButton>
            </Card.Body>
          </Card>
          {step >= 1 && (
            <Card className="step step-1">
              <Card.Heading>Sources selection</Card.Heading>
              <Card.Body>
                <Sources />
                <ExternalSources />
                <PrimaryButton
                  type="button"
                  onClick={() => {
                    goToStep(2);
                    loadTopics(associate, period);
                  }}
                >
                  Next
                </PrimaryButton>
              </Card.Body>
            </Card>
          )}
          {step >= 2 && (
            <Card className="step step-2">
              <Card.Heading>Topics</Card.Heading>
              <Card.Body>
                <Topics
                  topics={topics}
                  loading={topicsLoading}
                  selections={topicsSelection}
                  setSelections={setTopicsSelection}
                />

                {!topicsLoading && (
                  <>
                    <ExtraTopic
                      topic={extraTopic}
                      setExtraTopic={changeExtraTopic}
                    />
                    <PrimaryButton
                      type="button"
                      onClick={() => {
                        goToStep(3);
                        handleLoadTalkingPoints();
                      }}
                    >
                      Generate
                    </PrimaryButton>
                  </>
                )}
              </Card.Body>
            </Card>
          )}
          {step >= 3 && (
            <Card className="step step-3">
              <Card.Heading>Talking points</Card.Heading>
              <Card.Body>
                {/*<TalkingPoints />*/}
                <PlainTalkingPoints
                  loading={loadingTalkingPoints}
                  talkingPoints={talkingPoints}
                />
              </Card.Body>
            </Card>
          )}
        </Flex>
      </section>
    </>
  );
}

export default App;
