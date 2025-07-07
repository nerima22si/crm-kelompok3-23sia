import { useEffect, useState, useRef } from "react";
import { supabase } from "./supabase";
const AdminChat = () => {
    const [users, setUsers] = useState([]);
    const [selectedEmail, setSelectedEmail] = useState("");
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const bottomRef = useRef(null);

    // Fetch distinct user_email
    const fetchUsers = async () => {
        const { data, error } = await supabase
            .from("chats")
            .select("user_email")
            .neq("user_email", null);

        if (!error) {
            const uniqueEmails = [...new Set(data.map((d) => d.user_email))];
            setUsers(uniqueEmails);
        }
    };

    // Fetch chat with selected user
    const fetchMessages = async (email) => {
        const { data, error } = await supabase
            .from("chats")
            .select("*")
            .eq("user_email", email)
            .order("created_at", { ascending: true });

        if (!error) setMessages(data);
    };

    const subscribeToMessages = (email) => {
        supabase
            .channel(`chat-admin-${email}`)
            .on(
                "postgres_changes",
                {
                    event: "INSERT",
                    schema: "public",
                    table: "chats",
                    filter: `user_email=eq.${email}`,
                },
                (payload) => {
                    setMessages((prev) => [...prev, payload.new]);
                }
            )
            .subscribe();
    };

    const handleSend = async () => {
        if (!input.trim() || !selectedEmail) return;
        await supabase.from("chats").insert([
            {
                user_email: selectedEmail,
                sender: "admin",
                message: input.trim(),
            },
        ]);
        setInput("");
    };

    useEffect(() => {
        fetchUsers();
    }, []);

    useEffect(() => {
        if (selectedEmail) {
            fetchMessages(selectedEmail);
            subscribeToMessages(selectedEmail);
        }
    }, [selectedEmail]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="flex min-h-screen bg-[#fdf6f1]">
            {/* Sidebar User List */}
            <div className="w-1/4 bg-white p-4 border-r shadow">
                <h3 className="font-bold text-[#4b2e2b] mb-4">Customer</h3>
                <ul>
                    {users.map((email) => (
                        <li
                            key={email}
                            onClick={() => setSelectedEmail(email)}
                            className={`cursor-pointer p-2 rounded mb-2 ${email === selectedEmail ? "bg-[#f8eadd] font-semibold text-[#c27c28]" : "hover:bg-gray-100"
                                }`}
                        >
                            {email}
                        </li>
                    ))}
                </ul>
            </div>

            {/* Chat Panel */}
            <div className="flex-1 p-6 flex flex-col">
                <h2 className="text-xl font-bold text-[#4b2e2b] mb-4">
                    Chat with {selectedEmail || "Select a customer"}
                </h2>

                <div className="flex-1 overflow-y-auto border rounded p-4 bg-white mb-4">
                    {messages.map((msg) => (
                        <div
                            key={msg.id}
                            className={`mb-3 flex ${msg.sender === "admin" ? "justify-end" : "justify-start"}`}
                        >
                            <div
                                className={`px-4 py-2 rounded-lg max-w-xs text-sm shadow ${msg.sender === "admin"
                                    ? "bg-[#d3a170] text-white"
                                    : "bg-gray-100 text-gray-800"
                                    }`}
                            >
                                {msg.message}
                            </div>
                        </div>
                    ))}
                    <div ref={bottomRef} />
                </div>

                <div className="flex gap-2">
                    <input
                        type="text"
                        value={input}
                        placeholder="Tulis pesan..."
                        onChange={(e) => setInput(e.target.value)}
                        onKeyDown={(e) => e.key === "Enter" && handleSend()}
                        className="flex-1 border rounded px-4 py-2"
                    />
                    <button
                        onClick={handleSend}
                        className="bg-[#a35f2a] hover:bg-[#81421b] text-white px-4 py-2 rounded"
                    >
                        Kirim
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminChat;
