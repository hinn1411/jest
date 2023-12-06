import Counter from "./Counter";

describe(Counter, () => {
  // Props tests
  it("counter displays correct initial counter", () => {
    const {get} = render(<Counter initValue={0} />);
  });
});