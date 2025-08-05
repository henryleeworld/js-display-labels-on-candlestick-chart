var barData = [];
$.getJSON("data/data.json", function(data) {
    barData = data;
    var config = {
        type: 'candlestick',
        data: {
            datasets: [{
                label: 'K 線',
                data: barData
            }]
        },
        options: {
            animation: {
                onComplete: done
            },
            responsive: true,
            scales: {
                x: {
                    type: 'time',
                    time: {
                        unit: 'day'
                    },
                    ticks: {
                        source: 'data'
                    }
                },
                y: {
                    beginAtZero: false
                }
            },
            plugins: {
                legend: {
                    display: false,
                }
            }
        },
        // plugins: [ChartDataLabels],
    };
    var ctx = document.getElementById('chart-area').getContext('2d');
    window.candlestickChart = new Chart(ctx, config);
});

function done() {
    var url = window.candlestickChart.toBase64Image();
    document.getElementById("chart-url").src = url;
}