import { Button, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import { useState } from 'react';

const Counter = () => {
    const [counter, setCounter] = useState(0);

    return (
        <Stack
            direction='row'
            alignItems='center'
            justifyContent='center'
            gap={2}>
            <Button variant='contained'>-</Button>
            <Typography variant='body1'>{counter}</Typography>
            <Button variant='contained'>+</Button>
        </Stack>
    )
}

export default Counter