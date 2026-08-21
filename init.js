const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
    .then(() => {
        console.log("connection successful");
    })
    .catch((err) => console.log(err));

async function main() {
    await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
        from: "neha",
        to: "priya",
        msg: "Send me your exam sheet.",
        created_at: new Date()
    },
    {
        from: "priya",
        to: "neha",
        msg: "Sure, I will send it in a few minutes.",
        created_at: new Date()
    },
    {
        from: "ali",
        to: "ahmed",
        msg: "Have you completed the assignment?",
        created_at: new Date()
    },
    {
        from: "ahmed",
        to: "ali",
        msg: "Almost done. I will submit it today.",
        created_at: new Date()
    },
    {
        from: "sara",
        to: "ayesha",
        msg: "Are you coming to university tomorrow?",
        created_at: new Date()
    },
    {
        from: "ayesha",
        to: "sara",
        msg: "Yes, I will be there at 9 AM.",
        created_at: new Date()
    },
    {
        from: "hamza",
        to: "usman",
        msg: "Can you send me the project files?",
        created_at: new Date()
    },
    {
        from: "usman",
        to: "hamza",
        msg: "Yes, I will send them tonight.",
        created_at: new Date()
    }
];

Chat.insertMany(allChats)
    .then((res) => {
        console.log(res);
    })
    .catch((err) => {
        console.log(err);
    });