import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Text } from '@chakra-ui/react';

const TicketCard = ({ ticket, onDelete }) => {
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="6">
            <Text fontSize="xl">{ticket.title}</Text>
            <Text>Status: {ticket.status}</Text>
            <Text>Priority: {ticket.priority}</Text>
            <Box mt="4">
                <Link to={`/tickets/${ticket.id}`}>
                    <Button mr="2">View</Button>
                </Link>
                <Button onClick={() => onDelete(ticket.id)} colorScheme="red">
                    Delete
                </Button>
            </Box>
        </Box>
    );
};

export default TicketCard;
