import React from "react";
import { FormField, Select, useSelectModel } from "@workday/canvas-kit-react";
import { Flex } from "@workday/canvas-kit-react/layout";
import { Associate, Period } from "../types.ts";

interface AssociateAndRangeProps {
  associates: Associate[];
  selectedAssociateId: string;
  periods: Period[];
  selectedPeriodId: string;
  onChangeAssociate: (id: string) => void;
  onChangePeriod: (id: string) => void;
}

const AssociateAndRange: React.FC<AssociateAndRangeProps> = (props) => {
  const {
    associates,
    selectedAssociateId,
    periods,
    selectedPeriodId,
    onChangeAssociate,
    onChangePeriod,
  } = props;

  const handleAssociateChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    onChangeAssociate(event.target.value);
  };

  const handlePeriodChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChangePeriod(event.target.value);
  };

  const associateSelectModel = useSelectModel({
    items: associates,
    initialSelectedIds: [selectedAssociateId],
  });

  const periodSelectModel = useSelectModel({
    items: periods,
    initialSelectedIds: [selectedPeriodId],
  });

  return (
    <>
      <Flex flexDirection="column">
        <Select model={associateSelectModel}>
          <FormField label="Associate" required={true}>
            <Select.Input
              onChange={handleAssociateChange}
              value={
                associates.find((item) => item.id === selectedAssociateId)
                  ?.name ?? ""
              }
            />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {(item) => {
                    return <Select.Item>{item.name}</Select.Item>;
                  }}
                </Select.List>
              </Select.Card>
            </Select.Popper>
          </FormField>
        </Select>
        <Select model={periodSelectModel}>
          <FormField label="Period" required={true}>
            <Select.Input
              onChange={handlePeriodChange}
              value={
                periods.find((item) => item.id === selectedPeriodId)?.label ??
                ""
              }
            />
            <Select.Popper>
              <Select.Card>
                <Select.List>
                  {(item) => {
                    return <Select.Item>{item.label}</Select.Item>;
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
