interface Props {
  color?: "primary" | "secondary" | "warning" | "danger" | "success";
  children: string;
  onClicked: () => void;
}

const Button = ({ color = "primary", children, onClicked }: Props) => {
  return (
    <button type="button" className={"btn btn-" + color} onClick={onClicked}>
      {children}
    </button>
  );
};

export default Button;
