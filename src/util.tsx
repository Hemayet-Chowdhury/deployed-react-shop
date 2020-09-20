  
export default {
    formatCurrency: function (num:number) {
        return '$' + Number(num.toFixed(1)).toLocaleString() + ' ';
    }
}