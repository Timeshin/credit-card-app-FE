import { IStateValue } from "src/reducer"

export interface IInput {
  item: IStateValue
  label: string
  onChangeState: (value: IStateValue) => void
  error?: boolean
  placeholder?: string
  errorText?: string
  inputType?: 'cardNumber' | 'cardDate' | 'CVV'
}
