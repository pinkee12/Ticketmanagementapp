import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { Box, Text, Button } from '@chakra-ui/react';

const TicketView = () => {
    const { id } = useParams();
    const [ticket, setTicket] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchTicket();
    }, []);

    const fetchTicket = async () => {
        const response = await axios.get(`http://localhost:5000/tickets/${id}`);
        setTicket(response.data);
    };

    const handleDelete = async () => {
        await axios.delete(`http://localhost:5000/tickets/${id}`);
        navigate('/tickets');
    };

    if (!ticket) {
        return <Text>Loading...</Text>;
    }

    return (
        <Box>
            <Text fontSize="2xl">{ticket.title}</Text>
            <Text>Description: {ticket.description}</Text>
            <Text>Assignee: {ticket.assignee}</Text>
            <Text>Status: {ticket.status}</Text>
            <Text>Priority: {ticket.priority}</Text>
            <Link to={`/tickets/${id}/edit`}>
                <Button mr="2">Edit</Button>
            </Link>
            <Button onClick={handleDelete} colorScheme="red">
                Delete
            </Button>
        </Box>
    );
};

export default TicketView;
