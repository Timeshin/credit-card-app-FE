import axios from 'axios'
import { IPostCreditCardRes } from 'src/interfaces/services'
import { IFormValuesState } from '../reducer/index'

const sendCreditsCard = async (bodyReq: IFormValuesState) => {
  const { data } = await axios.post<IFormValuesState, IPostCreditCardRes>('http://localhost:5000/creditCards', bodyReq)

  return data
}

export default sendCreditsCard
