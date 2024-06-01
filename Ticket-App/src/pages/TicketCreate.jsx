import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Input, Textarea, Select, Button } from '@chakra-ui/react';

const TicketCreate = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [assignee, setAssignee] = useState('');
    const [status, setStatus] = useState('Pending');
    const [priority, setPriority] = useState(0);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newTicket = { title, description, assignee, status, priority };
        await axios.post('http://localhost:5000/tickets', newTicket);
        navigate('/tickets');
    };

    return (
        <Box>
            <form onSubmit={handleSubmit}>
                <Input
                    placeholder="Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <Textarea
                    placeholder="Description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                <Select placeholder="Assignee" value={assignee} onChange={(e) => setAssignee(e.target.value)}>
                    <option value="John">John</option>
                    <option value="Jane">Jane</option>
                    <option value="Doe">Doe</option>
                </Select>
                <Select value={status} onChange={(e) => setStatus(e.target.value)}>
                    <option value="Pending">Pending</option>
                    <option value="Progress">Progress</option>
                    <option value="Completed">Completed</option>
                </Select>
                <Select value={priority} onChange={(e) => setPriority(e.target.value)}>
                    {[...Array(10).keys()].map(n => (
                        <option key={n} value={n}>{n}</option>
                    ))}
                </Select>
                <Button type="submit">Create Ticket</Button>
            </form>
        </Box>
    );
};

export default TicketCreate;
