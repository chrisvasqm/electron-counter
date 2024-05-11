import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    const handleMinus = () => {
        setCounter(counter - 1);
    }

    const handlePlus = () => {
        setCounter(counter + 1);
    }

    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='center'
            gap={2}>
            <Button variant='contained' onClick={handleMinus}>-</Button>
            <Typography variant='body1'>{counter}</Typography>
            <Button variant='contained' onClick={handlePlus}>+</Button>
        </Stack>
    )
}

export default Counter