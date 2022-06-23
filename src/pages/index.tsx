import React, { useMemo, useReducer, useState } from 'react'
import Head from 'next/head'
import reducer, { FormValues } from '../reducer/index'

import Input from '../UI/Input'
import { Box, Grid } from '@mui/material'
import LoadingButton from '@mui/lab/LoadingButton'
import { cardNumberValidation, cvvValidation, dateValidation } from 'src/helpers'

const CardPage = () => {
  const [status, setStatus] = useState<'done' | 'pending' | 'error'>('done')
  const [state, dispatch] = useReducer(reducer, {
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
  })
  const isFormValid = useMemo(() => {
    const stateValuesArray = Object.values(state)

    return stateValuesArray.every(({ isValid, value }) => isValid && value.length)
  }, [state])

  return (
    <>
      <Head>
        <title>Payment</title>
        <link rel="icon" href="./assets/icons/paymentPage.png" />
        <meta name="description" content='Credit card payment' />
      </Head>
      <Box>
        <Grid container spacing={2} height='100%' alignItems='center' justifyContent='center' direction='column'>
          <Grid item>
            <Input
              item={state.cardNumber}
              label='Card number'
              errorText={!state.cardNumber.isValid && 'Invalid value'}
              error={!state.cardNumber.isValid}
              placeholder='XXXX XXXX XXXX XXXX'
              onChangeState={(value) => dispatch({ type: FormValues.SetCardNumber, payload: value })}
              onBlur={() => dispatch({
                  type: FormValues.SetCardNumber,
                  payload: {...state.cardNumber, isValid: cardNumberValidation(state.cardNumber.value)}
                })
              }
              multiline
              inputType='cardNumber'
            />
          </Grid>
          <Grid item>
            <Input
              item={state.expDate}
              error={!state.expDate.isValid}
              errorText={!state.expDate.isValid && 'Invalid value'}
              label='Expiry Date'
              placeholder='MM/YY'
              inputType='cardDate'
              onChangeState={(value) => dispatch({ type: FormValues.SetExpDate, payload: value })}
              onBlur={() => dispatch({
                type: FormValues.SetExpDate,
                payload: {...state.expDate, isValid: dateValidation(state.expDate.value)}
              })}
              multiline
            />
          </Grid>
          <Grid item>
            <Input
              item={state.cvv}
              error={!state.cvv.isValid}
              label='CVV'
              errorText={!state.cvv.isValid && 'Invalid value'}
              placeholder='XXX'
              onChangeState={(value) => dispatch({ type: FormValues.SetCvv, payload: value })}
              inputType='CVV'
              onBlur={() => dispatch({
                type: FormValues.SetCvv,
                payload: {...state.cvv, isValid: cvvValidation(state.cvv.value)}
              })}
              multiline
            />
          </Grid>
          <Grid item>
            <Input
              item={state.amount}
              error={!state.amount.isValid}
              errorText={!state.amount.isValid && 'Invalid value'}
              label='Amount'
              onChangeState={(value) => dispatch({ type: FormValues.SetAmount, payload: value })}
              onBlur={() => {
                dispatch({
                  type: FormValues.SetAmount,
                  payload: {...state.amount, isValid: !!state.amount.value.length}
                })
              }}
              multiline
            />
          </Grid>
          <Grid item>
            <LoadingButton
              onClick={() => {console.log('click')}}
              loading={status === 'pending'}
              loadingIndicator="Loading..."
              variant="outlined"
              disabled={!isFormValid}
              fullWidth
            >
              Transfer
            </LoadingButton>
          </Grid>
        </Grid>
      </Box>
    </>
  )
}

export default CardPage
