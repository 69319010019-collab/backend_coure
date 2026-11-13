# Equipment API

| Method | Endpoint | ผลลัพธ์ |
|---|---|---|
| GET | /api/equipment | แสดงทั้งหมด |
| GET | /api/equipment?category=computer | กรองตามประเภท |
| GET | /api/equipment/count | จำนวนรายการ |
| GET | /api/equipment/:id | พบ 200, ID ผิดรูปแบบ 400, ไม่พบ 404 |
| POST | /api/equipment | สร้างสำเร็จ 201, ข้อมูลผิด 400 |