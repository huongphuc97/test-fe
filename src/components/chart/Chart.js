import { useEffect, useRef } from "react"

const CustomChart = ({ showButtons, date, width, height, labels, datasets }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    const canvas = chartRef.current;
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    const padding = 20;

    // Calculate the maximum data value across all datasets
    const maxDataValue = Math.max(...datasets.flatMap(dataset => dataset.data));

    // Calculate the width and height of each data point
    const dataPointWidth = (width - 2 * padding) / (labels.length - 1);
    const dataPointHeight = (height - 2 * padding) / maxDataValue;

    // Draw the vertical axis
    ctx.strokeStyle = '#ccc';
    ctx.lineWidth = 1;
    for (let i = 0; i < labels.length; i++) {
      const x = padding + i * dataPointWidth;
      ctx.beginPath();
      ctx.moveTo(x, padding);
      ctx.lineTo(x, height - padding);
      ctx.stroke();
    }

    // Draw the data points and lines for each dataset
    datasets.forEach((dataset) => {
      ctx.lineWidth = 3;
      ctx.strokeStyle = dataset.color;
      ctx.beginPath();
      ctx.moveTo(padding - 2, height - padding - dataset.data[0] * dataPointHeight);

      const x0 = padding;
      const y0 = height - padding - dataset.data[0] * dataPointHeight;
      ctx.arc(x0, y0, 3, 0, Math.PI * 2);

      for (let i = 1; i < dataset.data.length; i++) {
        const x = padding + i * dataPointWidth;
        const y = height - padding - dataset.data[i] * dataPointHeight;
        ctx.lineTo(x, y);
        ctx.arc(x, y, 3, 0, Math.PI * 2); // Draw a small circle at each data point
      }
      ctx.stroke();
    });

    // Draw the labels
    ctx.fillStyle = '#fff';
    ctx.font = '12px';
    ctx.textAlign = 'center';
    for (let i = 0; i < labels.length; i++) {
      const x = padding + i * dataPointWidth;
      const y = height - padding + 15;
      ctx.fillText(labels[i], x, y);
    }
  })

  return (
    <div className="chart">
      {date && (
        <div className="chart-content">
          <span className="chart-text">body record</span>
          <span className="chart-date">{date}</span>
        </div>
      )}
      <canvas ref={chartRef} width={width} height={height} />
      {showButtons && (
        <div className="chart-buttons">
          <div className="chart-button font-custom">日</div>
          <div className="chart-button font-custom">週</div>
          <div className="chart-button font-custom">月</div>
          <div className="chart-button font-custom active">年</div>
        </div>
      )}
    </div>
  )
}

export default CustomChart