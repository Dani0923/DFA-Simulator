import { Badge, Text } from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  ArrowHead,
  ArrowLoopSm,
  ArrowLoopLg,
  ArrowBody,
} from "../components/Arrows";
const Atom = motion(Badge);
const variants = {
  initial: { y: "-50%", x: "-50%" },
  pulse: { scale: 5, transition: { duration: 0.6 } },
  bounce: {
    y: ["-50%", "-200%", "-50%"],
    x: ["-50%", "-50%", "-50%"],
    scale: 2.5,
    transition: { duration: 0.4 },
  },
  scale: { scale: 1.5 },
};
const SecondDFA = ({ currentNodeVal, simulatingStatus }) => {
  return (
    <>
      {/* LETTER */}
      {/* q1 q2 */}
      <Text top="32%" left="14%" size="label">
        0
      </Text>
      {/* q1 q3 */}
      <Text top="68%" left="14%" size="label">
        1
      </Text>
      {/* q2 q4 */}
      <Text top="32%" left="26%" size="label">
        1
      </Text>
      {/* q3 q4 */}
      <Text top="68%" left="26%" size="label">
        0
      </Text>
      {/* q2 q5 */}
      <Text top={["16.5%", "16.5%", "16%", "16%", "16%", "15%"]} left="35%" size="label">
        0
      </Text>
      {/* q3 q5 */}
      <Text top="84%" left="35%" size="label">
        1
      </Text>
      {/* q4 q5 */}
      <Text top={["46.5%", "46.5%", "45.5%", "45.5%", "45.5%", "45%"]} left="40%" size="label">
        0,1
      </Text>
      {/* q5 q6 */}
      <Text top="32%" left="54%" size="label">
        0
      </Text>
      {/* q5 q7 */}
      <Text top="68%" left="54%" size="label">
        1
      </Text>
      {/* q6 q8 */}
      <Text top="32%" left="66%" size="label">
        0
      </Text>
      {/* q7 q8 */}
      <Text top="68%" left="66%" size="label">
        1
      </Text>
      {/* q8 q9 */}
      <Text top={["46.5%", "46.5%", "45.5%", "45.5%", "45.5%", "45%"]} left="80%" size="label">
        0,1
      </Text>
      {/* q9 */}
      <Text top={["27.5%", "27.5%", "29%", "29%", "29%", "27.5%"]} left="90%" size="label">
        0,1
      </Text>
      {/* q7 q6 */}
      <Text top="50%" left={["57.5%", "57.5%", "58%", "58%", "58%", "58%"]} size="label">
        0
      </Text>
      {/* q6 q7 */}
      <Text top="50%" left={["62.5%", "62.5%", "62%", "62%", "62%", "62%"]} size="label">
        1
      </Text>
      {/* ARROW BODY */}
      {/* q1 q2 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="31%"
        left={["11%", "11%", "13%", "13%", "13%", "14%"]}
        rotate={["120", "120", "126", "126", "126", "138"]}
      />
      {/* q1 q3 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="69%"
        left={["11%", "11%", "13%", "13%", "13%", "14%"]}
        rotate={["60", "60", "54", "54", "54", "42"]}
      />
      {/* q2 q4 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="39%"
        left={["21%", "21%", "24%", "24%", "24%", "24%"]}
        rotate={["60", "60", "54", "54", "54", "42"]}
      />
      {/* q3 q4 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="61%"
        left={["21%", "21%", "24%", "24%", "24%", "24%"]}
        rotate={["120", "120", "126", "126", "126", "138"]}
      />
      {/* q6 q8 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="39%"
        left={["61%", "61%", "64%", "64%", "64%", "64%"]}
        rotate={["60", "60", "54", "54", "54", "42"]}
      />
      {/* q7 q8 */}
      <ArrowBody
        w={["4em", "4em", "7em", "7em", "7em", "8em"]}
        top="61%"
        left={["61%", "61%", "64%", "64%", "64%", "64%"]}
        rotate={["120", "120", "126", "126", "126", "138"]}
      />
      {/* q2 q5*/}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["28%", "28%", "25%", "25%", "25%", "25%"]}
        left="30%"
      />
      {/* q3 q5*/}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["88%", "88%", "85%", "85%", "85%", "85%"]}
        left="30%"
      />
      {/* q4 q5 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["58%", "58%", "55%", "55%", "55%", "55%"]}
        left="40%"
      />
      {/* q8 q9 */}
      <ArrowBody
        w={["4em", "4em", "8em", "8em", "8em", "12em"]}
        top={["58%", "58%", "55%", "55%", "55%", "55%"]}
        left="80%"
      />
      {/* q2 q5 q7 */}
      <ArrowBody
        w={["8em", "8em", "13.5em", "13.5em", "13.5em", "16em"]}
        top="53.4%"
        left={["45.7%", "45.7%", "48%", "48%", "48%", "48.9%"]}
        rotate={["60", "60", "54", "54", "54", "42"]}
      />
      {/* q3 q5 q6*/}
      <ArrowBody
        w={["8.4em", "8.4em", "13.8em", "13.8em", "13.8em", "16em"]}
        top="46%"
        left={["46.2%", "46.2%", "48.4%", "48.4%", "48.4%", "48.9%"]}
        rotate={["120", "120", "127", "127", "127", "138"]}
      />
      {/* q6 q7 */}
      <ArrowBody
        w={["7em", "7em", "11em", "11em", "11em", "11em"]}
        top="50%"
        left={["54.2%", "54.2%", "56.6%", "56.6%", "56.6%", "57.41%"]}
        rotate="90"
      />
      {/* q7 q6 */}
      <ArrowBody
        w={["7em", "7em", "11em", "11em", "11em", "11em"]}
        top="50%"
        left={["56.3%", "56.3%", "58.7%", "58.7%", "58.6%", "59.45%"]}
        rotate="90"
      />
      {/* ARROW HEAD */}
      {/* q1 q3 */}
      <ArrowHead
        top={["71%", "71%", "72%", "72%", "72%", "72.1%"]}
        left={["17.1%", "17.1%", "16.9%", "16.9%", "16.8%", "17.4%"]}
        rotate={["57", "57", "55", "55", "55", "45"]}
      />
      {/* q5 q7 */}
      <ArrowHead
        top={["70.8%", "70.8%", "71.7%", "71.7%", "71.7%", "72%"]}
        left={["57.3%", "57.3%", "57%", "57%", "56.9%", "57.5%"]}
        rotate={["57", "57", "55", "55", "55", "45"]}
      />
      {/* q1 q2 */}
      <ArrowHead
        top={["29%", "29%", "28.1%", "28.2%", "28.1%", "27.9%"]}
        left={["17.2%", "17.2%", "16.9%", "16.9%", "16.9%", "17.5%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q5 q6 */}
      <ArrowHead
        top={["29.2%", "29.2%", "28.7%", "28.7%", "28.7%", "27.7%"]}
        left={["57.4%", "57.4%", "57.2%", "57.2%", "57.2%", "57.4%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q2 q5 */}
      <ArrowHead
        top={["41%", "41%", "41.3%", "41.3%", "41.3%", "42%"]}
        left={["47%", "47%", "47.1%", "47.1%", "47%", "47.5%"]}
        rotate={["57", "57", "55", "55", "55", "45"]}
      />
      {/* q3 q5 */}
      <ArrowHead
        top={["59%", "59%", "58.5%", "58.5%", "58.5%", "57.6%"]}
        left={["47.2%", "47.2%", "47.1%", "47.1%", "47.1%", "47.4%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q2 q4 */}
      <ArrowHead
        top={["41%", "41%", "41%", "40.7%", "40.9%", "42.6%"]}
        left={["27%", "27%", "27.5%", "27.5%", "27.4%", "27.4%"]}
        rotate={["57", "57", "55", "55", "55", "45"]}
      />
      {/* q6 q8 */}
      <ArrowHead
        top={["41%", "41%", "41%", "40.7%", "40.9%", "42.6%"]}
        left={["67%", "67%", "67.5%", "67.5%", "67.4%", "67.4%"]}
        rotate={["57", "57", "55", "55", "55", "45"]}
      />
      {/* q3 q4 */}
      <ArrowHead
        top={["59%", "59%", "59.2%", "59.2%", "59.1%", "58.3%"]}
        left={["27.1%", "27.2%", "27.5%", "27.6%", "27.5%", "27.4%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q7 q8 */}
      <ArrowHead
        top={["59%", "59%", "59.2%", "59.2%", "59.1%", "58.3%"]}
        left={["67.1%", "67.2%", "67.5%", "67.6%", "67.5%", "67.4%"]}
        rotate={["-57", "-57", "-55", "-55", "-55", "-45"]}
      />
      {/* q4 q5 */}
      <ArrowHead
        top={["50.3%", "50.2%", "49.8%", "49.8%", "49.9%", "49.8%"]}
        left={["44%", "44%", "45.2%", "45.2%", "45.3%", "46.5%"]}
      />
      {/* q8 q9 */}
      <ArrowHead
        top={["50.3%", "50.2%", "49.8%", "49.8%", "49.9%", "49.8%"]}
        left={["84%", "84%", "85.2%", "85.2%", "85.3%", "86.5%"]}
      />
      {/* q7 q6 */}
      <ArrowHead
        top={["30%", "30%", "30.4%", "30.4%", "30.2%", "31%"]}
        left="59%"
        rotate="-90"
      />
      {/* q6 q7 */}
      <ArrowHead
        top={["70%", "70%", "69.7%", "69.7%", "69.5%", "68.9%"]}
        left="61%"
        rotate="90"
      />
      {/* ARROWLOOP */}
      {/* q9 */}
      <ArrowLoopLg
        top={["37%", "37%", "37%", "37%", "37%", "36%"]}
        left="90%"
        rotate="110"
      />
      {/* ATOM */}
      <Atom
        variant="1"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 1 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        -
      </Atom>
      <Atom
        variant="2"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 2 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        
      </Atom>
      <Atom
        variant="3"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 3 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        
      </Atom>
      <Atom
        variant="4"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 4 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        
      </Atom>
      <Atom
        variant="5"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 5 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        
      </Atom>
      <Atom
        variant="6"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 6 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        
      </Atom>
      <Atom
        variant="7"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 7 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        
      </Atom>
      <Atom
        variant="8"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 8 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        
      </Atom>
      <Atom
        variant="9"
        variants={variants}
        initial="initial"
        animate={currentNodeVal == 9 ? "pulse" : ""}
        whileHover={!simulatingStatus && "scale"}
      >
        +
      </Atom>
    </>
  );
};
export default SecondDFA;