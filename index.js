async function fetchExchangeRate() {
  const response = await fetch("https://v6.exchangerate-api.com/v6/44d4e46f7a9d65a47d867494/latest/USD");
  const data = await response.json();

  const rate = data.conversion_rates.CNY;
  const rateElement = document.getElementById("rate");
  const statusElement = document.getElementById("status");
  const timeElement = document.getElementById("time");

  rateElement.textContent = `¥${rate.toFixed(2)}`;

  // 提示信息：简单买入信号
  if (rate >= 7.30) {
    statusElement.textContent = "📈 建议：可考虑换汇 ✅";
    statusElement.style.color = "green";
  } else if (rate <= 7.15) {
    statusElement.textContent = "📉 建议：暂不换汇 ⛔️";
    statusElement.style.color = "red";
  } else {
    statusElement.textContent = "📊 建议：观望中 ⚠️";
    statusElement.style.color = "orange";
  }

  // 显示更新时间
  const now = new Date();
  timeElement.textContent = `更新于：${now.toLocaleString("zh-CN")}`;
}

fetchExchangeRate();
setInterval(fetchExchangeRate, 1000 * 60 * 60); // 每小时自动更新一次



