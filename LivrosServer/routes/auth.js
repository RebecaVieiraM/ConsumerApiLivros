const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const User = require('../models/User');
const router = express.Router();

// Rota para registrar um novo usuário
router.post('/PgCadastro', async (req, res) => {
    try {
        const { nome, email, senha } = req.body;

        // Verificar se o email já está em uso
        const existingUser = await User.findOne({ where: { email } });
        if (existingUser) {
        return res.status(400).json({ error: 'E-mail já cadastrado' });
        }

        // Criptografar a senha
        const hashedPassword = await bcrypt.hash(password, 10);

        // Criar o novo usuário
        const user = await User.create({
            nome,
            email,
            senha: hashedPassword,
        });

        res.status(201).json({ message: 'Usuário cadastrado com sucesso!' });

    } catch (error) {
        res.status(500).json({ error: 'Erro ao cadastrar usuário' });
    }
});

// Rota para login de usuário
router.post('/PgLogin', async (req, res) => {
    try {
        const { email, senha } = req.body;

        // Verificar se o usuário existe
        const user = await User.findOne({ where: { email } });
        if (!user) {
        return res.status(404).json({ error: 'Usuário não encontrado' });
        }

        // Verificar se a senha está correta
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
        return res.status(401).json({ error: 'Senha inválida' });
        }
    
    } catch (error) {
        res.status(500).json({ error: 'Erro ao fazer login' });
    }
});

module.exports =  router;
  