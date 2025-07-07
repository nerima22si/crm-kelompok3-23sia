import { useEffect, useState, useRef } from "react";
import { supabase } from "../supabase";
const CustomerChat = () => {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const bottomRef = useRef(null);

    useEffect(() => {
        const stored = localStorage.getItem("user");
        if (stored) {
            const userData = JSON.parse(stored);
            setUserEmail(userData.email);
            fetchMessages(userData.email);
            subscribeToMessages(userData.email);
        }
    }, []);

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
            .channel(`chat-channel-${email}`)
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

    const sendMessage = async () => {
        if (!input.trim()) return;

        await supabase.from("chats").insert([
            {
                user_email: userEmail,
                sender: "user",
                message: input.trim(),
            },
        ]);
        setInput("");
    };

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    return (
        <div className="max-w-2xl mx-auto bg-white shadow rounded-xl p-6">
            <h2 className="text-xl font-bold mb-4 text-[#4b2e2b] text-center">
                Chat Customer Service
            </h2>

            <div className="h-80 overflow-y-auto border rounded p-4 mb-4 bg-[#fffdfc]">
                {messages.map((msg) => (
                    <div
                        key={msg.id}
                        className={`mb-3 flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                    >
                        <div
                            className={`px-4 py-2 rounded-lg max-w-xs text-sm shadow ${msg.sender === "user"
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
                    onKeyDown={(e) => e.key === "Enter" && sendMessage()}
                    className="flex-1 border rounded px-4 py-2"
                />
                <button
                    onClick={sendMessage}
                    className="bg-[#a35f2a] hover:bg-[#81421b] text-white px-4 py-2 rounded"
                >
                    Kirim
                </button>
            </div>
        </div>
    );
};

export default CustomerChat;
