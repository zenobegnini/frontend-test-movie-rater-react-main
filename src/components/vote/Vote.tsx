import { Button } from "@chakra-ui/button";
import { Box, Heading, List, ListItem } from "@chakra-ui/layout";
import { Radio, RadioGroup } from "@chakra-ui/radio";
import React from "react";
import { useGoTo } from "../../lib/globalState/mutations/useGoTo";
import { useRandomMovies } from "../../lib/globalState/selectors/useRandomMovies";
import { State } from "../../lib/globalState/types";
import { Title } from "../layout/Title";
import { useVote } from "../../lib/globalState/mutations/useVote";

export const Vote: React.FC = () => {
  const movies = useRandomMovies();
  const [value, select, vote] = useVote();
  const goTo = useGoTo();

  // TODO: Allow voting only after selecting a movie
  const voteAndGo = () => {
    vote();
    goTo(State.dashboard);
  };

  return (
    <Box>
      <Title>Qual'è il migliore tra:</Title>
      <RadioGroup onChange={select} value={value}>
        <List>
          {movies.map((movie) => (
            <ListItem py={2} key={movie.id}>
              <Radio value={movie.id}>
                <Heading fontSize="md">{movie.title}</Heading>
                <Box>
                  del {movie.year}, di {movie.author}
                </Box>
              </Radio>
            </ListItem>
          ))}
        </List>
      </RadioGroup>
      <Button onClick={voteAndGo} mt={5}>
        Vota
      </Button>
    </Box>
  );
};
