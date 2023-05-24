const Voiture = require("../models/voiture-model");

// Function to create a new voiture
exports.createVoiture = async (req, res) => {
    try {
        const { name, img, description, prix } = req.body;
        const voiture = await Voiture.create({
        namee,
        img,
        description,
        prix,
        });
        res
        .status(201)
        .json({ message: "Voiture created successfully", voiture });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err });
    }
    }

// Function to update a voiture
exports.updateVoiture = async (req, res) => {
    try {
        const { name, img, description, prix } = req.body;
        const { id } = req.params;
        const voiture = await Voiture.update(
        { name, img, description, prix },
        { where: { id } }
        );
        res
        .status(200)
        .json({ message: "Voiture updated successfully", voiture });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err });
    }
    }

// Function to delete a voiture
exports.deleteVoiture = async (req, res) => {

    try {
        const { id } = req.params;
        await Voiture.destroy({ where: { id } });
        res.status(200).json({ message: "Voiture deleted successfully" });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err });
    }
    }

// Function to get all voitures
exports.getAllVoitures = async (req, res) => {
    try {
        const voitures = await Voiture.findAll();
        res.status(200).json({ voitures });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err });
    }
    }

// Function to get a voiture by id
exports.getVoitureById = async (req, res) => {
    try {
        const { id } = req.params;
        const voiture = await Voiture.findOne({ where: { id } });
        res.status(200).json({ voiture });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err });
    }
    }

// Function to get a voiture by name
exports.getVoitureByName = async (req, res) => {
    try {
        const { name } = req.params;
        const voiture = await Voiture.findOne({ where: { name } });
        res.status(200).json({ voiture });
    } catch (err) {
        res.status(500).json({ message: "Something went wrong", err });
    }
    }

