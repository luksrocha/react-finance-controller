import { Summary } from "../Summary"
import { Container } from "./styles"
import { TransactionTable } from '../TransactionTable';


export const Dashboard = () => {
  return (
    <Container>
      <Summary />
      <TransactionTable />
    </Container>
  );
}