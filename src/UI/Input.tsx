import React, { ChangeEvent } from 'react'
import { cardNumberValidation, cvvValidation, dateValidation } from '../helpers'
import { IInput } from 'src/interfaces/UI'

import { TextField, TextFieldProps } from '@mui/material'

const Input = ({
    item: { value, isValid },
    errorText,
    placeholder,
    multiline,
    inputType,
    label,
    onChangeState,
    error,
    onBlur,
  }: TextFieldProps & IInput) => {
  const onChangeHandler = ({ target }: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    let cardCode: string
    let checkIsValid = true
    const numbersValue = target.value.replace(/[^\d]/g, '')

    switch(inputType) {
      case 'cardNumber':
        cardCode = numbersValue.substring(0,16)
        cardCode = cardCode !== '' ? cardCode.match(/.{1,4}/g).join(' ') : ''
        if(!isValid) {
          checkIsValid = cardNumberValidation(cardCode)
        }
        break
      case 'cardDate':
        cardCode = numbersValue.substring(0,4)
        cardCode = cardCode !== '' ? cardCode.match(/.{1,2}/g).join('/') : ''
        if(!isValid) {
          checkIsValid = dateValidation(cardCode)
        }
        break
      case 'CVV':
        cardCode = numbersValue.substring(0,3)
        if(!isValid) {
          checkIsValid = cvvValidation(cardCode)
        }
        break
      default:
        cardCode = numbersValue
        if(!isValid) {
          checkIsValid = !!cardCode.length
        }
        break
    }

    onChangeState({ value: cardCode, isValid: checkIsValid })
  }

  return (
    <>
      <TextField
        error={error}
        value={value}
        label={label}
        helperText={errorText}
        placeholder={placeholder}
        multiline={multiline}
        onChange={onChangeHandler}
        onBlur={onBlur}
      />
    </>
  )
}

export default Input