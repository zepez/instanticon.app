interface LabelProps {
  name: string;
  value?: string | number;
  symbol?: string;
}

export default function Label(props: LabelProps) {
  return (
    <div className="flex items-center justify-between pb-1 pt-4">
      <p>{props.name}</p>
      <span className="flex items-center justify-center text-xs">
        {props.value}
        {props.symbol}
      </span>
    </div>
  );
}
