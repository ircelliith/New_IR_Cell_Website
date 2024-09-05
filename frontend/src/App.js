import "./App.css";
import Home from "./pages/home";
import Partners from "./pages/Partners.jsx";
import Jica from "./pages/jica.tsx";
import LifeAtIITH from "./pages/lifeatiith.tsx";
import Visitors from "./pages/visitors";
import Visa from "./pages/visa.jsx";
import { AnimatePresence } from "framer-motion";
import AnimatedCursor from "react-animated-cursor";
import Gallery from "./pages/gallery";
import Download from "./pages/download.jsx";
import Collab from "./pages/collab.jsx";
import Opportunity from "./pages/opportunity.jsx";

import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
  Menu,
} from "@chakra-ui/react";

import { BrowserRouter as Router,Route, Routes } from "react-router-dom";
import Team from "./pages/team.jsx";
import IntAdm from "./pages/intadm.jsx";

const { Button } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Menu,
  },
});

function App() {
  return (
    <AnimatePresence>
    <Router>
      <ChakraBaseProvider theme={theme}>
        <AnimatedCursor
          outerStyle={{
            border: "3px solid #ffffff",
            mixBlendMode: "difference",
          }}
          hasBlendMode={true}
          innerSize={12}
          outerSize={12}
          color="247,58,72"
          outerAlpha={0.2}
          innerScale={0.7}
          outerScale={5}
          clickables={[
            "a",
            'input[type="text"]',
            'input[type="email"]',
            'input[type="number"]',
            'input[type="submit"]',
            'input[type="image"]',
            "label[for]",
            "select",
            "textarea",
            "button",
            ".link",
            {
              target: ".custom",
              options: {
                innerSize: 12,
                outerSize: 12,
                color: "0, 0, 0",
                outerAlpha: 0.3,
                innerScale: 0.7,
                outerScale: 5,
              },
            },
          ]}
        />
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="/Partners" element={<Partners />} />
          <Route path="/jica" element={<Jica />} />
          <Route path="/lifeatiith" element={<LifeAtIITH />} />
          <Route path="/visitors" element={<Visitors />} />
          <Route path="/visa" element={<Visa />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/team" element={<Team />} />
          <Route path="/downloads" element={<Download />} />
          <Route path="/opportunity" element={<Opportunity />} />
          <Route path="/collab" element={<Collab />} />
          <Route path="/intadm" element={<IntAdm />} /> 

        </Routes>

      </ChakraBaseProvider>
    </Router>
    </AnimatePresence>
  );
}

export default App;
