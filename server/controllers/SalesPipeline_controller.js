import SalesPipelineSheet from "../schemas/SalesPipelineSheet.js";
import Counter from "../schemas/CounterModel.js";


Counter.findOne({ _id: 'opportunityIdCounter' })
    .then((counter) => {
        if (!counter) {
            counter = new Counter({ _id: 'opportunityIdCounter', sequenceValue: 10080 });
            return counter.save();
        }
    })
    .catch((error) => {
        throw error;
    });
export const addNew = async (req, res, next) => {
    try {
        // Retrieve the current counter value
        const counter = await Counter.findById('opportunityIdCounter');
        let sequenceValue = counter.sequenceValue;

        // Increment the counter value
        counter.sequenceValue++;
        await counter.save();

        const addnew_details = new SalesPipelineSheet({
            opportunity_id: sequenceValue.toString(), // Convert to string if necessary
            ...req.body
        });
        await addnew_details.save();
        res.status(200).send("Added New Customer");
    } catch (err) {
        next(err);
    }
};

export const getClientData = async (req, res, next) => {
    try {
        const getdata = await SalesPipelineSheet.find({})
        res.status(200).json(getdata);
    }
    catch (err) {
        next(err)
    }
}