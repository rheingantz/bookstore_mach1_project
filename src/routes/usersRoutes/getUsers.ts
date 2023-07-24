import { Router, Request, Response } from "express";
import { getUsers, getUserById } from '../../functions/getUsers';

const router = Router();

router.get('/api/atendentes/', async (req, res) => {
    const atendentes = await getUsers();
    res.json(atendentes);
});
  
router.get('/api/atendentes/:id', async (req, res) => {
    const currentId = Number(req.params.id)
    const atendente = await getUserById(currentId);
    res.json(atendente);
});

export default router;