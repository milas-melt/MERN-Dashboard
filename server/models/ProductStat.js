import mongoose from "mongoose";

const ProductStatSchema = new mongoose.Schema(
    {
        // MAKE THIS REQUIRED
        productId: String,
        yearlySalesTotal: Number,
        yearlyTotalSoldUnits: Number,
        year: Number,
        monthlyData: [
            {
                month: String,
                totalSales: Number,
                totalUnits: Number,
            },
        ],
        dailyData: {
            data: String,
            totalSales: Number,
            totalUnits: Number,
        },
    },
    { timestamps: true }
);

const ProductStat = mongoose.model("ProductStat", ProductStatSchema);
export default ProductStat;