import express from "express";

const app = express();
const PORT = 3000;

const equipment = [
    { id: 1, name: "คอมพิวเตอร์", category: "Computer" },
    { id: 2, name: "เครื่องพิมพ์", category: "Printer" },
    { id: 3, name: "เครื่องสแกน", category: "Computer" },
    { id: 4, name: "โปรเจ็คเตอร์", category: "Projector" },
];

app.get("/api/equipment/:id", (req, res) => {
    const id = Number(req.params.id);
    const result = equipment.find(e => e.id === id);

    if (!result) {
        res.status(404).json({ message: "ไม่พบข้อมูล" });
    } else {
        res.status(200).json(result);
    }
});

app.get("/api/equipment", (req, res) => {
    const cat =req.query.category;
    const result = cat 
    ?equipment.filter(e => e.category === cat):equipment;
    res.status(200).json( result );
});

app.get("/api/equipment/getNum", (req, res) => {
    res.status(200).json
    ({ num: equipment.length });
});

app.get("/api/health", (req, res) => {
    res.json({ status: "OK" });
});


app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});