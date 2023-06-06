import { Box } from '@chakra-ui/react';

import ThemeToggleButton from './components/ThemeToggleButton';

const App = (): JSX.Element => (
  <Box>
    <ThemeToggleButton pos="fixed" bottom="2" right="2" />
  </Box>
);

export default App;
