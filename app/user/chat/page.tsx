export default function UserChat() {
  const messages = [
    { name: "Grace", message: "Ok, See you", time: "30 min", unread: 1, image: "/images/grace.jpg", verified: true },
    { name: "David Will", message: "Ok, See you", time: "30 min", unread: 1, image: "/images/david.jpg", verified: true },
    { name: "Anand Karthik", message: "Ok, See you", time: "40 min", unread: 2, image: "/images/anand.jpg", verified: false },
    { name: "Smith", message: "Ok, See you", time: "40 min", unread: 2, image: "/images/smith.jpg", verified: false },
    { name: "John", message: "Ok, See you", time: "1 hour", unread: 1, image: "/images/john.jpg", verified: false },
    { name: "Johana Sen", message: "Ok, See you", time: "1 hour", unread: 1, image: "/images/johana.jpg", verified: false },
    { name: "Safana", message: "Never mind", time: "Yesterday", unread: 0, image: "/images/safana.jpg", verified: false },
    { name: "Rajesh", message: "Never mind", time: "Yesterday", unread: 0, image: "/images/rajesh.jpg", verified: false },
  ];

  return (
    <div className="p-4 bg-white min-h-screen">
      {/* Header */}
      <h1 className="text-3xl font-bold mb-4">Messages</h1>

      {/* Search Bar */}
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search"
          className="w-full p-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      {/* Message List */}
      <ul>
        {messages.map((msg, index) => (
          <li
            key={index}
            className="flex items-center justify-between py-3 border-b last:border-b-0"
          >
            {/* Left Side */}
            <div className="flex items-center space-x-3">
              <img
                src={msg.image}
                alt={msg.name}
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <div className="flex items-center space-x-1">
                  <h2 className="text-lg font-semibold">{msg.name}</h2>
                  {msg.verified && (
                    <span className="text-purple-500 text-sm">✔</span>
                  )}
                </div>
                <p className="text-gray-500 text-sm">{msg.message}</p>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-center">
              <span className="text-gray-400 text-sm">{msg.time}</span>
              {msg.unread > 0 && (
                <span className="bg-purple-500 text-white w-6 h-6 flex items-center justify-center rounded-full text-xs">
                  {msg.unread}
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
