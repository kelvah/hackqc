import { AppHeader } from "./components/GlobalHeader.tsx";
import RedBanner from "./components/RedBanner.tsx";
import { Card, Heading, PrimaryButton } from "@workday/canvas-kit-react";
import AssociateAndRange from "./components/AssociateAndRange.tsx";
import { useState } from "react";
import { Flex } from "@workday/canvas-kit-react/layout";
import Sources from "./components/Sources.tsx";
import ExternalSources from "./components/ExternalSources.tsx";
import Topics from "./components/Topics.tsx";
import "./App.css";

function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      <AppHeader />
      <RedBanner />
      <section className="main-content">
        <Heading size="large">Quarterly Connections</Heading>
        <Flex flexDirection="column" rowGap="m">
          <Card>
            <Card.Heading>Associate and date range selection</Card.Heading>
            <Card.Body>
              <AssociateAndRange />
              <PrimaryButton
                type="button"
                onClick={() => setStep((step) => step + 1)}
              >
                Start
              </PrimaryButton>
            </Card.Body>
          </Card>
          {step >= 1 && (
            <Card>
              <Card.Heading>Sources selection</Card.Heading>
              <Card.Body>
                <Sources />
                <ExternalSources />
                <PrimaryButton
                  type="button"
                  onClick={() => setStep((step) => step + 1)}
                >
                  Next
                </PrimaryButton>
              </Card.Body>
            </Card>
          )}
          {step >= 2 && (
            <Card>
              <Card.Heading>Topics</Card.Heading>
              <Card.Body>
                <Topics />
                <PrimaryButton
                  type="button"
                  onClick={() => setStep((step) => step + 1)}
                >
                  Next
                </PrimaryButton>
              </Card.Body>
            </Card>
          )}
          {step >= 3 && (
            <Card>
              <Card.Heading>Talking points</Card.Heading>
              <Card.Body>
                <PrimaryButton type="button" onClick={() => setStep(1)}>
                  Next
                </PrimaryButton>
              </Card.Body>
            </Card>
          )}
        </Flex>
      </section>
    </>
  );
}

export default App;
