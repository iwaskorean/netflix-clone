import { Container, Input, Button, Text, Break } from './styles/OptForm';

interface Props {
  children: any;
}

export default function OptForm({ children, ...restProps }: Props) {
  return <Container {...restProps}>{children}</Container>;
}

OptForm.Input = function OptFormInput({
  placeholder,
  ...restProps
}: {
  placeholder: string;
}) {
  return <Input {...restProps} />;
};

OptForm.Button = function OptFormButton({ children, ...restProps }: Props) {
  return (
    <Button {...restProps}>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children, ...restProps }: Props) {
  return <Text {...restProps}>{children}</Text>;
};

OptForm.Break = function OptFormBreak({ children, ...restProps }: Props) {
  return <Break {...restProps}>{children}</Break>;
};
