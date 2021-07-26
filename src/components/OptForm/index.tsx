import { Container, Input, Button, Text } from './styles/OptForm';

export default function OptForm({ children }: { children: JSX.Element[] }) {
  return <Container>{children}</Container>;
}

OptForm.Input = function OptFormInput({
  placeholder,
}: {
  placeholder: string;
}) {
  return <Input />;
};

OptForm.Button = function OptFormButton({ children }: { children: string }) {
  return (
    <Button>
      {children}
      <img src="/images/icons/chevron-right.png" alt="Try Now" />
    </Button>
  );
};

OptForm.Text = function OptFormText({ children }: { children: string }) {
  return <Text>{children}</Text>;
};

// OptForm.Break = function OptFormBreak({ children }: { children: any }) {
//   return <Break>{children}</Break>;
// };
