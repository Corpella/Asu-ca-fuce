import React from 'react'
import Botton from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid';

import 'css/Menu.css'

interface MenuElements {
    startText: string;
    optionsText: string;
    quitText: string
}
interface Props {
    menu: MenuElements;
}
export const Menu: React.FC<Props> = ({ menu }) => {
    return <div className="items-center">
        <Grid
            container
            direction="column"
            justify="space-between"
            alignItems="center"
        >

            <Botton variant="contained"> {menu.startText}</Botton>
            <Botton variant="contained">{menu.optionsText}</Botton>
            <Botton variant="contained">{menu.quitText}</Botton>
        </Grid>
    </div>
}