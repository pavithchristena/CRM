
import mongoose from "mongoose";
const Schema = mongoose.Schema

const pipeline_sheet_schema = new Schema({
    opportunity_id: {
        type: String,
        unique: true
    },
    account_lead: {
        type: String,
    },
    opportunity_type: {
        type: String,
    },
    opportunity_description: {
        type: String,
    },
    geo_location: {
        type: String,
    },
    deal_$K: {
        type: String,
    },
    conf_percentage: {
        type: String
    },
    conf_adjust_deal: {
        type: String
    },
    funnel_stage: {
        type: String,
    },
    closure_date: {
        type: String
    },
    entry_date: {
        type: String
    },
    short_status: {
        type: String
    },
    poc_source: {
        type: String,
    },
    ss_sales: {
        type: String,
    },
    bu_lead: {
        type: String,
    },
    addtional_remarks: {
        type: String,
    }
})

const SalesPipelineSheet = mongoose.model("SalesPipelineSheet", pipeline_sheet_schema);
export default SalesPipelineSheet;
