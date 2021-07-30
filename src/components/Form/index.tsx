import {
  Container,
  Base,
  Error,
  Title,
  Text,
  TextSmall,
  Link,
  Input,
  Submit,
} from './styles/Form';

export default function Form({
  children,
}: {
  children: JSX.Element[] | string;
}) {
  return <Container>{children}</Container>;
}

Form.Base = function FormBase({
  onSubmit,
  method,
  children,
}: {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  method: string;
  children: JSX.Element[];
}) {
  return (
    <Base onSubmit={onSubmit} method={method}>
      {children}
    </Base>
  );
};

Form.Error = function FormError({ children }: { children: string }) {
  return <Error>{children}</Error>;
};

Form.Title = function FormTitle({ children }: { children: string }) {
  return <Title>{children}</Title>;
};

// Have to Fix
Form.Text = function FormText({ children }: { children: any }) {
  return <Text>{children}</Text>;
};

Form.TextSmall = function FormTextSmall({ children }: { children: string }) {
  return <TextSmall>{children}</TextSmall>;
};

Form.Link = function FormTextLink({
  to,
  children,
}: {
  to: string;
  children: string;
}) {
  return <Link to={to}>{children}</Link>;
};

Form.Input = function FormInput({
  placeholder,
  value,
  onChange,
  autoComplete,
  type,
}: {
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  autoComplete?: string;
  type: string;
}) {
  return (
    <Input placeholder={placeholder} value={value} onChange={onChange}></Input>
  );
};

Form.Submit = function FormTextSubmit({
  disabled,
  type,
  children,
}: {
  disabled: boolean;
  type: 'submit';
  children: string;
}) {
  return (
    <Submit disabled={disabled} type={type}>
      {children}
    </Submit>
  );
};
