import React from 'react'
import { IPostCreditCardRes } from 'src/interfaces/services'

import { Paper, Typography } from '@mui/material'

const ResponseData = ({ RequestId, Amount }: IPostCreditCardRes['data']) => {
  return (
    <Paper elevation={2}>
      <Typography>
        ID: {RequestId}
      </Typography>
      <Typography>
        Amount: {Amount}
      </Typography>
    </Paper>
  )
}

export default ResponseData