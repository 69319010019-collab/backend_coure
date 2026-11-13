// server2.js
import express from 'express';
const app = express();
const PORT = 3001;

// 1. ตรวจสอบการทำงานของเซิร์ฟเวอร์
app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', message: 'Server is running' });
});

// 2. เปรียบเทียบเลข 2 ตัว (query)
// /api/formula1?a=10&b=4
app.get('/api/formula1', (req, res) => {
  const a = parseFloat(req.query.a);
  const b = parseFloat(req.query.b);

  if (isNaN(a) || isNaN(b)) {
    return res.status(400).json({ error: 'ต้องส่ง a และ b เป็นตัวเลข' });
  }

  let bigger = 'เท่ากัน';
  if (a > b) bigger = 'a';
  if (b > a) bigger = 'b';

  res.json({
    formula: 'ผลต่าง = เลขมาก - เลขน้อย',
    a,
    b,
    bigger,
    difference: Math.abs(a - b),
  });
});

// 3. อายุเป็นเดือน/สัปดาห์/วัน (path)
// /api/formula2/20/6  -> อายุ 20 ปี 6 เดือน
app.get('/api/formula2/:years/:months', (req, res) => {
  const years = parseInt(req.params.years);
  const months = parseInt(req.params.months);

  if (isNaN(years) || isNaN(months) || years < 0 || months < 0 || months > 11) {
    return res.status(400).json({ error: 'years ต้องไม่ติดลบ และ months ต้องอยู่ระหว่าง 0-11' });
  }

  const totalMonths = years * 12 + months;
  const totalDays = Math.round(totalMonths * 30.44);

  res.json({
    formula: 'เดือนรวม = ปี x 12 + เดือน, วัน = เดือนรวม x 30.44',
    years,
    months,
    totalMonths,
    totalWeeks: Math.round(totalDays / 7),
    totalDays,
  });
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));