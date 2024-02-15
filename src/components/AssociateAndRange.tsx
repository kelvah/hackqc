import { useEffect, useState } from "react";
import { FormField, Select } from "@workday/canvas-kit-react";
import { Flex } from "@workday/canvas-kit-react/layout";

const AssociateAndRange = () => {
  const associatesList = [
    "Roberto Emanuel",
    "Matteo Mortari",
    "Edson Tirelli",
    "Daniele Zonca",
  ];
  const periods = ["Q1 2024", "Q4 2023", "Q3 2023", "Q2 2023", "Q1 2023"];
  const [associate, setAssociate] = useState("");
  const [period, setPeriod] = useState(periods[0]);

  const handleAssociateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setAssociate(event.target.value);
  };

  const handlePeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPeriod(event.target.value);
  };

  useEffect(() => {
    console.log(`Selected associate: ${associate}`);
  }, [associate]);
  useEffect(() => {
    console.log(`Selected associate: ${period}`);
  }, [period]);

  return (
    <>
      <Flex flexDirection="column">
        <Select items={associatesList}>
          <FormField label="Associate" required={true}>
            <Select.Input onChange={handleAssociateChange} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {(item) => {
                    return <Select.Item>{item}</Select.Item>;
                  }}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </FormField>
        </Select>
        <Select items={periods} value={period}>
          <FormField label="Period" required={true}>
            <Select.Input onChange={handlePeriodChange} />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {(item) => {
                    return <Select.Item>{item}</Select.Item>;
                  }}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </FormField>
        </Select>
      </Flex>
    </>
  );
};

export default AssociateAndRange;
