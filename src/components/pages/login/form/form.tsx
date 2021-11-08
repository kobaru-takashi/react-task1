type Props = {
  id: string;
  pass: string;
}

export const Form = (props: Props) => {
  const { id, pass } = props;
  return (
    <div>
      {/* LoginのComponentの中身を記述s */}
      id {id}
      pass {pass} 
      Form
    </div>
  )
}