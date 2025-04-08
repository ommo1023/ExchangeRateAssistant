
async function fetchRate() {
  try {
    const res = await fetch('https://api.exchangerate.host/latest?base=USD&symbols=CNY');
    const data = await res.json();
    const rate = data.rates.CNY;
    const updated = new Date(data.date).toLocaleDateString();

    document.getElementById('rate').textContent = rate.toFixed(4);
    document.getElementById('status').textContent =
      rate >= 7.3 ? '📈 汇率偏高，适合换汇' : '📉 汇率偏低，观望为主';
    document.getElementById('time').textContent = `数据日期：${updated}`;
  } catch (err) {
    document.getElementById('rate').textContent = '获取失败';
    document.getElementById('status').textContent = '';
    document.getElementById('time').textContent = '';
  }
}

fetchRate();


