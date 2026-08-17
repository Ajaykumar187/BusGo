import Bus from "../models/Bus.js";
import generateSeats from "../utils/generateSeats.js";

// Add Bus
export const addBus = async (req, res) => {

    try{

        const seats=[];

        for(let i=1;i<=40;i++){

            seats.push({

                seatNumber:i,

                isBooked:false

            })

        }

        const bus=await Bus.create({

            ...req.body,

            seats : generateSeats(req.body.totalSeats || 40)

        })

        res.status(201).json(bus)

    }

    catch(err){

        res.status(500).json({

            message:err.message

        })

    }

}

// Get All Buses
export const getBuses = async (req, res) => {
  try {
    const buses = await Bus.find();

    res.json({
      success: true,
      buses,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Search Bus
export const searchBus = async (req, res) => {
  try {
    const { from, to } = req.query;

   const buses = await Bus.find({
  source: { $regex: from, $options: "i" },
  destination: { $regex: to, $options: "i" },
});

    res.status(200).json({
      success: true,
      count: buses.length,
      buses,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBusById = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id);

    if (!bus) {
      return res.status(404).json({
        success: false,
        message: "Bus not found",
      });
    }

    res.json({
      success: true,
      bus,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

export const getBusSeats = async (req, res) => {
  try {
    const bus = await Bus.findById(req.params.id);

    if (!bus) {
      return res.status(404).json({
        success: false,
        message: "Bus not found",
      });
    }

    res.status(200).json({
      success: true,
      seats: bus.seats,
      fare: bus.fare,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Bus
export const updateBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!bus) {
      return res.status(404).json({
        success: false,
        message: "Bus not found",
      });
    }

    res.status(200).json({
      success: true,
      bus,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Bus
export const deleteBus = async (req, res) => {
  try {
    const bus = await Bus.findByIdAndDelete(req.params.id);

    if (!bus) {
      return res.status(404).json({
        success: false,
        message: "Bus not found",
      });
    }

    res.status(200).json({
      success: true,
      message: "Bus deleted successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

