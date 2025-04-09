async function fetchExchangeRate() {
  const res = await fetch('https://v6.exchangerate-api.com/v6/44d4e46f7a9d65a47d867494/latest/USD');
  const data = await res.json();
  const rate = data.conversion_rates.CNY;
  const now = new Date();

  document.getElementById('rate').textContent = `¥${rate.toFixed(2)}`;

  let status = '';
  if (rate >= 7.25) {
    status = '📈 建议：可考虑换汇 ✅';
  } else if (rate <= 7.0) {
    status = '📉 建议：暂缓换汇 🚫';
  } else {
    status = '⏳ 建议：观望中 ⚠️';
  }
  document.getElementById('status').textContent = status;

  const timeStr = `${now.getFullYear()}年${now.getMonth()+1}月${now.getDate()}日 ${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
  document.getElementById('time').textContent = `更新于：${timeStr}`;
}

fetchExchangeRate();

