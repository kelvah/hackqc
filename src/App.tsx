import { useState } from "react";
import { AppHeader } from "./components/GlobalHeader.tsx";
import RedBanner from "./components/RedBanner.tsx";
import { Card, Heading, PrimaryButton } from "@workday/canvas-kit-react";
import AssociateAndRange from "./components/AssociateAndRange.tsx";
import { Flex } from "@workday/canvas-kit-react/layout";
import Sources from "./components/Sources.tsx";
import ExternalSources from "./components/ExternalSources.tsx";
import Topics from "./components/Topics.tsx";
import TalkingPoints from "./components/TalkingPoints.tsx";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);

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
          <Card className="step-0">
            <Card.Heading>Associate and date range selection</Card.Heading>
            <Card.Body>
              <AssociateAndRange />
              <PrimaryButton type="button" onClick={() => goToStep(1)}>
                Start
              </PrimaryButton>
            </Card.Body>
          </Card>
          {step >= 1 && (
            <Card className="step-1">
              <Card.Heading>Sources selection</Card.Heading>
              <Card.Body>
                <Sources />
                <ExternalSources />
                <PrimaryButton type="button" onClick={() => goToStep(2)}>
                  Next
                </PrimaryButton>
              </Card.Body>
            </Card>
          )}
          {step >= 2 && (
            <Card className="step-2">
              <Card.Heading>Topics</Card.Heading>
              <Card.Body>
                <Topics />
                <PrimaryButton type="button" onClick={() => goToStep(3)}>
                  Generate
                </PrimaryButton>
              </Card.Body>
            </Card>
          )}
          {step >= 3 && (
            <Card className="step-3">
              <Card.Heading>Talking points</Card.Heading>
              <Card.Body>
                <TalkingPoints />
              </Card.Body>
            </Card>
          )}
        </Flex>
      </section>
    </>
  );
}

export default App;
