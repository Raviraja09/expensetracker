import { useEffect, useRef } from "react";
import { expensesActions } from "../store/expensesSlice";
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

function ExpensesForm() {
  const amountRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  useEffect(() => {
    if (expense.editExpense) {
      amountRef.current.value = expense.editExpense.amount
      descriptionRef.current.value = expense.editExpense.description
      categoryRef.current.value = expense.editExpense.category
    }
    dispacth(expensesActions.editExpense(''))
  }, [expense, dispacth])
  

  function addExpenseHandler(e) {
    e.preventDefault();
    const expense = {
      userId,
      expense: {
        id: Math.random().toString(),
        amount: amountRef.current.value,
        description: descriptionRef.current.value,
        category: categoryRef.current.value,
      },
      total: total + Number(amountRef.current.value)
    };
    dispacth(expensesActions.addExpense(expense));
    amountRef.current.value = "";
    descriptionRef.current.value = "";
  }

  return (
    <Form onSubmit={addExpenseHandler}>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridAmount">
          <Form.Control
            type="number"
            ref={amountRef}
            placeholder="Enter Amount"
            required
          />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridCategory">
          <Form.Select name="category" id="category" ref={categoryRef}>
            <option value="food">Food</option>
            <option value="travel">Travel</option>
            <option value="shopping">Shopping</option>
          </Form.Select>
        </Form.Group>
      </Row>

      <Row className="mb-3">
        <Form.Group as={Col} controlId="formGridDescription">
          <Form.Control
            type="text"
            ref={descriptionRef}
            placeholder="Description"
            required
          />
        </Form.Group>
      </Row>

      <Button variant="primary" type="submit">
        Add Expense
      </Button>
    </Form>
  );
}

export default ExpensesForm;
