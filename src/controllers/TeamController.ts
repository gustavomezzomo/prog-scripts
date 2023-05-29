import AppDataSource from "../data-source";
import { Request, Response } from 'express';
import { Team } from '../entities/Teams';

class TeamController {
  public async getAllTeam (req: Request, res: Response) : Promise<Response> {
        try{
            const teamRepository = AppDataSource.getRepository(Team)
            .createQueryBuilder("team")
            .orderBy("team.name", "ASC")
            .getMany()
            return res.json((await teamRepository))
        }catch(err){
            return res.json({erro: "Não foi possivel pegar os team"})
        }
    }

    public async getTermoTeam (req: Request, res: Response) : Promise<Response> {
        try{
            const termo:any = req.params.termo
            const teamRepository = AppDataSource.getRepository(Team)
                .createQueryBuilder("time")
                .where("time.name like :name", { name:`%${termo}%` })
                //.orderBy("team.name", "ASC")
                .getMany()
            return res.json((await teamRepository))
        }catch(err){
            return res.json({erro: "Não foi possivel pegar os team"})
        }
    }

    public async postTeam (req: Request, res: Response) : Promise<Response> {
        try{
            const create = req.body
            const teamRepository = AppDataSource.getRepository(Team)
            const insert = new Team();
            insert.name = create.name.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
            const all = await teamRepository.save(insert)
            return res.json(all)
        }catch(err){
            return res.json({error: "O nome já existe"})
        }
    }

    public async putTeam (req: Request, res: Response) : Promise<Response> {
        try{
            const create = req.body
            const teamRepository = AppDataSource.getRepository(Team)
            const find = await teamRepository.findOneBy({id: create.id})
            find.name = create.name.replace(/(^\w{1})|(\s+\w{1})/g, letra => letra.toUpperCase());
            const all = await teamRepository.save(find)
            return res.json(all)
        }catch(err){
            return res.json({error: "O nome já existe"})
        }
    }

    public async deleteTeam (req: Request, res: Response) : Promise<Response> {
        try{
            const create = req.body
            const teamRepository = AppDataSource.getRepository(Team)
            const find = await teamRepository.findOneBy({id: create.id})
            
            const all = await teamRepository.delete(find)
            return res.json(all)
        }catch(err){
            return res.json({raw: [], affected: 0})
        }
    }

}

export default new TeamController();