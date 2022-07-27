import { Flex } from "@chakra-ui/react";
import { CashflowChart } from "../src/components/CashflowChart";
import ExpenseChart from "../src/components/ExpenseChart";
import RatingChart from "../src/components/RatingChart";

export default function Home() {
  return (
    <Flex justifyContent={"center"} alignItems={"center"}>
      {" "}
      <Flex padding={"20%"}>
        <RatingChart />
        <ExpenseChart />
        <CashflowChart />
      </Flex>
    </Flex>
  );
}
