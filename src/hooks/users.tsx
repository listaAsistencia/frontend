import { useEffect, useState } from 'react';

export interface UserProps {
    id: string;
    name: string;
    isPresent: boolean;
}

export const useUsers = () => {
    const [users, setUsers] = useState<UserProps[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const API_USERS = import.meta.env.VITE_API_USERS;
        const fetchUsers = async () => {
            try {
                const response = await fetch(API_USERS);
                if (!response.ok) {
                    throw new Error('Failed to fetch users');
                }
                const data: UserProps[] = await response.json();
                setUsers(data);
                setLoading(false);
            } catch (err: any) {
                setError(err.message);
                setLoading(false);
            }
        };

        fetchUsers();
    }, []);

    return { users, loading, error };
};