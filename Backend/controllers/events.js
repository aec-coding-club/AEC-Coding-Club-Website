const event = require("../models/Event");
const User = require("../models/User");

exports.get = async (req, res) => {
  try {
    const event = await event.findById(
      req.params.id,
      "_id title description image form date"
    );

    if (!event) return res.status(404).json({ error: "No Events Found" });

    res.status(200).json(event);
  } catch (error) {
    res.status(500).json({ error: "Cannot Find Event" });
  }
};

// Get All Events
exports.getAll = async (req, res) => {
  try {
    const events = await event.find(
      {},
      "_id title description image form date"
    );

    res.status(200).json({ events, length: events.length });
  } catch (error) {
    res.status(500).json({ error: "Cannot Find Events" });
  }
};

// Create New Event
exports.add = async (req, res) => {
  try {
    // const { error } = validator.event(req.body);
    // if (error) return res.status(406).json({ error: "Invalid Event Data" });

    const newEvent = await event.create(req.body);

    res.status(200).json({
      _id: newEvent._id,
      title: newEvent.title,
      description: newEvent.description,
      image: newEvent.image,
      form: newEvent.form,
      date: newEvent.date,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, token: true, error: "Cannot Create Event" });
  }
};

// Update Specific Event Based On It's ID
exports.update = async (req, res) => {
  try {
    const { error } = validator.event(req.body);
    if (error)
      return res
        .status(406)
        .json({ success: false, token: true, error: "Invalid Event Data" });

    const updatedEvent = await event.findByIdAndUpdate(
      req.params.id,
      req.body
      // { new: true, runValidators: true }
    );

    if (!updatedEvent)
      return res
        .status(404)
        .json({ success: false, token: true, message: "Cannot Find Event" });

    res.status(200).json({
      _id: updatedEvent._id,
      title: updatedEvent.title,
      description: updatedEvent.description,
      image: updatedEvent.image,
      form: updatedEvent.form,
      date: updatedEvent.date,
    });
  } catch (error) {
    res
      .status(500)
      .json({ success: false, token: true, error: "Cannot Update Event" });
  }
};

// Dete Specifit Event Based On It's ID
exports.deletevent = async (req, res) => {
  try {
    const deletedEvent = await event.findByIdAndDelete(req.params.id);

    if (!deletedEvent)
      return res
        .status(404)
        .json({ success: false, token: true, message: "Cannot Find Event" });

    res.status(200).json({
      success: true,
      token: true,
      _id: deletedEvent._id,
      title: deletedEvent.title,
      description: deletedEvent.description,
      image: deletedEvent.image,
      form: deletedEvent.form,
      date: deletedEvent.date,
    });
  } catch (error) {
    res.status(500).json({
      token: true,
      error: "Cannot Delete Event",
    });
  }
};
// ! TODO: When User Registers into a Event No Duplicate event can't be in the same array
exports.registerevent = async (req, res) => {
  try {
    const id = req.params.id;
    const user_id = req.user.user_id;

    const tempuser = await User.findOne({ uid: user_id });
    console.log(tempuser);
    if (tempuser.event.includes(id)) {
      return res.status(400).json({
        success: false,
        token: true,
        message: "You are Already Registered for the Event",
      });
    }
    const updateuser = await User.updateOne(
      { uid: user_id },
      { $push: { event: id } }
    );
    return res
      .status(200)
      .json({ success: true, token: true, message: "Event Added", updateuser });
  } catch (error) {
    return res
      .status(401)
      .json({ success: false, token: true, message: error.message });
  }
};
