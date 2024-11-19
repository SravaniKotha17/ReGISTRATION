const express = require('express');
const router = express.Router();
const db = require('../db/connection');

// CREATE
router.post('/', async (req, res) => {
    const { name, email, dateOfBirth, phone } = req.body;
    try {
        const [result] = await db.query(
            'INSERT INTO Registration (Name, Email, DateOfBirth, Phone) VALUES (?, ?, ?, ?)',
            [name, email, dateOfBirth, phone]
        );
        res.status(201).json({ message: 'Registration created successfully', id: result.insertId });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ ALL
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM Registration');
        res.status(200).json(rows);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// READ BY ID
router.get('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [rows] = await db.query('SELECT * FROM Registration WHERE ID = ?', [id]);
        if (rows.length === 0) return res.status(404).json({ message: 'Registration not found' });
        res.status(200).json(rows[0]);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// UPDATE
router.put('/:id', async (req, res) => {
    const { id } = req.params;
    const { name, email, dateOfBirth, phone } = req.body;
    try {
        const [result] = await db.query(
            'UPDATE Registration SET Name = ?, Email = ?, DateOfBirth = ?, Phone = ? WHERE ID = ?',
            [name, email, dateOfBirth, phone, id]
        );
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Registration not found' });
        res.status(200).json({ message: 'Registration updated successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

// DELETE
router.delete('/:id', async (req, res) => {
    const { id } = req.params;
    try {
        const [result] = await db.query('DELETE FROM Registration WHERE ID = ?', [id]);
        if (result.affectedRows === 0) return res.status(404).json({ message: 'Registration not found' });
        res.status(200).json({ message: 'Registration deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;
