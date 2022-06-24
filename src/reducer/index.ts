export enum FormValues {
  SetCardNumber = 'SetCardNumber',
  SetExpDate = 'SetExpDate',
  SetCvv = 'SetCvv',
  SetAmount = 'SetAmount',
  clear = 'clear',
}

export interface IStateValue {
  value: string
  isValid: boolean
}

interface IFromValuesAction {
  type: FormValues
  payload: IStateValue
}

export interface IFormValuesState {
  cardNumber: IStateValue
  expDate: IStateValue
  cvv: IStateValue
  amount: IStateValue
}

const initialState = {
  cardNumber: {
    value: '',
    isValid: true
  },
  expDate: {
    value: '',
    isValid: true
  },
  cvv: {
    value: '',
    isValid: true
  },
  amount: {
    value: '',
    isValid: true
  },
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
    case FormValues.clear:
      return state = initialState
    default:
      return {
        ...state
      }
  }
}

export default reducer
