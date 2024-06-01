import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { Box, Button, Grid, Select } from '@chakra-ui/react';
import TicketCard from '../components/TicketCard';

const Tickets = () => {
    const [tickets, setTickets] = useState([]);
    const [filter, setFilter] = useState('');
    const [sort, setSort] = useState('');

    useEffect(() => {
        fetchTickets();
    }, []);

    const fetchTickets = async () => {
        const response = await axios.get('http://localhost:5000/tickets');
        setTickets(response.data);
    };

    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/tickets/${id}`);
        fetchTickets();
    };

    const filteredTickets = tickets
        .filter(ticket => (filter ? ticket.status === filter : true))
        .sort((a, b) => {
            if (sort === 'Low to High') {
                return a.priority - b.priority;
            } else if (sort === 'High to Low') {
                return b.priority - a.priority;
            } else {
                return 0;
            }
        });

    return (
        <Box>
            <Box display="flex" justifyContent="space-between" mb="4">
                <Link to="/tickets/create">
                    <Button>Create Ticket</Button>
                </Link>
                <Box>
                    <Select placeholder="Sort by Priority" onChange={(e) => setSort(e.target.value)}>
                        <option value="Low to High">Low to High</option>
                        <option value="High to Low">High to Low</option>
                    </Select>
                    <Select placeholder="Filter by Status" onChange={(e) => setFilter(e.target.value)}>
                        <option value="Pending">Pending</option>
                        <option value="Progress">Progress</option>
                        <option value="Completed">Completed</option>
                    </Select>
                </Box>
            </Box>
            <Grid templateColumns="repeat(auto-fill, minmax(300px, 1fr))" gap="6">
                {filteredTickets.map(ticket => (
                    <TicketCard key={ticket.id} ticket={ticket} onDelete={handleDelete} />
                ))}
            </Grid>
        </Box>
    );
};

export default Tickets;
