import { Box, Typography } from '@mui/material'
import Counter from './Counter'

const App = () => {
    return (
        <>
            <Typography
                align='center'
                variant='h4'
                marginBottom={1}>
                Counter
            </Typography>

            <Counter />
        </>
    )
}

export default App