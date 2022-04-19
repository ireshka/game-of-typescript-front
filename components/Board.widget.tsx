import { Board } from "types/board";
import { useBoardApi } from "context/BoardApi.context";
import * as React from "react";
import { Stack, Button, Box } from "@mui/material";
import { BoardGrid } from "./Board.grid";

const mockBoard = [
  [0, 1, 0, 0, 0],
  [0, 1, 0, 0, 0],
  [1, 1, 1, 0, 0],
  [0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0],
];

export const BoardWidget = () => {
  const context = useBoardApi();
  const [boardId, setBoardId] = React.useState<string | null>(null);
  const [boardState, setBoardState] = React.useState<Board | null>(null);

  console.log(boardId);
  const initializeGame = async () => {
    setBoardState(mockBoard);
    const resp = await context.api.sendInitialBoard({ board: mockBoard });
    setBoardId(resp.boardId);
  };

  const tickGame = async () => {
    if (boardId === null) return;
    const newBoard = await context.api.tick({ id: boardId });
    setBoardState(newBoard.result);
  };

  const isGameLoaded = boardId !== null && boardState !== null;

  return (
    <>
      <Stack direction="row" justifyContent="center">
        <Button
          variant="contained"
          onClick={isGameLoaded ? tickGame : initializeGame}
        >
          {isGameLoaded ? "Next generation" : "Start game"}
        </Button>
      </Stack>
      {isGameLoaded && (
        <Box sx={{ pt: "2rem" }}>
          <BoardGrid board={boardState} />
        </Box>
      )}
      {isGameLoaded && (
        <Stack direction="row" justifyContent="center" sx={{ pt: "0.5rem" }}>
          <Button
            variant="contained"
            onClick={initializeGame}
          >
            {"Restart game"}
          </Button>
        </Stack>
      )}
    </>
  );
};
