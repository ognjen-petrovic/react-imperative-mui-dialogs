import { Avatar, Button, IconButton, List, ListItem, ListItemAvatar, ListItemText } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { usePrompt, useConfirm, useAlert } from '../../dist';
import { Container } from '@mui/system';
import { memo, useCallback, useState } from 'react';

const Item = memo(function Item({title, index, onDelete} : {title: string, index: number, onDelete: (index: number)=>void}) {
    return (
        <ListItem
        secondaryAction={
            <IconButton edge="end" aria-label="delete" onClick={() => onDelete(index)}>
                <DeleteIcon />
            </IconButton>
        }
    >
        <ListItemAvatar>
            <Avatar>
                <ArrowForwardIosIcon />
            </Avatar>
        </ListItemAvatar>
        <ListItemText
            primary={title}
        />
    </ListItem>
    )
})

function App() {
    const [items, setItems] = useState(['Item 1','item 2', 'Item 3']);

    const alert = useAlert()
    const confirm = useConfirm()
    const prompt = usePrompt()

    async function addItem() {
        const newItem = await prompt('New item title?')
        if (newItem === null) return

        if (newItem === '') {
            return await alert('Item cannot be an empty string')
        }

        if (items.includes(newItem)) {
            return await alert(`"${newItem}" already exists.`)
        }

        setItems([...items, newItem])
    }

    async function deleteItemAtIndex(index: number) {
        if (await confirm(`Delete "${items[index]}" item?`))
        {
            items.splice(index, 1)
            setItems([...items])
        }
    }

    return (
        <Container maxWidth="xs">
            <List>
                {items.map((item, index) => 
                    <Item key={item} title={item} index={index} onDelete={deleteItemAtIndex}/>
                )}
            </List>


            <Button variant="outlined" onClick={addItem}>
                Add an item
            </Button>

        </Container>

    )
}

export default App
