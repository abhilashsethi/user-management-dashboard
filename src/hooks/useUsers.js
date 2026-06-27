import { useEffect, useMemo, useState } from "react";
import userService from "../services/userService";

const useUsers = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const filteredUsers = useMemo(() => {
    return users.filter((user) => {
      const value = searchTerm.toLowerCase();

      return (
        user.firstName.toLowerCase().includes(value) ||
        user.lastName.toLowerCase().includes(value) ||
        user.email.toLowerCase().includes(value) ||
        user.department.toLowerCase().includes(value)
      );
    });
  }, [users, searchTerm]);

  const fetchUsers = async () => {
    try {
      setLoading(true);

      const data = await userService.getAllUsers();

      const formattedUsers = data.map((user) => ({
        id: user.id,
        firstName: user.name.split(" ")[0],
        lastName: user.name.split(" ").slice(1).join(" "),
        email: user.email,
        department: "IT",
      }));

      setUsers(formattedUsers);
    } catch (err) {
      setError("Failed to fetch users.");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return {
    users: filteredUsers,
    totalUsers: users.length,
    loading,
    error,
    searchTerm,
    setSearchTerm,
    refetch: fetchUsers,
  };
};

export default useUsers;