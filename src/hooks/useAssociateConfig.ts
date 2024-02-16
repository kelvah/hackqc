import { useState } from "react";
import { Period } from "../types.ts";

export const useAssociateConfig = (periods: Period[]) => {
  const [associate, setAssociate] = useState("");
  const [period, setPeriod] = useState(periods[0].id);

  const changeAssociate = (id: string) => {
    setAssociate(id);
  };

  const changePeriod = (id: string) => {
    setPeriod(id);
  };

  return { associate, period, changePeriod, changeAssociate };
};
