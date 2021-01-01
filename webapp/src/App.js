import React from "react"
import './App.css';
import { ChakraProvider, extendTheme } from "@chakra-ui/react"
import { Provider } from "react-redux"
import { prepareStore } from "./store/store"
import SermonPage from "./pages/SermonPage"
import colors from "./theme"
const theme = extendTheme({ colors })

function App(props) {
  const store = prepareStore({})
  return (
    <ChakraProvider theme={theme}>
      <Provider store={store}>
        <SermonPage />
      </Provider>
    </ChakraProvider>
  );
}

export default App