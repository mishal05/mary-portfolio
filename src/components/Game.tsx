import React, { useState } from 'react';
import { motion } from 'framer-motion';

type Square = 'X' | 'O' | null;
type GameState = 'playing' | 'won' | 'draw';
type Difficulty = 'easy' | 'medium' | 'hard';

const Game = () => {
  const [board, setBoard] = useState<Square[]>(Array(9).fill(null));
  const [gameState, setGameState] = useState<GameState>('playing');
  const [score, setScore] = useState({ Player: 0, Computer: 0 });
  const [difficulty, setDifficulty] = useState<Difficulty>('medium');
  const [isComputerTurn, setIsComputerTurn] = useState(false);

  const HUMAN_PLAYER = 'X';
  const AI_PLAYER = 'O';

  const calculateWinner = (squares: Square[]): Square => {
    const lines = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8],
      [0, 3, 6], [1, 4, 7], [2, 5, 8],
      [0, 4, 8], [2, 4, 6]
    ];

    for (const [a, b, c] of lines) {
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  };

  const getEmptySquares = (squares: Square[]): number[] => {
    return squares.reduce((empty: number[], square, index) => {
      if (!square) empty.push(index);
      return empty;
    }, []);
  };

  const minimax = (squares: Square[], depth: number, isMaximizing: boolean): number => {
    const winner = calculateWinner(squares);
    
    if (winner === AI_PLAYER) return 10 - depth;
    if (winner === HUMAN_PLAYER) return depth - 10;
    if (getEmptySquares(squares).length === 0) return 0;

    const emptySquares = getEmptySquares(squares);
    
    if (isMaximizing) {
      let bestScore = -Infinity;
      for (const square of emptySquares) {
        squares[square] = AI_PLAYER;
        bestScore = Math.max(bestScore, minimax(squares, depth + 1, false));
        squares[square] = null;
      }
      return bestScore;
    } else {
      let bestScore = Infinity;
      for (const square of emptySquares) {
        squares[square] = HUMAN_PLAYER;
        bestScore = Math.min(bestScore, minimax(squares, depth + 1, true));
        squares[square] = null;
      }
      return bestScore;
    }
  };

  const getBestMove = (squares: Square[]): number => {
    const emptySquares = getEmptySquares(squares);
    
    // Easy: 30% chance of random move
    if (difficulty === 'easy' && Math.random() < 0.3) {
      return emptySquares[Math.floor(Math.random() * emptySquares.length)];
    }
    
    // Medium: 70% chance of best move
    if (difficulty === 'medium' && Math.random() < 0.3) {
      return emptySquares[Math.floor(Math.random() * emptySquares.length)];
    }

    let bestScore = -Infinity;
    let bestMove = emptySquares[0];

    for (const square of emptySquares) {
      squares[square] = AI_PLAYER;
      const score = minimax(squares, 0, false);
      squares[square] = null;

      if (score > bestScore) {
        bestScore = score;
        bestMove = square;
      }
    }

    return bestMove;
  };

  const makeComputerMove = () => {
    if (gameState !== 'playing' || !isComputerTurn) return;

    const newBoard = [...board];
    const move = getBestMove(newBoard);
    newBoard[move] = AI_PLAYER;
    setBoard(newBoard);
    setIsComputerTurn(false);

    const winner = calculateWinner(newBoard);
    if (winner) {
      setGameState('won');
      setScore(prev => ({
        ...prev,
        Computer: prev.Computer + 1
      }));
    } else if (!newBoard.includes(null)) {
      setGameState('draw');
    }
  };

  // Effect to handle computer's turn
  React.useEffect(() => {
    if (isComputerTurn && gameState === 'playing') {
      const timer = setTimeout(makeComputerMove, 500);
      return () => clearTimeout(timer);
    }
  }, [isComputerTurn, gameState]);

  const handleClick = (i: number) => {
    // Prevent moves if it's computer's turn or square is already filled
    if (board[i] || gameState !== 'playing' || isComputerTurn) return;

    const newBoard = [...board];
    newBoard[i] = HUMAN_PLAYER;
    setBoard(newBoard);

    const winner = calculateWinner(newBoard);
    if (winner) {
      setGameState('won');
      setScore(prev => ({
        ...prev,
        Player: prev.Player + 1
      }));
      return;
    }
    
    if (!newBoard.includes(null)) {
      setGameState('draw');
      return;
    }

    setIsComputerTurn(true);
  };

  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setGameState('playing');
    setIsComputerTurn(false);
  };

  const renderSquare = (i: number) => {
    const isClickable = !board[i] && gameState === 'playing' && !isComputerTurn;
    
    return (
      <motion.button
        whileHover={isClickable ? { scale: 1.1 } : {}}
        whileTap={isClickable ? { scale: 0.9 } : {}}
        className={`w-20 h-20 border border-gray-300 text-3xl font-bold flex items-center justify-center
          ${isClickable ? 'hover:bg-gray-50 cursor-pointer' : 'cursor-not-allowed'}
          ${board[i] === 'X' ? 'text-blue-600' : 'text-red-600'}
          ${board[i] ? 'bg-white' : 'bg-gray-50'}`}
        onClick={() => handleClick(i)}
        disabled={!isClickable}
      >
        {board[i]}
      </motion.button>
    );
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gradient-to-br from-indigo-50 to-purple-50 p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-8"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4text-4xl font-bold text-gray-900 mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">Tic Tac Toe vs AI</h1>
        <p className="text-gray-600 mb-4">You are X, Computer is O</p>
        
        <div className="mb-4">
          <label className="text-gray-700 mr-2">Difficulty:</label>
          <select
            value={difficulty}
            onChange={(e) => setDifficulty(e.target.value as Difficulty)}
            className="px-3 py-1 border rounded-md"
          >
            <option value="easy">Easy</option>
            <option value="medium">Medium</option>
            <option value="hard">Hard</option>
          </select>
        </div>

        <div className="flex justify-center gap-8 mb-6">
          <div className="text-center">
            <p className="text-lg font-semibold text-blue-600">You (X)</p>
            <p className="text-2xl font-bold">{score.Player}</p>
          </div>
          <div className="text-center">
            <p className="text-lg font-semibold text-red-600">Computer (O)</p>
            <p className="text-2xl font-bold">{score.Computer}</p>
          </div>
        </div>
      </motion.div>

      <div className="bg-white p-8 rounded-lg shadow-xl">
        <div className="grid grid-cols-3 gap-2 mb-6">
          {[0, 1, 2, 3, 4, 5, 6, 7, 8].map(i => renderSquare(i))}
        </div>

        <div className="text-center">
          {gameState === 'playing' && (
            <p className="text-lg font-semibold mb-4">
              {isComputerTurn ? "Computer's turn..." : "Your turn!"}
            </p>
          )}
          {gameState === 'won' && (
            <p className="text-xl font-bold text-green-600 mb-4">
              {calculateWinner(board) === HUMAN_PLAYER ? 'You won!' : 'Computer wins!'}
            </p>
          )}
          {gameState === 'draw' && (
            <p className="text-xl font-bold text-orange-600 mb-4">
              It's a draw!
            </p>
          )}
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition-colors"
            onClick={resetGame}
          >
            New Game
          </motion.button>
        </div>
      </div>
    </div>
  );
};

export default Game;