import { useState } from "react";
import { actions } from "../actions";
import { useGlobalState } from "../GlobalStateContext";

interface ISelect {
  (s: string): void;
}

interface IVote {
  (): void;
}
interface IUseVote {
  (): [
    /**
     * Current choice
     */
    number,
    /**
     * Make a choice
     */
    ISelect,
    /**
     * Submit vote
     */
    IVote
  ];
}

export const useVote: IUseVote = () => {
  const [value, setValue] = useState<number>();
  const { dispatch } = useGlobalState();

  const select: ISelect = (s) => {
    const n: number = parseInt(s);
    setValue(n);
  };

  const vote: IVote = () => dispatch(actions.vote(value));

  return [value, select, vote];
};
