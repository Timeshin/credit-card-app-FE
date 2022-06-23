export enum FormValues {
  SetCardNumber = 'SetCardNumber',
  SetExpDate = 'SetExpDate',
  SetCvv = 'SetCvv',
  SetAmount = 'SetAmount',
}

export interface IStateValue {
  value: string
  isValid: boolean
}

interface IFromValuesAction {
  type: FormValues
  payload: IStateValue
}

interface IFormValuesState {
  cardNumber: IStateValue
  expDate: IStateValue
  cvv: IStateValue
  amount: IStateValue
}

const reducer = (state: IFormValuesState, { type, payload }: IFromValuesAction) => {
  switch (type) {
    case FormValues.SetCardNumber:
      return {
        ...state,
        cardNumber: payload
      }
    case FormValues.SetExpDate:
      return {
        ...state,
        expDate: payload
      }
    case FormValues.SetCvv:
      return {
        ...state,
        cvv: payload
      }
    case FormValues.SetAmount:
      return {
        ...state,
        amount: payload
      }
    default:
      return {
        ...state
      }
  }
}

export default reducer
