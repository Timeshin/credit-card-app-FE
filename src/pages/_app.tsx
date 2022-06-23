import { AppProps } from 'next/app'
import { ThemeProvider } from '@mui/material'
import theme from '../styles/theme'

import '../styles/global.scss'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}
