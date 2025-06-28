type Props = {
    increment: (value: number) => void;
    decrement: (value: number) => void;
    count: number;
    total: number;
}

export const Counter = ({ increment, decrement, count, total }: Props) => {
  return (
    <>
      <button style={{ width: '50px', height: '50px' }} onClick = {() => increment(1)}>+</button>
      <span>{count}</span>
      <button style={{ width: '50px', height: '50px' }} onClick = {() => decrement(1)}>-</button>
      <span>{total}</span>
    </>
  );
}